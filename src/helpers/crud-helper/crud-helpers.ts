import { useEffect, useState } from 'react';

import qs from 'qs';

import { ApiError, ApiErrorResponse, QueryParamsState } from './models';

function isNotEmpty(obj: unknown) {
  return obj !== undefined && obj !== null && obj !== '';
}

export { isNotEmpty };

function filterAndFormatMinMax<T>(propName: string, minVal: T, maxVal: T): string {
  const obj: { [key: string]: T | undefined } = {};

  if (minVal !== undefined) {
    obj.min = minVal;
  }

  if (maxVal !== undefined) {
    obj.max = maxVal;
  }

  return `${propName}=${JSON.stringify(obj)}`;
}

function stringifyRequestQuery(state: QueryParamsState): string {
  const pagination = qs.stringify(state, { filter: ['page', 'limit'], skipNulls: true });
  const search = isNotEmpty(state.search) ? qs.stringify(state, { filter: ['search'], skipNulls: true }) : '';

  const filter = state.filter
    ? Object.entries(state.filter as object)
        .filter((obj) => isNotEmpty(obj[1]))
        .map((obj) => {
          return `${obj[0]}=${obj[1]}`;
        })
        .join('&')
    : '';

  let nestedFilters: string[] = [];
  if (state.nestedFilter) {
    // loop through nestedFilter and add to filter
    nestedFilters = Object.entries(state.nestedFilter as object).map((obj) => {
      return filterAndFormatMinMax(obj[0], obj[1].min, obj[1].max);
    });
  }

  if (state.sort) {
    nestedFilters.push(`sort=${state.sort.order === 'descend' ? '-' : ''}${state.sort.field}`);
  }

  const filterString = nestedFilters.join('&');

  return [pagination, search, filter, filterString].filter((f) => f).join('&');
}

// Hook
function useDebounce(value: string | undefined, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

const extractApiError = (error: ApiErrorResponse): ApiError => {
  if (error.response && error.response.data) {
    return error.response.data;
  }
  // Return a default error structure if the expected one is not found
  return {
    message: ['An unknown error occurred'],
    error: 'Unknown Error',
    statusCode: 500,
  };
};

function isEmptyObject(obj: object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export { stringifyRequestQuery, useDebounce, filterAndFormatMinMax, extractApiError, isEmptyObject };
