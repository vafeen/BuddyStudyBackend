const special_signs = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

export const validationLogin = (login: string): string | null => {
    if (login.length < 4 || login.length > 12) {
        return 'Логин должен содержать не менее 4 и не более 12 символов';
    } else if (special_signs.test(login)) {
        return 'Логин не должен содержать специальные символы';
    }
    return null;
}

export const validationPassword = (password: string, r_password: string): string | null => {
    if (password.length < 8 || password.length > 21) {
        return 'Пароль должен содержать не менее 8 и не более 21 символов';
    } else if (password.toLowerCase() === password) {
        return 'Пароль должен содержать не менее 1 заглавной буквы';
    } else if (password !== r_password) {
        return 'Пароли отличаются'
    }
    return null;
}

export const validationAll = (login: string, password: string, r_password: string): string | null => {
    const validLogin = validationLogin(login);
    const validPassword = validationPassword(password, r_password);
    if (validLogin) return validLogin;
    else if (validPassword) return validPassword;
    else return null;
}