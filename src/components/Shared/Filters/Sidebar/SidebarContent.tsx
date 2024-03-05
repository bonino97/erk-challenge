import React, { useState, useCallback, useEffect } from 'react';
import Checkbox from '@/components/Shared/Checkbox/Checkbox';
import RangeSlider from '@/components/Shared/RangeSlider/RangeSlider';
import { useProducts } from '@/providers/ProductsContext';

const SidebarContent: React.FC = () => {
  const {
    productTypes,
    priceRangeLimits,
    toggleProductType,
    setFilterCriteria,
  } = useProducts();
  const [sliderValue, setSliderValue] = useState<number>(priceRangeLimits.min);
  const [priceRange, setPriceRange] = useState({
    min: priceRangeLimits.min,
    max: priceRangeLimits.max,
  });

  const handleSliderChange = useCallback(
    ({ x }: { x: number }) => {
      setSliderValue(x);
      setPriceRange((prevRange) => ({ ...prevRange, max: x }));
      setFilterCriteria({ priceRange: { min: priceRange.min, max: x } });
    },
    [setFilterCriteria, priceRange.min]
  );

  const handleCheckboxChange = useCallback(
    (type: string) => {
      toggleProductType(type);
    },
    [toggleProductType]
  );

  useEffect(() => {
    setPriceRange({ min: priceRangeLimits.min, max: priceRangeLimits.max });
    setFilterCriteria({
      priceRange: { min: priceRangeLimits.min, max: priceRangeLimits.max },
    });
  }, [priceRangeLimits, setFilterCriteria]);

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
            <RangeSlider
              x={sliderValue}
              xmin={priceRangeLimits.min}
              xmax={priceRangeLimits.max}
              onChange={handleSliderChange}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default SidebarContent;
