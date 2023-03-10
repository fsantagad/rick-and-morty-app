import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { Character } from "../types/Character";

interface SelectedCharacterState {
    data: Character
}
  
const initialState = { data: null as unknown } as SelectedCharacterState

const selectedCharacterSlice = createSlice({
    name: "selectedCharacter",
    initialState,
    reducers: {
        setSelectedCharacter(state, action: PayloadAction<Character>) {
            state.data = action.payload;
        },
        resetSelectedCharacter(state) {
            state.data = initialState.data ;
        }
    }
});

export const {setSelectedCharacter, resetSelectedCharacter} = selectedCharacterSlice.actions;
export const selectedCharacterReducer = selectedCharacterSlice.reducer;
