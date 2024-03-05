import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayoutProvider } from './providers/LayoutContext';
import { ProductsProvider } from './providers/ProductsContext';

type RouteItem = {
  path: string;
  element: React.ReactElement;
};

type AppContentProps = {
  routes: RouteItem[];
};

const AppContent: React.FC<AppContentProps> = ({ routes }) => {
  return (
    <LayoutProvider>
      <ProductsProvider>
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            {routes.map((route, index: number) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              ></Route>
            ))}
          </Routes>
        </Suspense>
      </ProductsProvider>
    </LayoutProvider>
  );
};

export default AppContent;
