import React from 'react';
import Slider from 'react-input-slider';

interface RangeSliderProps {
  x: number;
  xmin: number;
  xmax: number;
  onChange: ({ x }: { x: number }) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  x,
  xmin,
  xmax,
  onChange,
}) => (
  <div>
    <div className='flex justify-between mb-2'>
      <span>${xmin}</span>
      <span>${xmax}</span>
    </div>
    <Slider
      axis='x'
      xstep={1}
      xmin={xmin}
      xmax={xmax}
      x={x}
      onChange={onChange}
      styles={{
        track: {
          backgroundColor: '#f0f0f0',
        },
        active: {
          backgroundColor: '#0080FE',
        },
        thumb: {
          width: 20,
          height: 20,
        },
      }}
    />
  </div>
);

export default RangeSlider;
