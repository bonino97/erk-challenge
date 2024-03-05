import { ProductCard } from '@/components';
import { Layout } from '@/constants/layoutTypes';
import { useLayout } from '@/providers/LayoutContext';
import { useProducts } from '@/providers/ProductsContext';
import { IProduct } from '@/types/IProduct.interface';

const ProductView: React.FC = () => {
  const { products } = useProducts();
  const { layoutView } = useLayout();
  return (
    <div
      className={`mx-4 pb-8 ${
        layoutView === Layout.Grid ? 'grid grid-cols-3 gap-4' : ''
      }`}
    >
      {products?.map((product: IProduct, index: number) => (
        <ProductCard
          product={product}
          key={product.id + index}
          layout={layoutView}
        />
      ))}
    </div>
  );
};

export default ProductView;
