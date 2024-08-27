import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GenderType } from "../user/userInfoSlice";

export interface FiltersSliceProps {
    gender: GenderType,
    minYear: number,
    maxYear: number,
    tags: string[] | null
}

const initialState: FiltersSliceProps = {
    gender: null,
    minYear: 1924,
    maxYear: 2024,
    tags: null
}

const filtersSlice = createSlice({
    name: "filters",
    initialState: initialState,
    reducers: {
        setGenderFilter: (state, action: PayloadAction<GenderType>) => {
            state.gender = action.payload;
        },
        setAgesFilter: (state, action: PayloadAction<number[]>) => {
            state.minYear = action.payload[0];
            state.maxYear = action.payload[1]
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