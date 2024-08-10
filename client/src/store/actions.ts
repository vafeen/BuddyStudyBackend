import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userActions } from "./reducers/user/userSlice";
import { userInfoActions } from "./reducers/user/userInfoSlice";

const actions = {
    ...userActions,
    ...userInfoActions
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};