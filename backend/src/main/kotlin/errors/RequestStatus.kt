package ru.vafeen.errors

import io.ktor.http.*

sealed class RequestStatus(val status: HttpStatusCode, val message: String) {

    class UserNotFound(
        status: HttpStatusCode = HttpStatusCode.NotFound,
        message: String = "Не найден пользователь с таким login"
    ) : RequestStatus(status = status, message = message)

    class InvalidPassword(
        status: HttpStatusCode = HttpStatusCode.Unauthorized,
        message: String = "Неверный пароль"
    ) : RequestStatus(status = status, message = message)

    class SuccessfulSignIN(status: HttpStatusCode = HttpStatusCode.OK, message: String = "Успешный вход") :
        RequestStatus(status = status, message = message)

    class SuccessfulSignUP(
        status: HttpStatusCode = HttpStatusCode.OK,
        message: String = "Пользователь успешно зарегистрирован"
    ) : RequestStatus(status = status, message = message)

    class UserLoginExists(
        status: HttpStatusCode = HttpStatusCode.Conflict,
        message: String = "Пользователь с таким login уже существует"
    ) : RequestStatus(status = status, message = message)

    class AdvertisementIsAddedSuccessful(
        status: HttpStatusCode = HttpStatusCode.OK,
        message: String = "Объявление успешно добавлено"
    ) : RequestStatus(status = status, message = message)

    class BadParameter(
        status: HttpStatusCode = HttpStatusCode.BadRequest,
        message: String
    ) : RequestStatus(status = status, message = message)

    class UserUpdateSuccessful(
        status: HttpStatusCode = HttpStatusCode.OK,
        message: String = "Данные пользователя обновлены успешно"
    ) : RequestStatus(status = status, message = message)
}




