import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// потом убрать в отдельный файл
const baseUrl: string = "http://localhost:8080/";

export interface UserAuthProps {
    login: string,
    password: string
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl, credentials: "include", mode: "no-cors" }),
    endpoints: (build) => ({
        sendNewUser: build.mutation<string, UserAuthProps>({
            query: (user) => ({
                url: 'reg',
                method: 'POST',
                body: user,
            }),                
        }),
        isUser: build.mutation<string, UserAuthProps>({
            query: (user) => ({
                url: 'login',
                method:'POST',
                body: user
            }),
        })
    }),
});

export const {
    useIsUserMutation,
    useSendNewUserMutation
} = userApi;