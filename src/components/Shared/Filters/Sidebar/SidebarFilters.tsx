import React from 'react';
import { useLayout } from '@/providers/LayoutContext';
import { SidebarContent, SidebarToggle } from '@/components';

const Sidebar: React.FC = () => {
  const { sidebarOpen, setSidebarOpen } = useLayout();
  return (
    <>
      <SidebarToggle isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <aside
        className={`transform top-0 left-0 w-64 bg-gray-50 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } h-full fixed z-10`}
        aria-label='Sidebar'
      >
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;
