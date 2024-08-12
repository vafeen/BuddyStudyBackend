import { useActions } from '../../../../store/actions';
import { FormButton, FormInput, FormItem, FormLabel, FormTitle } from '../../../styles';

export default function Reg() {
    const { setAuthStatus } = useActions();
    return (
        <>
            <FormTitle>Регистрация</FormTitle>
            <FormItem>
                <FormLabel>Логин</FormLabel>
                <FormInput type="text" placeholder="Введите свой email..." />
            </FormItem>
            <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormInput type="password" placeholder="Введите свой пароль..." />
            </FormItem>
            <FormItem>
                <FormLabel>Повторите пароль</FormLabel>
                <FormInput type="password" placeholder="Введите свой пароль..." />
            </FormItem>
            <FormButton onClick={() => setAuthStatus()}>Зарегистрироваться</FormButton>
        </>
    )
}