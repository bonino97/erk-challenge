import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

interface SidebarToggleProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`rounded-full bg-gray-200 p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none fixed top-4 left-4 z-20 ${
        isOpen ? 'translate-x-64' : 'translate-x-0'
      } transition-transform duration-300 ease-in-out`}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <ChevronLeftIcon className='h-5 w-5 text-black' aria-hidden='true' />
      ) : (
        <ChevronRightIcon className='h-5 w-5 text-black' aria-hidden='true' />
      )}
    </button>
  );
};

export default SidebarToggle;
