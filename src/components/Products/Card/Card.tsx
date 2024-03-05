import React from 'react';
import { IProduct } from '@/types/IProduct.interface';
import { Layout } from '@/constants/layoutTypes';

interface ProductCardProps {
  product: IProduct;
  layout?: Layout;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  layout = Layout.Grid,
}) => {
  const imageClass =
    layout === Layout.List
      ? 'w-28 h-28 object-cover'
      : 'w-28 h-28 object-cover items-center m-auto justify-center mb-8';
  const contentClass = layout === Layout.List ? 'flex-1' : 'w-full h-1/3';

  return (
    <div
      className={`my-3 rounded-lg shadow-md cursor-pointer overflow-hidden p-4 ${
        layout === Layout.List
          ? 'flex gap-5 items-center'
          : 'flex flex-col items-center w-full max-w-sm'
      }`}
    >
      <div
        className={`${layout === Layout.List ? '' : 'w-full'} flex-shrink-0`}
      >
        <img
          className={`${imageClass} rounded-lg brightness-75`}
          src={product.image.src}
          alt={product.image.alt || 'Product image'}
        />
      </div>
      <div
        className={`${contentClass} flex flex-col justify-center items-center`}
      >
        <p className='text-lg font-bold text-[#36424a] text-center'>
          {product.title}
        </p>
        <div className='text-xs text-[#36424a] mt-2 text-center'>
          <p>
            <span className='font-semibold'>PRODUCT TYPE:</span>{' '}
            {product.product_type}
          </p>
          <p>
            <span className='font-semibold'>QUANTITY SOLD:</span>{' '}
            {product.quantitySold}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
