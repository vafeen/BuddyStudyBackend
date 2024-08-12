package ru.vafeen.errors

import io.ktor.http.*

enum class RequestStatus(val status: HttpStatusCode, val message: String) {
    BadRequest(status = HttpStatusCode.BadRequest, message = "Ошибка в параметрах запроса"),
    UserNotFound(status = HttpStatusCode.NotFound, message = "Не найден пользователь с таким login"),
    InvalidPassword(status = HttpStatusCode.Unauthorized, message = "Неверный пароль"),
    SuccessfulSignIN(status = HttpStatusCode.OK, message = "Успешный вход"),
    SuccessfulSignUP(status = HttpStatusCode.OK, message = "Пользователь успешно зарегистрирован"),
    UserLoginExists(status = HttpStatusCode.Conflict, message = "Пользователь с таким login уже существует")
}
