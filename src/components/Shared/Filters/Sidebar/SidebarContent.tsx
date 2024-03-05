import React, { useState, useCallback } from 'react';
import Checkbox from '@/components/Shared/Checkbox/Checkbox';
import RangeSlider from '@/components/Shared/RangeSlider/RangeSlider';
import { useProducts } from '@/providers/ProductsContext';

const SidebarContent: React.FC = () => {
  const { productTypes, toggleProductType, setFilterCriteria } = useProducts();
  const [sliderValue, setSliderValue] = useState(10);
  const [state, setState] = useState<{ x: number }>({ x: 10 });

  const handleSliderChange = useCallback(
    ({ x }: { x: number }) => {
      setSliderValue(x);
      // Simulando un rango. Puedes ajustar esto según la lógica de tu aplicación.
      const minPrice = Math.max(x - 10, 0);
      const maxPrice = x + 10;
      setFilterCriteria({ priceRange: { min: minPrice, max: maxPrice } });
    },
    [setFilterCriteria]
  );
  const handleCheckboxChange = useCallback(
    (type: string) => {
      toggleProductType(type);
    },
    [toggleProductType]
  );

  return (
    <div className='overflow-y-auto py-4 px-4 bg-white shadow-lg rounded-lg h-full'>
      <ul className='space-y-4'>
        <li>
          <h2 className='text-2xl font-semibold text-gray-900 border-b pb-2'>
            Filter Results
          </h2>
        </li>
        <li>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>
            Product Type
          </h3>
          <div className='space-y-2'>
            {productTypes.map((type) => (
              <Checkbox
                key={type}
                label={type}
                onChange={() => handleCheckboxChange(type)}
              />
            ))}
          </div>
        </li>
        <li>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>
            Price Range
          </h3>
          <div className='flex gap-2'>
            <RangeSlider x={state.x} onChange={handleSliderChange} />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default SidebarContent;
