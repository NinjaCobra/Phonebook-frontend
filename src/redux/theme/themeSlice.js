import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = {
    value: true,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: themeInitialState,
    reducers: {
        toogleTheme(state) {
            state.value = !state.value;
            },
        },
});

export const {toogleTheme} = themeSlice.actions;
export const themeReducer =themeSlice.reducer;
