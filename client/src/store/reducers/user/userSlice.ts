import { createSlice } from "@reduxjs/toolkit";

export interface UserSliceProps {
    isAuth: boolean,
    isInfo: boolean
}

const iniialState: UserSliceProps = {
    isAuth: false,
    isInfo: false
}

const userSlice = createSlice({
    name: "user",
    initialState: iniialState,
    reducers: {
        // ToDo
        setAuthStatus: (state) => {
            state.isAuth = !state.isAuth;
        },
        setStartInfo: (state) => {
            state.isInfo = true;
        }
    }
})


export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;