import { Outlet } from "react-router-dom";
import { Container } from "../common/styles";
import Auth from "../common/components/auth/Auth";
import { useAppSelector } from "../common/hooks/useAppSelector";
import UserInfoWindow from "../common/components/user-info-window/UserInfoWindow";
import { useEffect } from "react";
import { useGetUserInfoQuery } from "../store/reducers/user/userApi";
import { useActions } from "../store/actions";

export default function Main() {
    const isAuthUser = useAppSelector(state => state.userReducer.isAuth);
    const { data: info, error } = useGetUserInfoQuery();
    const { setUserInfo, setAuthStatus } = useActions();

    useEffect(() => {
        if (error) {
            setAuthStatus({isAuth: false, isInfo: false})
        } else if (info && info.name) {
            setUserInfo(info);
            setAuthStatus({isAuth: true, isInfo: true});
        } else {
            setAuthStatus({isAuth: true, isInfo: false})
        }
        console.log(info?.avatarId)
    }, [info, error]);

    return (
        <Container>
            {!isAuthUser && <Auth />}
            {isAuthUser && <UserInfoWindow />}
            <Outlet />
        </Container>
    )
}
