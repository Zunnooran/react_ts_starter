export type Role = 'USER' | 'ADMIN';

export type ID = string;

export type FormUnknownValues = {
  [key: string]: unknown;
};

export type Response<T> = {
  data?: T;
  count?: number;
};

export interface ApiError {
  message: string[];
  error: string;
  statusCode: number;
}
export type ApiErrorResponse = {
  response: {
    data: ApiError;
  };
};

export type PaginationState = {
  page: number;
  limit: number;
  total?: number;
};

export type SearchState = {
  search?: string;
};

export type FilterState = {
  filter?: {
    [key: string]: unknown;
  };
};

export type NestedFilterState = {
  nestedFilter?: FormUnknownValues;
};

export type IAntdDatePickerValue = {
  $d: Date;
};

export type SortState = {
  sort?: {
    field?: string;
    order?: string;
  };
};

export type IAntdTRangePickerValues = [M1: IAntdDatePickerValue, M2: IAntdDatePickerValue];

export type QueryParamsState = PaginationState & SearchState & FilterState & NestedFilterState & SortState;

export type ITimeStamps = {
  createdAt: string;
  updatedAt: string;
};
