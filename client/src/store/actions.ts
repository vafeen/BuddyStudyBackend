import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userActions } from "./reducers/user/userSlice";
import { userInfoActions } from "./reducers/user/userInfoSlice";
import { filtersActions } from "./reducers/filters/filtersSlice";
import { adsActions } from "./reducers/ads/adsSlice";

const actions = {
    ...userActions,
    ...filtersActions,
    ...userInfoActions,
    ...adsActions
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};