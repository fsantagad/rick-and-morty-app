import { rest } from 'msw';
import { charactersResponse } from './mock/charactersResponse';
import { episodeResponse } from './mock/episodeResponse';
import { locationResponse } from './mock/locationResponse';

const baseUrl = '*/api';
const getCharacterPath = `${baseUrl}/character`;
const getEpisodePath = `${baseUrl}/episode/1`;
const getLocationPath = `${baseUrl}/location/1`;

const handlers = [
  rest.get(`${getCharacterPath}`, (req, res, ctx) => {
    const mockApiResponse = charactersResponse;
    return res(ctx.json(mockApiResponse))
  }),
  rest.get(`${getEpisodePath}`, (req, res, ctx) => {
    const mockApiResponse = episodeResponse;
    return res(ctx.json(mockApiResponse))
  }),
  rest.get(`${getLocationPath}`, (req, res, ctx) => {
    const mockApiResponse = locationResponse;
    return res(ctx.json(mockApiResponse))
  }),
]
export const handlerCharactersException = rest.get(
    getCharacterPath,
    async (req, res, ctx) =>
      res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
);
export const handlerEpisodesException = rest.get(
    getEpisodePath,
    async (req, res, ctx) =>
      res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
);
export const handlerLocationsException = rest.get(
    getLocationPath,
    async (req, res, ctx) =>
      res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
);

export { handlers }
