import { Outlet } from "react-router-dom";
import { Container } from "../common/styles";
import Auth from "../common/components/auth/Auth";
import { useAppSelector } from "../common/hooks/useAppSelector";
import UserInfoWindow from "../common/components/user-info-window/UserInfoWindow";

export default function Main() {
    const isAuthUser = useAppSelector(state => state.userReducer.isAuth);
    return (
        <Container>
            {!isAuthUser && <Auth />}
            {isAuthUser && <UserInfoWindow />}
            <Outlet />
        </Container>
    )
}
