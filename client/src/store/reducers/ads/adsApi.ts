import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// потом убрать в отдельный файл
const baseUrl: string = "http://localhost:8080";

export interface AdvProps {
    id?: string,
    name: string,
    title: string,
    login?: string,
    text?: string,
    colorHeader?: string,
    tags: string[]
}

export const adsApi = createApi({
    reducerPath: "adsApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl, credentials: 'include' }),
    tagTypes: ['CREATE'],
    endpoints: (build) => ({
        getAds: build.query<AdvProps[], void>({
            query: () => ({
                url: '/ads/all',
                method: 'GET',
            }),
            providesTags: ['CREATE']
        }),
        createAdv: build.mutation<void, AdvProps>({
            query: (adv) => ({
                url: '/adv/create',
                method: 'POST',
                body: adv
            }),
            invalidatesTags: ['CREATE']
        })
    }),
});

export const {
    useGetAdsQuery,
    useCreateAdvMutation
} = adsApi;