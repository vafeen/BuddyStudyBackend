import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdvProps } from "./adsApi";

const iniialState: AdvProps[] = [];

const adsSlice = createSlice({
    name: "adsSlice",
    initialState: iniialState,
    reducers: {
        setAds: (state, action: PayloadAction<AdvProps[]>) => {
            return action.payload;
        },
    }
})


export const adsReducer = adsSlice.reducer;
export const adsActions = adsSlice.actions; 