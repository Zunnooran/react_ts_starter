const gcTime = 1000 * 60 * 60; // 1 hour
const staleTime = 1000 * 60 * 60; // 1 hour

export default {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      gcTime,
      staleTime,
    },
  },
};
