import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { homeRoutes } from '@/routes/HomeRoutes';
import AppContent from '@/AppContent';

function App() {
  const queryClient = new QueryClient();
  const routes = [...homeRoutes];

  return (
    <QueryClientProvider client={queryClient}>
      <AppContent routes={routes} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
