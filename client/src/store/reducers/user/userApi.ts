import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserInfoProps } from "./userInfoSlice";

// потом убрать в отдельный файл
const baseUrl: string = "http://localhost:8080";

export interface UserAuthProps {
    login: string,
    password: string
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl, credentials: 'include' }),
    tagTypes: ['TOKEN'],
    endpoints: (build) => ({
        sendNewUser: build.mutation<void, UserAuthProps>({
            query: (user) => ({
                url: '/reg',
                method: 'POST',
                body: user,
            }),
        }),
        isUser: build.mutation<void, UserAuthProps>({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['TOKEN'],
        }),
        sendUserInfo: build.mutation<void, UserInfoProps>({
            query: (userInfo) => ({
                url: '/profile/info/fill',
                method: 'POST',
                body: userInfo,
            }),
            invalidatesTags: ['TOKEN'],
        }),
        getUserInfo: build.query<UserInfoProps, void>({
            query: () => ({
                url: '/profile/info/get',
                method: 'GET',
            }),
            providesTags: ['TOKEN'],
        })
    }),
});

export const {
    useGetUserInfoQuery,
    useSendUserInfoMutation,
    useIsUserMutation,
    useSendNewUserMutation
} = userApi;