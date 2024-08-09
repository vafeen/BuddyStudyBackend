package ru.vafeen.plugins

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import ru.vafeen.datastore.DatabaseRepository
import ru.vafeen.datastore.entity.User
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respond
import ru.vafeen.utils.allArgsInNotDefaultStringArgValue
import ru.vafeen.utils.defaultStringArgValue
import ru.vafeen.utils.handleRequestWithBadRequestError
import ru.vafeen.web.UserSession
import utils.getParams


fun Application.configureRouting() {
    val users = mutableMapOf<String, User>()
    val databaseRepository = DatabaseRepository()

    routing {
        get("/put") {
            databaseRepository.insertUser(User(login = "testLogin"))
            val filters = User()
            call.respond(true)
        }

        get("/get") {
            val userSession = call.sessions.get<UserSession>()
            if (userSession != null) {
                val usersDB = databaseRepository.selectAllUsers()
                if (usersDB.isNotEmpty()) {
                    call.respond(usersDB)
                } else call.respond("no users")
            } else call.respond("unauthorized")
        }

        get("/reg") {
            handleRequestWithBadRequestError(call = call) {
                val params = call.getParams()
                val login = params?.get("login") ?: defaultStringArgValue
                val password = params?.get("password") ?: defaultStringArgValue

                if (allArgsInNotDefaultStringArgValue(login, password)) {
                    call.sessions.set(UserSession(userId = login))
                    if (users.get(key = login) == null) {
                        users.set(key = login, value = User(login = login, password = password))
                        call.respond(RequestStatus.SuccessfulSignUP)
                    } else
                        call.respond(RequestStatus.UserLoginExists)
                    true
                } else false
            }

        }

        get("/login") {
            handleRequestWithBadRequestError(call = call) {
                val params = call.getParams()

                val login = params?.get("login") ?: defaultStringArgValue
                val password = params?.get("password") ?: defaultStringArgValue


                if (allArgsInNotDefaultStringArgValue(login, password)) {
                    val user = users.get(key = login)
                    when {
                        user == null -> {
                            call.respond(RequestStatus.UserNotFound)
                        }

                        user != null && user.password != password -> {
                            call.respond(RequestStatus.InvalidPassword)
                        }

                        user != null && user.password == password -> {
                            call.respond(RequestStatus.SuccessfulSignIN)
                        }
                    }
                    true
                } else false
            }
        }
    }
}
