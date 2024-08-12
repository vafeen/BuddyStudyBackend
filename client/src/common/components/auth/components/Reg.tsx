import { useState } from 'react';
import { useActions } from '../../../../store/actions';
import { FormButton, FormInput, FormItem, FormLabel, FormTitle } from '../../../styles';
import { useSendNewUserMutation } from '../../../../store/reducers/user/userApi';

export default function Reg() {
    const { setAuthStatus } = useActions();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');
    const [sendUser] = useSendNewUserMutation();

    const handleClick = () => {
        sendUser({
            login: login,
            password: password
        });
        setAuthStatus()
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
            <FormButton onClick={handleClick}>Зарегистрироваться</FormButton>
        </>
    )
}