import { AuthFormButton, AuthFormInput, AuthFormItem, AuthFormLabel, AuthFormTitle } from "../styles";

export default function Login() {
    return (
        <>
            <AuthFormTitle>Войти</AuthFormTitle>
            <AuthFormItem>
                <AuthFormLabel>Email</AuthFormLabel>
                <AuthFormInput type="email" placeholder="Введите свой email..." />
            </AuthFormItem>
            <AuthFormItem>
                <AuthFormLabel>Пароль</AuthFormLabel>
                <AuthFormInput type="password" placeholder="Введите свой пароль..." />
            </AuthFormItem>
            <AuthFormButton>Войти</AuthFormButton>
        </>
    )
}
