import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {API_URL} from '../constants';

export const rtkQuery = createApi({
  reducerPath: 'rtkReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});
