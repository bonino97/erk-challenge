/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import useGetProducts from '@/hooks/useGetProducts';
import { IProduct } from '@/types/IProduct.interface';

interface FilterCriteria {
  type?: string;
  priceRange?: { min: number; max: number };
}

interface ProductsContextData {
  products: IProduct[];
  productTypes: string[];
  isLoading: boolean;
  error: unknown;
  setFilterCriteria: (criteria: FilterCriteria) => void;
  sortProducts: (
    sortOption: 'alphabeticSort' | 'priceAsc' | 'priceDesc'
  ) => void;
  toggleProductType: (productType: string) => void;
}

const ProductsContext = createContext<ProductsContextData | undefined>(
  undefined
);

export const useProducts = (): ProductsContextData => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, isLoading, error } = useGetProducts();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({});
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>(
    []
  );

  useEffect(() => {
    const types = new Set(data?.map((product) => product.product_type));
    setProductTypes([...types]);
  }, [data]);

  useEffect(() => {
    let products = data || [];
    if (selectedProductTypes.length > 0) {
      products = products.filter((product) =>
        selectedProductTypes.includes(product.product_type)
      );
    }

    if (filterCriteria.priceRange) {
      const { min, max } = filterCriteria.priceRange;
      products = products.filter((product) =>
        product.variants.some((variant) => {
          const price = parseFloat(variant.price);
          return price >= min && price <= max;
        })
      );
    }

    setFilteredProducts(products);
  }, [data, filterCriteria, selectedProductTypes]);

  const sortProducts = (
    sortOption: 'alphabeticSort' | 'priceAsc' | 'priceDesc'
  ) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOption === 'alphabeticSort') {
        return a.title.localeCompare(b.title);
      } else {
        const minPriceA = Math.min(
          ...a.variants.map((variant) => parseFloat(variant.price))
        );
        const minPriceB = Math.min(
          ...b.variants.map((variant) => parseFloat(variant.price))
        );
        return sortOption === 'priceAsc'
          ? minPriceA - minPriceB
          : minPriceB - minPriceA;
      }
    });

    setFilteredProducts(sortedProducts);
  };

  const toggleProductType = (productType: string) => {
    setSelectedProductTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(productType)
        ? prevSelectedTypes.filter((type) => type !== productType)
        : [...prevSelectedTypes, productType]
    );
  };

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        productTypes,
        isLoading,
        error,
        setFilterCriteria,
        sortProducts,
        toggleProductType,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
