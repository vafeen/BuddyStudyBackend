import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GenderType } from "../user/userInfoSlice";

export interface FiltersSliceProps {
    gender: GenderType | 'none',
    minAge: number,
    maxAge: number,
    tags: string[]
}

const initialState: FiltersSliceProps = {
    gender: 'none',
    minAge: 0,
    maxAge: 100,
    tags: []
}

const filtersSlice = createSlice({
    name: "filters",
    initialState: initialState,
    reducers: {
        setGenderFilter: (state, action: PayloadAction<GenderType | 'none'>) => {
            state.gender = action.payload;
        },
        setAgesFilter: (state, action: PayloadAction<number[]>) => {
            state.minAge = action.payload[0];
            state.maxAge = action.payload[1]
        },
        setTagsFilter: (state, action: PayloadAction<string[]>) => {
            state.tags = action.payload;
        },
        resetFilters: () => {
            return initialState;
        }
    }
})


export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;