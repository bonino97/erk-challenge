import React from 'react';
import Slider from 'react-input-slider';

interface RangeSliderProps {
  x: number;
  onChange: ({ x }: { x: number }) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ x, onChange }) => (
  <Slider
    axis='x'
    xstep={1}
    xmin={0}
    xmax={100}
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
);

export default RangeSlider;
