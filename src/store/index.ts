import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { charactersApi } from "./apis/charactersApi";
import { episodesApi } from "./apis/episodesApi";
import { locationsApi } from "./apis/locationsApi";
import { selectedCharacterReducer, setSelectedCharacter, resetSelectedCharacter } from "./slices/selectedCharacterSlice";

export const store = configureStore({
    reducer: {
        selectedCharacter: selectedCharacterReducer,
        [charactersApi.reducerPath]: charactersApi.reducer,
        [episodesApi.reducerPath]: episodesApi.reducer,
        [locationsApi.reducerPath]: locationsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(charactersApi.middleware)
            .concat(episodesApi.middleware)
            .concat(locationsApi.middleware);
    }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export { useGetCharactersQuery } from "./apis/charactersApi";
export { useGetEpisodeQuery } from "./apis/episodesApi";
export { useGetLocationQuery } from "./apis/locationsApi";
export {setSelectedCharacter, resetSelectedCharacter};
export * from "./types/Character";
export * from "./types/Location";
export * from "./types/Episode";
