import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AdvProps } from "../ads/adsApi";

// потом убрать в отдельный файл
const baseUrl: string = "http://localhost:8080";

export const favouritesApi = createApi({
    reducerPath: "favouritesApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl, credentials: 'include' }),
    tagTypes: ['CREATE'],
    endpoints: (build) => ({
        getFavouritesApi: build.query<AdvProps[], void>({
            query: () => ({
                url: '/favourites/all',
                method: 'GET',
            }),
            providesTags: ['CREATE']
        }),
        addFavourites: build.mutation<void, string>({
            query: (id) => ({
                url: `/favourites/${id}`,
                method: 'POST',
            }),
            invalidatesTags: ['CREATE']
        })
    }),
});

export const {
    useGetFavouritesApiQuery,
    useAddFavouritesMutation
} = favouritesApi;