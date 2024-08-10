import { useActions } from "../../../../store/actions";
import { FormButton, FormInput, FormItem, FormLabel, FormTitle } from "../../../styles";

export default function Login() {
    const {setAuthStatus, setStartInfo} = useActions();

    const handleAuth = () => {
        setAuthStatus();
        setStartInfo();
    }

    return (
        <>
            <FormTitle>Войти</FormTitle>
            <FormItem>
                <FormLabel>Логин</FormLabel>
                <FormInput type="text" placeholder="Введите свой email..." />
            </FormItem>
            <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormInput type="password" placeholder="Введите свой пароль..." />
            </FormItem>
            <FormButton onClick={() => handleAuth()}>Войти</FormButton>
        </>
    )
}
