import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userActions } from "./reducers/user/userSlice";
import { userInfoActions } from "./reducers/user/userInfoSlice";
import { filtersActions } from "./reducers/user/filtersSlice";

const actions = {
    ...userActions,
    ...filtersActions,
    ...userInfoActions
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};