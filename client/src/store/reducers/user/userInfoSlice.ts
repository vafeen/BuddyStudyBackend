import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GenderType = 'male' | 'female' | null;

export interface UserInfoProps {
    name: string,
    city: string,
    gender: GenderType,
    date: string,
    tg: string,
    wa: string,
    vk: string
}

export interface ContactsLinks {
    tg: string,
    wa: string,
    vk: string
}

const iniialState: UserInfoProps = {
    name: '',
    city: '',
    gender: 'male',
    date: '',
    tg: '',
    wa: '',
    vk: ''
}

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: iniialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserInfoProps>) => {
            Object.assign(state, action.payload);
        },
        resetUserInfo: () => {
            return iniialState;
        }
    }
})


export const userInfoReducer = userInfoSlice.reducer;
export const userInfoActions = userInfoSlice.actions;