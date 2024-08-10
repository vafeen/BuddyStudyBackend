import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GenderType = 'male' | 'female';

export interface ContactsLinks {
    tg: string,
    wa: string,
    vk: string
}

export interface UserInfoProps {
    name: string,
    location: string,
    gender: GenderType,
    date: string,
    contacts: ContactsLinks
}

const iniialState: UserInfoProps = {
    name: '',
    location: '',
    gender: 'male',
    date: '',
    contacts: {
        tg: '',
        wa: '',
        vk: ''
    }
}

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: iniialState,
    reducers: {
        // ToDo
        setUserInfo: (state, action: PayloadAction<UserInfoProps>) => {
            state.name = action.payload.name;
            state.location = action.payload.location;
            state.gender = action.payload.gender;
            state.date = action.payload.date;
            state.contacts = action.payload.contacts
        },
        resetUserInfo: (state) => {
            state.name = '';
            state.location = '';
            state.gender = 'male';
            state.date = '';
            state.contacts = {tg: '', wa: '', vk: ''};
        }
    }
})


export const userInfoReducer = userInfoSlice.reducer;
export const userInfoActions = userInfoSlice.actions;