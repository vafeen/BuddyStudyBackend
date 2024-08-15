import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserSliceProps {
    login: string | null,
    isAuth: boolean,
    isInfo: boolean
}

const iniialState: UserSliceProps = {
    login: null,
    isAuth: false,
    isInfo: false
}

const userSlice = createSlice({
    name: "user",
    initialState: iniialState,
    reducers: {
        // ToDo
        setAuthStatus: (state, action: PayloadAction<string>) => {
            state.login = action.payload;
            state.isAuth = !state.isAuth;
        },
        setStartInfo: (state) => {
            state.isInfo = true;
        }
    }
})


export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;