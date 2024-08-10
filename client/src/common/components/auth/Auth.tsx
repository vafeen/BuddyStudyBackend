import { AuthChangeButton, AuthForm } from "./styles";
import Reg from "./components/Reg";
import { useState } from "react";
import Login from "./components/Login";
import { BlackTransparentBg } from "../../styles";

export default function Auth() {
    const [isReg, setIsReg] = useState(true);
    return (
        <BlackTransparentBg>
            <AuthForm>
                {isReg ? <Reg /> : <Login />}
                <AuthChangeButton onClick={() => setIsReg(prev => !prev)}>{isReg ? "Уже есть аккаунт?" : "Создать аккаунт?"}</AuthChangeButton>
            </AuthForm>
        </BlackTransparentBg>
    )
}
