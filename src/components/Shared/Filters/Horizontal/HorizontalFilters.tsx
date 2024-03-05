import React from 'react';
import { GridIcon, ListIcon } from '@/assets/Icons';
import { Layout } from '@/constants/layoutTypes';
import { useLayout } from '@/providers/LayoutContext';
import { useProducts } from '@/providers/ProductsContext';
import { sortOptions } from '@/constants/sortOptions';

const AvailableDeals = ({ totalDeals }: { totalDeals: number }) => (
  <div className='justify-center items-center'>
    <p className='text-sm text-gray-500'>Available Deals: {totalDeals}</p>
  </div>
);

const SortBySelect = () => {
  const { sortProducts } = useProducts();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value as
      | 'alphabeticSort'
      | 'priceAsc'
      | 'priceDesc';
    sortProducts(sortValue);
  };

  return (
    <div className='flex items-center justify-center'>
      <label htmlFor='sortBySelect' className='text-sm text-gray-500 mr-2'>
        Sort by:
      </label>
      <select
        id='sortBySelect'
        onChange={handleChange}
        className='bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition duration-150 ease-in-out'
      >
        {sortOptions.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

const ViewToggleButton: React.FC = () => {
  const { layoutView, handleViewChange } = useLayout();
  return (
    <div className='justify-center flex items-center'>
      <p className='text-sm text-gray-500'>View:</p>
      <button
        onClick={handleViewChange}
        className='ml-2 text-gray-500 focus:outline-none uppercase'
      >
        {layoutView === Layout.List ? (
          <GridIcon className='font-bold text-black' />
        ) : (
          <ListIcon className='font-bold text-black' />
        )}
      </button>
    </div>
  );
};

const HorizontalFilters: React.FC = () => {
  const { products } = useProducts();
  return (
    <div className='flex items-center p-8 w-full justify-between'>
      <div className='flex flex-row gap-6 w-full'>
        <AvailableDeals totalDeals={products?.length || 0} />
      </div>
      <div className='flex flex-row gap-6 w-full justify-end'>
        <ViewToggleButton />
        <SortBySelect />
      </div>
    </div>
  );
};

export default HorizontalFilters;
