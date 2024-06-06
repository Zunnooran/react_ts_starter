import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthInit, AuthProvider, setupAxios } from 'auth';
import rqConfigs from 'configs/rq-configs';

// import { AuthInit, AuthProvider } from 'auth/core/auth-context';
// import { setupAxios } from 'auth/core/auth-helpers';
import Router from 'routes/router';

setupAxios();
const queryClient = new QueryClient(rqConfigs);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthInit>
          <Router />
        </AuthInit>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
