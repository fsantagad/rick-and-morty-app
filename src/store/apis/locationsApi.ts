import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Location } from '../types/Location';

const locationsApi = createApi({
    reducerPath: 'locations',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/'
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