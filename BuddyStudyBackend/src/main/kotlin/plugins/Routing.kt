package ru.vafeen.plugins

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.serialization.kotlinx.json.*
import ru.vafeen.entities.User
import kotlin.math.log

fun Application.configureRouting() {
    val users = mutableMapOf<String, User>()
    install(ContentNegotiation) {
        json()
    }

    routing {
        get("/reg") {
            val params = call.parameters
            val login = params["login"] ?: ""
            val password = params["password"] ?: ""
            if (users.get(key = login) == null) {
                users.set(key = login, value = User(login = login, password = password))
                call.respond(status = HttpStatusCode.OK, message = "Пользователь успешно зарегистрирован")
            } else
                call.respond(
                    status = HttpStatusCode.Conflict,
                    message = "Пользователь с таким login уже существует"
                )
        }

        get("/login") {
            val params = call.parameters
            val login = params["login"] ?: ""
            val password = params["password"] ?: ""
            val user = users.get(key = login)
            when {
                user == null -> {
                    call.respond(
                        status = HttpStatusCode.NotFound,
                        message = "Не найден пользователь с таким login"
                    )
                }

                user != null && user.password != password -> {
                    call.respond(
                        status = HttpStatusCode.Unauthorized,
                        message = "Неверный пароль"
                    )
                }

                user != null && user.password == password -> {
                    call.respond(
                        status = HttpStatusCode.OK,
                        message = "Успешно"
                    )
                }
            }
        }

//        get("/{id}") {
//            call.respondText("User ID: 1")
//        }
    }
}
