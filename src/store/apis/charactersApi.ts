import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {Character} from '../types/Character';
import {PaginationInfo} from '../types/PaginationInfo';

const baseUrl = process.env.REACT_APP_API_BASEURL;

const charactersApi = createApi({
    reducerPath: 'characters',
    baseQuery: fetchBaseQuery({
      baseUrl
    }),
    endpoints: (builder) => ({
        getCharacters: builder.query<Array<Character>, string>({
          query: (page = '1') => {
            return {
                url: `api/character`,
                params: {
                    page
                },
                method: 'GET',
            }
          },
          transformResponse: (res: {info: PaginationInfo, results: Array<Character>}) => {
            return res.results;
          }
        }),
    }),
});

export const { useGetCharactersQuery } = charactersApi;
export {charactersApi};