import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { userReducer } from "./reducers/user/userSlice";
import { userInfoReducer } from "./reducers/user/userInfoSlice";

const rememberedReducers = [
    ""
];

const rootReducer = combineReducers({
    userReducer,
    userInfoReducer
});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
    reducer: rememberedReducer,
    enhancers: (getDefaultEnhancer) =>
        getDefaultEnhancer().concat(
            rememberEnhancer(window.localStorage, rememberedReducers)
        ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];