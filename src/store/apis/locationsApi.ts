import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Location } from '../types/Location';

const baseUrl = process.env.REACT_APP_API_BASEURL;

const locationsApi = createApi({
    reducerPath: 'locations',
    baseQuery: fetchBaseQuery({
      baseUrl
    }),
    endpoints: (builder) => ({
        getLocation: builder.query<Location, string>({
          query: (locationId) => {
            return {
                url: `api/location/${locationId}`,
                method: 'GET',
            }
          }
        }),
    }),
});

export const { useGetLocationQuery } = locationsApi;
export {locationsApi};