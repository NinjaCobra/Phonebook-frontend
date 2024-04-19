import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    value: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilterValue(state, {payload}) {
                state.value = payload;
            },
        },
});

export const {setFilterValue} = filterSlice.actions;
export const filterReducer =filterSlice.reducer;
