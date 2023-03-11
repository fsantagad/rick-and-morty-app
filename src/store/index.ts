import { configureStore, PreloadedState, StateFromReducersMapObject } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { charactersApi } from "./apis/charactersApi";
import { episodesApi } from "./apis/episodesApi";
import { locationsApi } from "./apis/locationsApi";
import { selectedCharacterReducer, setSelectedCharacter, resetSelectedCharacter } from "./slices/selectedCharacterSlice";

const reducer = {
  selectedCharacter: selectedCharacterReducer,
  [charactersApi.reducerPath]: charactersApi.reducer,
  [episodesApi.reducerPath]: episodesApi.reducer,
  [locationsApi.reducerPath]: locationsApi.reducer,
};

export type RootState = StateFromReducersMapObject<typeof reducer>

export const setupStore = (preloadedState?: PreloadedState<RootState>)  => {
  return configureStore({
      reducer,
      middleware: (getDefaultMiddleware) => {
          return getDefaultMiddleware()
              .concat(charactersApi.middleware)
              .concat(episodesApi.middleware)
              .concat(locationsApi.middleware);
      },
      preloadedState,
  })
};
export const store = setupStore();

setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof setupStore>

export { useGetCharactersQuery } from "./apis/charactersApi";
export { useGetEpisodeQuery } from "./apis/episodesApi";
export { useGetLocationQuery } from "./apis/locationsApi";
export {setSelectedCharacter, resetSelectedCharacter};
export * from "./types/Character";
export * from "./types/Location";
export * from "./types/Episode";
