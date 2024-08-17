import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GenderType } from "./userInfoSlice";

export interface FiltersSliceProps {
    gender: GenderType,
    ages: number[],
    tags: string[]
}

const initialState: FiltersSliceProps = {
    gender: null,
    ages: [],
    tags: []
}

const filtersSlice = createSlice({
    name: "filters",
    initialState: initialState,
    reducers: {
        setGender: (state, action: PayloadAction<GenderType>) => {
            state.gender = action.payload;
        },
        setAges: (state, action: PayloadAction<number[]>) => {
            state.ages = action.payload;
        },
        setTag: (state, action: PayloadAction<string>) => {
            state.tags.push(action.payload);
        }
    }
})


export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;