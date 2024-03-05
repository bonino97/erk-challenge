/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Layout } from '@/constants/layoutTypes';

interface LayoutState {
  layoutView: Layout;
  setLayoutView: (layout: Layout) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  handleViewChange: () => void;
}

interface LayoutProviderProps {
  children: ReactNode;
}

const defaultValue: LayoutState = {
  layoutView: Layout.List,
  setLayoutView: () => {},
  sidebarOpen: true,
  setSidebarOpen: () => {},
  handleViewChange: () => {},
};

const LayoutContext = createContext<LayoutState>(defaultValue);

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [layoutView, setLayoutView] = useState<Layout>(Layout.List);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const handleViewChange = () =>
    setLayoutView((prevMode) =>
      prevMode === Layout.List ? Layout.Grid : Layout.List
    );

  return (
    <LayoutContext.Provider
      value={{
        layoutView,
        setLayoutView,
        sidebarOpen,
        setSidebarOpen,
        handleViewChange,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
