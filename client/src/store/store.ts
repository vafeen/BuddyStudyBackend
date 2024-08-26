import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { userReducer } from "./reducers/user/userSlice";
import { userInfoReducer } from "./reducers/user/userInfoSlice";
import { userApi } from "./reducers/user/userApi";
import { filtersReducer } from "./reducers/filters/filtersSlice";
import { adsApi } from "./reducers/ads/adsApi";
import { adsReducer } from "./reducers/ads/adsSlice";

const rememberedReducers = [
    ""
];

const rootReducer = combineReducers({
    userReducer,
    userInfoReducer,
    filtersReducer,
    adsReducer,
    [userApi.reducerPath]: userApi.reducer,
    [adsApi.reducerPath]: adsApi.reducer
});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
    reducer: rememberedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(adsApi.middleware),
    enhancers: (getDefaultEnhancer) =>
        getDefaultEnhancer().concat(
            rememberEnhancer(window.localStorage, rememberedReducers)
        ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];