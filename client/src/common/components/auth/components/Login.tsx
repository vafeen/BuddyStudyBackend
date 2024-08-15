import { useState } from "react";
import { useActions } from "../../../../store/actions";
import { ErrorMessage, FormButton, FormInput, FormItem, FormLabel, FormTitle } from "../../../styles";
import { useIsUserMutation } from "../../../../store/reducers/user/userApi";

export default function Login() {
    const { setAuthStatus, setStartInfo } = useActions();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isUser] = useIsUserMutation();
    const [error, setError] = useState<string | null>(null);

    const handleClick = () => {
        isUser({login, password}).then(res => {
            if (res?.error && 'originalStatus' in res.error) {
                if (res.error.originalStatus !== 200) {
                    setError(res.error.data);
                } else {
                    setAuthStatus(login);
                    setStartInfo();
                }
            }
        })
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
            <ErrorMessage>{error}</ErrorMessage>
            <FormButton onClick={() => handleClick()}>Войти</FormButton>
        </>
    )
}
