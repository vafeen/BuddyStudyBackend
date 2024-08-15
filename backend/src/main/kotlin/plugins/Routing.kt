package ru.vafeen.plugins

import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import ru.vafeen.cryptography.PasswordHasher
import ru.vafeen.datastore.DatabaseRepository
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.User
import ru.vafeen.datastore.keys.AdvertisementKey
import ru.vafeen.datastore.keys.UserKey
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respondStatus
import ru.vafeen.utils.parseJsonArrayToList
import ru.vafeen.web.UserSession
import utils.callIfNull
import utils.getParams

suspend fun ApplicationCall.getOrInvalidParameter(key: String, params: Map<String, String>?): String? =
    params?.get(key = key).callIfNull(call = this, message = "Invalid parameter: $key")?.replace("\"", "")

suspend fun ApplicationCall.getSessionOrCallUnauthorized(): UserSession? = sessions.get<UserSession>().also {
    if (it == null) respondStatus(RequestStatus.Unauthorized())
}

fun Application.configureRouting() {
    val databaseRepository = DatabaseRepository()
    val users = databaseRepository.selectAllUsers()
    val advertisements = databaseRepository.selectAllAdvertisements()

    routing {
        post("/test/body") {
            call.respond(call.receiveText())
        }
        post("/test/map") {
            val params = call.getParams()
            call.respond(params.toString())
        }

        get("/user/info/get") {
            call.getSessionOrCallUnauthorized()?.let { userLogin ->
                users.get(key = userLogin.userId).let { user ->
                    if (user != null) call.respond(user)
                    else call.respondStatus(RequestStatus.UserNotFound())
                }
            }
        }

        post("/user/info/fill") {
            call.sessions.get<UserSession>().callIfNull(call = call, message = "Unauthorized")?.let { userLogin ->
                var user: User? = users.get(key = userLogin.userId)
                val params = call.getParams().callIfNull(call = call, message = "No body")
                val name = call.getOrInvalidParameter(key = UserKey.name, params = params)
                val gender = call.getOrInvalidParameter(key = UserKey.gender, params = params)
                val date = call.getOrInvalidParameter(key = UserKey.date, params = params)
                val city = call.getOrInvalidParameter(key = UserKey.city, params = params)
                val tg = params?.get(key = UserKey.tg)
                val vk = params?.get(key = UserKey.vk)
                val wa = params?.get(key = UserKey.wa)
                if (user != null && name != null && gender != null && date != null && city != null) {
                    user =
                        user.copy(name = name, gender = gender, date = date, city = city, tg = tg, wa = wa, vk = vk)
                    users.set(key = userLogin.userId, value = user)
                    databaseRepository.insertUser(user = user)
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
            if (userLogin != null && title != null && text != null && tags != null) {
                val newAdv = Advertisement(login = userLogin.userId, title = title, text = text, tags = tags)
                advertisements.add(newAdv)
                databaseRepository.insertAdvertisement(advertisement = newAdv)
                call.respondStatus(RequestStatus.AdvertisementIsAddedSuccessful())
            }
        }

        post("/login") {
            val params = call.getParams().callIfNull(call = call, message = "No body")
            val login = call.getOrInvalidParameter(key = UserKey.login, params = params)
            val password = call.getOrInvalidParameter(key = UserKey.password, params = params)
            if (login != null && password != null) {
                val user = users.get(key = login)
                when {
                    user == null -> {
                        call.respondStatus(RequestStatus.UserNotFound())
                    }

                    user != null && user.password != PasswordHasher(salt = login).passwordToHash(password = password) -> {
                        call.respondStatus(RequestStatus.InvalidPassword())
                    }

                    user != null && user.password == PasswordHasher(salt = login).passwordToHash(password = password) -> {
                        call.sessions.set(UserSession(userId = login))
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
                if (users.get(key = login) == null) {
                    call.sessions.set(UserSession(userId = login))
                    val newUser =
                        User(
                            login = login,
                            password = PasswordHasher(salt = login).passwordToHash(password = password)
                        )
                    users.set(key = login, value = newUser)
                    databaseRepository.insertUser(user = newUser)
                    call.respondStatus(RequestStatus.SuccessfulSignUP())
                } else call.respondStatus(RequestStatus.UserLoginExists())
            }
        }
    }
}
