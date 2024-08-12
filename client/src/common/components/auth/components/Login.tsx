import { useState } from "react";
import { useActions } from "../../../../store/actions";
import { FormButton, FormInput, FormItem, FormLabel, FormTitle } from "../../../styles";

export default function Login() {
    const { setAuthStatus, setStartInfo } = useActions();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        setAuthStatus();
        setStartInfo();
    }

    return (
        <>
            <FormTitle>Войти</FormTitle>
            <FormItem>
                <FormLabel htmlFor="login">Логин</FormLabel>
                <FormInput
                    id="login"
                    name="login"
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Введите свой email..."
                />
            </FormItem>
            <FormItem>
                <FormLabel htmlFor="password">Пароль</FormLabel>
                <FormInput
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите свой пароль..."
                />
            </FormItem>
            <FormButton onClick={() => handleClick()}>Войти</FormButton>
        </>
    )
}
