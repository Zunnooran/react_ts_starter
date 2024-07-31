import { QueryClient } from 'react-query';

/**
 * Invalidate queries that match a specific pattern.
 * @param {string} queryKeyPattern - The pattern of the query keys to be invalidated.
 * @param {boolean} includeSuffix - Whether to include queries with a suffix (like an ID).
 */
function invalidateQueriesWithPattern(
  queryClient: QueryClient,
  queryKeyPattern: string,
  includeSuffix: boolean = false
): void {
  queryClient.invalidateQueries({
    predicate: (query) => {
      // Use type assertion here for the query key
      const key = query.queryKey as string | (string | number | undefined)[];

      if (typeof key === 'string') {
        return key.startsWith(queryKeyPattern);
      }
      if (Array.isArray(key) && typeof key[0] === 'string') {
        return key[0].startsWith(queryKeyPattern) && (includeSuffix ? key.length > 1 : true);
      }
      return false;
    },
  });
}

export { invalidateQueriesWithPattern };
