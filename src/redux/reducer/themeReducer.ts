import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeType, ThemeInitialStateType } from "./types/themeType";

export const initialState: ThemeInitialStateType = {
    theme: 'light'
}

const themeReducer = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<ThemeType>) => {
            state.theme = action.payload
        }
    }
})

export const { toggleTheme } = themeReducer.actions;
export default themeReducer.reducer