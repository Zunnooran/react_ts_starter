import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthInit, AuthProvider, setupAxios } from 'auth';
import rqConfigs from 'configs/rq-configs';
import { ThemeProvider } from 'theme/theme-context';

import Router from 'routes/router';

setupAxios();
const queryClient = new QueryClient(rqConfigs);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthInit>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </AuthInit>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
