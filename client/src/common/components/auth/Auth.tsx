import { Outlet } from "react-router-dom";
import { AuthForm, AuthWrapper } from "./styles";

export default function Auth() {
    return (
        <AuthWrapper>
            <AuthForm>
                <Outlet />
            </AuthForm>
        </AuthWrapper>
    )
}
