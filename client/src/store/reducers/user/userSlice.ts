import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        setAuthStatus: (state, action: PayloadAction<UserSliceProps>) => {
            state.isAuth = action.payload.isAuth;
            state.isInfo = action.payload.isInfo;
        },
    }
})


export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;