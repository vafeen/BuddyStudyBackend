package ru.vafeen.plugins

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import ru.vafeen.datastore.DatabaseRepository
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.User
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respond
import ru.vafeen.utils.parseJsonArrayToList
import ru.vafeen.web.UserSession
import utils.callIfNull
import utils.getParams


fun Application.configureRouting() {
    val databaseRepository = DatabaseRepository()
    val users = databaseRepository.selectAllUsers()
    val advertisements = databaseRepository.selectAllAdvertisements()

    routing {
        post("/test") {
            call.respondText("Success")
        }
        post("/adv/create") {
            val userLogin = call.sessions.get<UserSession>().callIfNull(call = call, message = "Unauthorized")
            val params = call.getParams().callIfNull(call = call, message = "No body")
            val title = params?.get(key = "title").callIfNull(call = call, message = "Invalid parameter: title")
            val text = params?.get(key = "text").callIfNull(call = call, message = "Invalid parameter: text")
            val tags = params?.get(key = "tags").callIfNull(call = call, message = "Invalid parameter: tags")
                ?.parseJsonArrayToList()
            if (userLogin != null && title != null && text != null && tags != null) {
                val newAdv =
                    Advertisement(login = userLogin.userId, title = title, text = text, tags = tags)
                advertisements.add(newAdv)
                databaseRepository.insertAdvertisement(advertisement = newAdv)
                call.respond(RequestStatus.AdvertisementIsAddedSuccessful())
            }
        }

        post("/reg") {
            val params = call.getParams().callIfNull(call = call, message = "No body")
            val login = params?.get("login").callIfNull(call = call, message = "Invalid parameter: login")
            val password = params?.get("password").callIfNull(call = call, message = "Invalid parameter: password")

            if (login != null && password != null) {
                call.sessions.set(UserSession(userId = login))
                if (users.get(key = login) == null) {
                    val newUser = User(login = login, password = password)
                    users.set(key = login, value = newUser)
                    databaseRepository.insertUser(user = newUser)
                    call.respond(RequestStatus.SuccessfulSignUP())
                } else
                    call.respond(RequestStatus.UserLoginExists())
            }
        }

        post("/login") {
            val params = call.getParams().callIfNull(call = call, message = "No body")
            val login = params?.get("login").callIfNull(call = call, message = "Invalid parameter: login")
            val password = params?.get("password").callIfNull(call = call, message = "Invalid parameter: password")
            if (login != null && password != null) {
                val user = users.get(key = login)
                when {
                    user == null -> {
                        call.respond(RequestStatus.UserNotFound())
                    }

                    user != null && user.password != password -> {
                        call.respond(RequestStatus.InvalidPassword())
                    }

                    user != null && user.password == password -> {
                        call.sessions.set(UserSession(userId = login))
                        call.respond(RequestStatus.SuccessfulSignIN())
                    }
                }
            }
        }
    }
}
