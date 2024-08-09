package ru.vafeen.plugins

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import ru.vafeen.datastore.DatabaseRepository
import ru.vafeen.datastore.entity.User
import ru.vafeen.utils.allArgsInNotDefaultStringArgValue
import ru.vafeen.utils.defaultStringArgValue
import ru.vafeen.utils.handleRequestWithBadRequestError
import utils.getParams


fun Application.configureRouting() {
    val users = mutableMapOf<String, User>()
    val databaseRepository = DatabaseRepository()

    routing {
        get("/put") {
            databaseRepository.insertUser(User(login = "testLogin"))

            call.respond(true)
        }
        get("/get") {
            val usersDB = databaseRepository.selectAllUsers()
            if (usersDB.isNotEmpty()) {
                call.respond(usersDB)
            } else call.respond("no users")
        }

        get("/reg") {
            handleRequestWithBadRequestError(call = call) {
                val params = call.getParams()

                val login = params["login"] ?: defaultStringArgValue
                val password = params["password"] ?: defaultStringArgValue

                if (allArgsInNotDefaultStringArgValue(login, password)) {
                    if (users.get(key = login) == null) {
                        users.set(key = login, value = User(login = login, password = password))
                        call.respond(status = HttpStatusCode.OK, message = "Пользователь успешно зарегистрирован")
                    } else
                        call.respond(
                            status = HttpStatusCode.Conflict,
                            message = "Пользователь с таким login уже существует"
                        )
                    true
                } else false
            }

        }

        get("/login") {
            handleRequestWithBadRequestError(call = call) {
                val params = call.getParams()

                val login = params["login"] ?: defaultStringArgValue
                val password = params["password"] ?: defaultStringArgValue


                if (allArgsInNotDefaultStringArgValue(login, password)) {
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
                    true
                } else false
            }
        }
    }
}
