import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Episode } from '../types/Episode';

const episodesApi = createApi({
    reducerPath: 'episodes',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/'
    }),
    endpoints: (builder) => ({
        getEpisode: builder.query<Episode, string>({
          query: (episodeId) => {
            return {
                url: `api/episode/${episodeId}`,
                method: 'GET',
            }
          }
        }),
    }),
});

export const { useGetEpisodeQuery } = episodesApi;
export {episodesApi};