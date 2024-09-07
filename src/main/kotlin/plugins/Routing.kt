package ru.vafeen.plugins

import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import io.ktor.server.websocket.*
import io.ktor.websocket.*
import kotlinx.coroutines.isActive
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import ru.vafeen.cryptography.createSaltedHash
import ru.vafeen.datastore.DatabaseRepository
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.ResponseOnAdvertisement
import ru.vafeen.datastore.entity.User
import ru.vafeen.datastore.keys.AdsGettingKey
import ru.vafeen.datastore.keys.AdvertisementKey
import ru.vafeen.datastore.keys.ResponseKey
import ru.vafeen.datastore.keys.UserKey
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respondStatus
import ru.vafeen.frontend.response_entity.ResponseAdvertisementPreviewData
import ru.vafeen.utils.*
import ru.vafeen.web.UserSession
import utils.callIfNull
import utils.getParams
import java.util.*

fun parseMessage(message: String): Pair<String, String> {
    val json = kotlinx.serialization.json.Json.parseToJsonElement(message).jsonObject
    val room = json["room"]?.jsonPrimitive?.content ?: ""
    val text = json["text"]?.jsonPrimitive?.content ?: ""
    return Pair(room, text)
}

fun serializeMessage(room: String, text: String): String {
    return kotlinx.serialization.json.Json.encodeToString(mapOf("room" to room, "text" to text))
}

fun Application.configureRouting() {
    val databaseRepository = DatabaseRepository()

    routing {
        get("/responses/all") {
            call.respond(databaseRepository.getResponsesOnAdvertisement().values.map {
                it.createResponseResponseOnAdvertisementPreviewData()
            })
        }
        get("/response/info/{id}") {
            val id =
                call.parameters[AdvertisementKey.ID].callIfNull(call = call, message = "Invalid parameter: id")
            val response = databaseRepository.getResponsesOnAdvertisementById(id = id).callIfNull(
                call = call,
                message = "Response not found"
            )
            if (response != null) {
                call.respond(response.createResponseResponseOnAdvertisementData())
            }
        }

        post("/responses/create") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let { userLogin ->
                    val bodyParams = call.getParams().callIfNull(call = call, message = "No body")
                    val recipientLogin = bodyParams?.get(key = ResponseKey.RECIPIENT_LOGIN)
                        .callIfNull(call = call, message = "Invalid parameter: ${ResponseKey.RECIPIENT_LOGIN}")
                    val advId = bodyParams?.get(key = ResponseKey.ADV_ID)
                        .callIfNull(call = call, message = "Invalid parameter: ${ResponseKey.ADV_ID}")
                    val text = bodyParams?.get(key = ResponseKey.TEXT)
                        .callIfNull(call = call, message = "Invalid parameter: ${ResponseKey.TEXT}")
                    val senderUser = databaseRepository.getUserByHashedKey(key = userLogin.session)
                    val recipientUser = databaseRepository.getUserByHashedKey(key = recipientLogin ?: "")
                        .callIfNull(call = call, message = "Recipient user not found")
                    if (recipientLogin != null && recipientUser != null && advId != null && text != null && senderUser != null) {
                        val newResponseOnAdvertisement = ResponseOnAdvertisement(
                            id = databaseRepository.createIndividualID(),
                            senderLogin = senderUser.login,
                            avatarId = senderUser.avatarId,
                            name = senderUser.name,
                            text = text
                        )
                        recipientUser.responsesOnAdvs.add(element = newResponseOnAdvertisement)
                        databaseRepository.insertResponseOnAdvertisement(responseOnAdvertisement = newResponseOnAdvertisement)
                        databaseRepository.insertUser(user = recipientUser)
                        call.respondStatus(RequestStatus.ResponseAddedSuccessful())
                    }
                }
        }


        val rooms = Collections.synchronizedMap(mutableMapOf<String, MutableSet<DefaultWebSocketSession>>())
        webSocket(path = "/chat") {
            println("Клиент подключен")

            for (frame in incoming) {
                if (frame is Frame.Text) {
                    val message = frame.readText()
                    println(message)
                    val (room, text) = parseMessage(message)

                    if (!rooms.containsKey(room)) {
                        rooms[room] = LinkedHashSet()
                    }

                    rooms[room]?.add(this)

                    rooms[room]?.forEach { client ->
                        if (client.isActive) {
                            client.send(Frame.Text(serializeMessage(room, text)))
                        }
                    }
                }
            }

//            close(CloseReason(CloseReason.Codes.NORMAL, "Client disconnected"))
//            println("Клиент отключен")
//            rooms.values.forEach { it.remove(this) }
//            rooms.entries.removeIf { it.value.isEmpty() }
        }
        webSocket(
            path = "/im/{chatId}"
        ) {
            println("Подключение установлено: ${this.call.request.local.remoteHost}")
            val chatId = call.parameters["chatId"].callIfNull(call = call, message = "Invalid parameter: chatId")

            for (frame in incoming) {
                when (frame) {
                    is Frame.Text -> {
                        val receivedText = frame.readText()
                        println("Получено сообщение, и сразу отправлено: $receivedText")
                        send("Сообщение получено: $receivedText")
                    }

                    else -> Unit
                }
            }
        }

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

        delete("/adv/delete/{id}") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let { userLogin ->
                    val id =
                        call.parameters[AdvertisementKey.ID].callIfNull(call = call, message = "Invalid parameter: id")
                    val adv = id?.let { databaseRepository.getAdvertisementByHashedKey(key = it) }
                        .callIfNull(call = call, message = "Advertisement not found")
                    val user = databaseRepository.getUserByHashedKey(key = userLogin.session)
                        .callIfNull(call = call, message = "User not found")
                    if (adv != null && user != null && adv.id in user.ads) {
                        databaseRepository.deleteAdvertisement(owner = user, advertisement = adv)
                        call.respondStatus(RequestStatus.AdvertisementIsDeletedSuccessful())
                    } else call.respondStatus(RequestStatus.NotOwnerOfAdvertisement())
                }
        }

        delete("/favourites/delete/{id}") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let { userLogin ->
                    val id =
                        call.parameters[AdvertisementKey.ID].callIfNull(call = call, message = "Invalid parameter: id")
                    val adv = id?.let { databaseRepository.getAdvertisementByHashedKey(key = it) }
                        .callIfNull(call = call, message = "Advertisement not found")
                    val user = databaseRepository.getUserByHashedKey(key = userLogin.session)
                        .callIfNull(call = call, message = "User not found")
                    if (adv != null && user != null && adv.id in user.favourites) {
                        databaseRepository.removeAdvertisementFromFavourites(owner = user, advertisement = adv)
                        call.respondStatus(RequestStatus.AdvertisementIsRemovedFromFavouritesSuccessful())
                    } else call.respondStatus(RequestStatus.AdvertisementIsNotInFavourites())
                }
        }

        get("/ads/my") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let { userSession ->
                    val user = databaseRepository.getUserByHashedKey(key = userSession.session)
                        .callIfNull(call = call, message = "User not found")
                    if (user != null) {
                        val myAdsId = user.ads
                        val myAds = mutableListOf<ResponseAdvertisementPreviewData>()
                        for (id in myAdsId) {
                            databaseRepository.getAdvertisementByHashedKey(key = id)
                                ?.let { myAds.add(it.createResponsePreviewData()) }
                        }
                        call.respond(myAds)
                    }
                }
        }

        post("/favourites/{id}") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let { userSession ->
                    val id =
                        call.parameters[AdvertisementKey.ID].callIfNull(call = call, message = "Invalid parameter: id")
                    if (id != null) {
                        val user = databaseRepository.getUserByHashedKey(key = userSession.session)
                            .callIfNull(call = call, message = "User not found")
                        val favourites = user?.favourites
                        val adv = databaseRepository.getAdvertisementByHashedKey(key = id)
                            .callIfNull(call = call, message = "Adv with this id not found")
                        if (user != null && favourites != null && adv != null) {
                            if (adv.id !in favourites) {
                                favourites.add(adv.id)
                                databaseRepository.insertUser(user.copy(favourites = favourites))
                                call.respondStatus(RequestStatus.AddingAdvertisementToFavouritesSuccessful())
                            } else call.respondStatus(RequestStatus.AdvertisementIsAlreadyInFavourites())
                        } else call.respondStatus(RequestStatus.AddingAdvertisementToFavouritesFailed())
                    }
                }
        }

        get("/favourites/all") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let { userSession ->
                    val user = databaseRepository.getUserByHashedKey(key = userSession.session)
                        .callIfNull(call = call, message = "User not found")
                    if (user != null) {
                        val favouritesId = user.favourites
                        val favourites = mutableListOf<ResponseAdvertisementPreviewData>()
                        for (id in favouritesId) {
                            databaseRepository.getAdvertisementByHashedKey(key = id)
                                ?.let { favourites.add(it.createResponsePreviewData()) }
                        }
                        call.respond(favourites)
                    }
                }
        }

        get("/adv/info/{id}") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let {
                    val id =
                        call.parameters[AdvertisementKey.ID].callIfNull(call = call, message = "Invalid parameter: id")
                    if (id != null) {
                        val adv = databaseRepository.getAdvertisements().get(key = id)
                        if (adv != null) call.respond(adv.createResponseData())
                        else call.respondStatus(RequestStatus.AdvertisementNotFound())
                    }
                }
        }

        get("/ads/all") {
            val params = call.parameters
            val gender = params.get(name = UserKey.GENDER).removeAngryQuotes().makeNullIfNull()
            val city = params.get(name = UserKey.CITY).removeAngryQuotes().makeNullIfNull()
            val substr = params.get(name = AdsGettingKey.SUBSTR).removeAngryQuotes().makeNullIfNull()
            val minYear = params.get(name = AdsGettingKey.MIN_YEAR).removeAngryQuotes().makeNullIfNull()?.toInt()
            val maxYear = params.get(name = AdsGettingKey.MAX_YEAR).removeAngryQuotes().makeNullIfNull()?.toInt()
            val tags = params.get(name = AdvertisementKey.TAGS).makeNullIfNull()?.split("+")
            val filteredUsers = databaseRepository.getAllUsers().filter {
                (gender == null || it.gender == gender) && (city == null || it.city == city) && it.date?.isDateInThisDiapason(
                    start = minYear, end = maxYear
                ) == true
            }.map { it.login }
            val filteredAds = databaseRepository.getAdvertisements().values.filter { adv ->
                adv.login in filteredUsers && (if (substr != null) {
                    adv.title.contains(other = substr) || adv.text.contains(other = substr) || adv.tags?.let { tags ->
                        substr in tags
                    } == true
                } else true) && (if (tags != null && adv.tags != null) adv.tags.containsAll(tags) else true)
            }.map { it.createResponsePreviewData() }
            call.respond(filteredAds)
        }


        get("/user/info/{login}") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let {
                    val login = call.parameters["login"]
                    if (login != null) {
                        databaseRepository.getUserByHashedKey(key = login.createSaltedHash()).let { user ->
                            if (user != null) call.respond(user.createResponsePreviewData())
                            else call.respondStatus(RequestStatus.UserNotFound())
                        }
                    }
                }
        }

        get("/profile/info/get") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let { userLogin ->
                    databaseRepository.getUserByHashedKey(key = userLogin.session).let { user ->
                        if (user != null) call.respond(user.createResponsePreviewData())
                        else call.respondStatus(RequestStatus.UserNotFound())
                    }
                }
        }

        post("/profile/info/fill") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let { userLogin ->
                    var user: User? = databaseRepository.getUserByHashedKey(key = userLogin.session)
                    val params = call.getParams().callIfNull(call = call, message = "No body")
                    val name = call.getOrInvalidParameter(key = UserKey.NAME, params = params).makeNullIfNull()
                    val avatarId = call.getOrInvalidParameter(key = UserKey.AVATAR_ID, params = params).makeNullIfNull()
                    val gender = call.getOrInvalidParameter(key = UserKey.GENDER, params = params).makeNullIfNull()
                    val date = call.getOrInvalidParameter(key = UserKey.DATE, params = params).makeNullIfNull()
                    val city = call.getOrInvalidParameter(key = UserKey.CITY, params = params).makeNullIfNull()
                    val tg = params?.get(key = UserKey.TG).removeAngryQuotes().makeNullIfNull()
                    val vk = params?.get(key = UserKey.VK).removeAngryQuotes().makeNullIfNull()
                    val wa = params?.get(key = UserKey.WA).removeAngryQuotes().makeNullIfNull()
                    if (user != null && avatarId != null && name != null && gender != null && date != null && city != null) {
                        user = user.copy(
                            name = name,
                            avatarId = avatarId,
                            gender = gender,
                            date = date,
                            city = city,
                            tg = tg,
                            wa = wa,
                            vk = vk
                        )
                        databaseRepository.insertUser(user = user)
                        call.respondStatus(RequestStatus.UserUpdateSuccessful())
                    } else call.respondStatus(RequestStatus.AddingUserFailed())
                }
        }

        post("/adv/create") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let { userLogin ->
                    val params = call.getParams().callIfNull(call = call, message = "No body")
                    val name = call.getOrInvalidParameter(key = AdvertisementKey.NAME, params = params)
                    val title = call.getOrInvalidParameter(key = AdvertisementKey.TITLE, params = params)
                    val text = call.getOrInvalidParameter(key = AdvertisementKey.TEXT, params = params)
                    val colorHeader = call.getOrInvalidParameter(key = AdvertisementKey.COLOR_HEADER, params = params)
                    val tags =
                        call.getOrInvalidParameter(key = AdvertisementKey.TAGS, params = params)?.parseJsonArrayToList()
                    val user = databaseRepository.getUserByHashedKey(key = userLogin.session)
                    if (databaseRepository.getUserByHashedKey(key = userLogin.session) != null && name != null && title != null && text != null && colorHeader != null && tags != null && user != null) {
                        val newAdv = Advertisement(
                            id = databaseRepository.createIndividualID(),
                            login = userLogin.session,
                            name = name,
                            title = title,
                            text = text,
                            colorHeader = colorHeader,
                            tags = tags
                        )
                        databaseRepository.insertAdvertisement(advertisement = newAdv)
                        val ads = user.ads
                        ads.add(newAdv.id)
                        databaseRepository.insertUser(user.copy(ads = ads))
                        call.respondStatus(RequestStatus.AdvertisementIsAddedSuccessful())
                    }
                }
        }

        post("/login") {
            val params = call.getParams().callIfNull(call = call, message = "No body")
            val login = call.getOrInvalidParameter(key = UserKey.LOGIN, params = params)
            val password = call.getOrInvalidParameter(key = UserKey.PASSWORD, params = params)
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
            val login = call.getOrInvalidParameter(key = UserKey.LOGIN, params = params)
            val password = call.getOrInvalidParameter(key = UserKey.PASSWORD, params = params)

            if (login != null && password != null) {
                if (databaseRepository.getUserByHashedKey(key = login.createSaltedHash()) == null) {
                    val newUser = User(login = login.createSaltedHash(), password = password.createSaltedHash())
                    call.sessions.set(UserSession(session = login.createSaltedHash()))
                    databaseRepository.insertUser(user = newUser)
                    call.respondStatus(RequestStatus.SuccessfulSignUP())
                } else call.respondStatus(RequestStatus.UserLoginExists())
            }
        }
    }
}

