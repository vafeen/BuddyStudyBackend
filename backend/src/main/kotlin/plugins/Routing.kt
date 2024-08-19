package ru.vafeen.plugins

import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import ru.vafeen.cryptography.createSaltedHash
import ru.vafeen.datastore.DatabaseRepository
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.User
import ru.vafeen.datastore.keys.AdvertisementKey
import ru.vafeen.datastore.keys.UserKey
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respondStatus
import ru.vafeen.utils.*
import ru.vafeen.web.UserSession
import utils.callIfNull
import utils.getParams


fun Application.configureRouting() {
    val databaseRepository = DatabaseRepository()


    routing {
        get("/info") {
            call.respondText { "Сервер для бэка, какой браузер!?" }
        }
        post("/test/body") {
            call.respond(call.receiveText())
        }
        post("/test/map") {
            val params = call.getParams()
            call.respond(params.toString())
        }

        get("/user/info/get") {
            call.getSessionOrCallUnauthorized()?.let { userLogin ->
                databaseRepository.getUserByHashedKey(key = userLogin.session).let { user ->
                    if (user != null) call.respond(user.createResponseUserData())
                    else call.respondStatus(RequestStatus.UserNotFound())
                }
            }
        }

        post("/user/info/fill") {
            call.sessions.get<UserSession>().callIfNull(call = call, message = "Unauthorized")?.let { userLogin ->
                var user: User? = databaseRepository.getUserByHashedKey(key = userLogin.session)
                val params = call.getParams().callIfNull(call = call, message = "No body")
                val name = call.getOrInvalidParameter(key = UserKey.name, params = params)
                val avatarId = call.getOrInvalidParameter(key = UserKey.avatarId, params = params)
                val gender = call.getOrInvalidParameter(key = UserKey.gender, params = params)
                val date = call.getOrInvalidParameter(key = UserKey.date, params = params)
                val city = call.getOrInvalidParameter(key = UserKey.city, params = params)
                val tg = params?.get(key = UserKey.tg).removeAngryQoutes()
                val vk = params?.get(key = UserKey.vk).removeAngryQoutes()
                val wa = params?.get(key = UserKey.wa).removeAngryQoutes()
                if (user != null && avatarId != null && name != null && gender != null && date != null && city != null) {
                    user =
                        user.copy(
                            name = name,
                            avatarId = avatarId,
                            gender = gender,
                            date = date,
                            city = city,
                            tg = tg,
                            wa = wa,
                            vk = vk
                        )
                    databaseRepository.insertUser(key = user.login, user = user)
                    call.respondStatus(RequestStatus.UserUpdateSuccessful())
                }
            }
        }

        post("/adv/create") {
            val userLogin = call.sessions.get<UserSession>().callIfNull(call = call, message = "Unauthorized")
            val params = call.getParams().callIfNull(call = call, message = "No body")
            val title = call.getOrInvalidParameter(key = AdvertisementKey.title, params = params)
            val text = call.getOrInvalidParameter(key = AdvertisementKey.text, params = params)
            val tags =
                call.getOrInvalidParameter(key = AdvertisementKey.tags, params = params)?.parseJsonArrayToList()
            if (userLogin != null &&
                databaseRepository.getUserByHashedKey(key = userLogin.session) != null &&
                title != null &&
                text != null &&
                tags != null
            ) {
                val newAdv = Advertisement(login = userLogin.session, title = title, text = text, tags = tags)
                databaseRepository.insertAdvertisement(advertisement = newAdv)
                call.respondStatus(RequestStatus.AdvertisementIsAddedSuccessful())
            }
        }

        post("/login") {
            val params = call.getParams().callIfNull(call = call, message = "No body")
            val login = call.getOrInvalidParameter(key = UserKey.login, params = params)
            val password = call.getOrInvalidParameter(key = UserKey.password, params = params)
            if (login != null && password != null) {
                val user = databaseRepository.getUserByHashedKey(key = login.createSaltedHash())
                when {
                    user == null -> {
                        call.respondStatus(RequestStatus.UserNotFound())
                    }

                    user != null && user.password != password.createSaltedHash() -> {
                        call.respondStatus(RequestStatus.InvalidPassword())
                    }

                    user != null && user.password == password.createSaltedHash() -> {
                        call.sessions.set(UserSession(session = login.createSaltedHash()))
                        call.respondStatus(RequestStatus.SuccessfulSignIN())
                    }
                }
            }
        }

        post("/reg") {
            val params = call.getParams().callIfNull(call = call, message = "No body")
            val login = call.getOrInvalidParameter(key = UserKey.login, params = params)
            val password = call.getOrInvalidParameter(key = UserKey.password, params = params)

            if (login != null && password != null) {
                if (databaseRepository.getUserByHashedKey(key = login.createSaltedHash()) == null) {
                    val newUser = User(login = login.createSaltedHash(), password = password.createSaltedHash())
                    call.sessions.set(UserSession(session = login.createSaltedHash()))
                    databaseRepository.insertUser(key = login.createSaltedHash(), user = newUser)
                    call.respondStatus(RequestStatus.SuccessfulSignUP())
                } else call.respondStatus(RequestStatus.UserLoginExists())
            }
        }
    }
}
