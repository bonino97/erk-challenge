import {
  ProductsView,
  Topbar,
  SidebarFilters,
  HorizontalFilters,
} from '@/components';
import { useLayout } from '@/providers/LayoutContext';

const Home: React.FC = () => {
  const { sidebarOpen } = useLayout();
  return (
    <div className='w-full'>
      <Topbar />
      <div className='flex'>
        <SidebarFilters />
        <main
          className={`flex-1 transition-margin duration-300 ease-in-out ${
            sidebarOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          <HorizontalFilters />
          <ProductsView />
        </main>
      </div>
    </div>
  );
};

export default Home;
