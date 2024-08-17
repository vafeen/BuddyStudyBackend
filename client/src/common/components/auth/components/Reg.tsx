import { useState } from 'react';
import { useActions } from '../../../../store/actions';
import { ErrorMessage, FormButton, FormInput, FormItem, FormLabel, FormTitle } from '../../../styles';
import { useSendNewUserMutation } from '../../../../store/reducers/user/userApi';
import { validationAll } from '../../../helpers/validation';

export default function Reg() {
    const { setAuthStatus } = useActions();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const [sendNewUser, { isLoading }] = useSendNewUserMutation();

    const handleClick = () => {
        const validError = validationAll(login, password, rPassword);
        if (validError) {
            setError(validError);
        } else {
            sendNewUser({ login, password }).then(res => {
                if (res?.error && 'originalStatus' in res.error) {
                    if (res.error.originalStatus !== 200) {
                        setError(res.error.data);
                    } else {
                        setAuthStatus({isAuth: true, isInfo: false});
                    }
                }
            });
        }
    }

    return (
        <>
            <FormTitle>Регистрация</FormTitle>
            <FormItem>
                <FormLabel htmlFor='login'>Логин</FormLabel>
                <FormInput
                    id='login'
                    name='login'
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Введите свой email..." />
            </FormItem>
            <FormItem>
                <FormLabel htmlFor='password'>Пароль</FormLabel>
                <FormInput
                    id='password'
                    name='password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите свой пароль..." />
            </FormItem>
            <FormItem>
                <FormLabel htmlFor='r_passsword'>Повторите пароль</FormLabel>
                <FormInput
                    id='r_password'
                    name='r_password'
                    type="password"
                    value={rPassword}
                    onChange={(e) => setRPassword(e.target.value)}
                    placeholder="Введите свой пароль..." />
            </FormItem>
            <ErrorMessage>{error}</ErrorMessage>
            {isLoading ? "Загрузка..." : <FormButton onClick={handleClick}>Зарегистрироваться</FormButton>}
        </>
    )
}