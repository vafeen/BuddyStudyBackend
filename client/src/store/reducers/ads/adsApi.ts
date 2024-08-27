import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FiltersSliceProps } from "../filters/filtersSlice";

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
    endpoints: (build) => ({
        getAdsApi: build.mutation<AdvProps[], FiltersSliceProps>({
            query: (filters) => ({
                url: '/ads/all',
                method: 'POST',
                body: filters
            }),
        }),
        createAdv: build.mutation<void, AdvProps>({
            query: (adv) => ({
                url: '/adv/create',
                method: 'POST',
                body: adv
            }),
        })
    }),
});

export const {
    useGetAdsApiMutation,
    useCreateAdvMutation
} = adsApi;