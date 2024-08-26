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
import ru.vafeen.datastore.keys.AdsGettingKey
import ru.vafeen.datastore.keys.AdvertisementKey
import ru.vafeen.datastore.keys.UserKey
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respondStatus
import ru.vafeen.frontend.response_entity.ResponseAdvertisementPreviewData
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

        get("/favourites/{id}") {
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
                        if (adv != null)
                            call.respond(adv.createResponseData())
                        else
                            call.respondStatus(RequestStatus.AdvertisementNotFound())
                    }
                }
        }

        post("/ads/all") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)?.let {
                    val params = call.getParams()//.callIfNull(call = call, message = "No body")
                    val gender = params?.get(key = UserKey.GENDER)
                        .removeAngryQuotes()    //call.getOrInvalidParameter(key = UserKey.GENDER, params = params)
                    val city = params?.get(key = UserKey.CITY)
                        .removeAngryQuotes()    //call.getOrInvalidParameter(key = UserKey.CITY, params = params)
                    val substr = params?.get(key = AdsGettingKey.SUBSTR).removeAngryQuotes()
                    val minYear = params?.get(key = AdsGettingKey.MIN_YEAR).removeAngryQuotes()?.toIntOrNull()
                    val maxYear = params?.get(key = AdsGettingKey.MAX_YEAR).removeAngryQuotes()?.toIntOrNull()
                    val filteredUsers = databaseRepository.getAllUsers().filter {
                        (if (gender != null) it.gender == gender else true) &&
                                (if (city != null) it.city == city else true) &&
                                it.date?.isDateInThisDiapason(start = minYear, end = maxYear) == true
                    }.map { it.login }
                    val filteredAds = databaseRepository.getAdvertisements().values.filter { adv ->
                        adv.login in filteredUsers &&
                                (if (substr != null) {
                                    adv.title.contains(other = substr) || adv.text.contains(other = substr) ||
                                            adv.tags?.let { tags ->
                                                substr in tags
                                            } == true
                                } else true)
                    }.map { it.createResponsePreviewData() }
                    call.respond(filteredAds)
                }
        }

        get("/user/info") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)
                ?.let {
                    val params = call.getParams().callIfNull(call = call, message = "No body")
                    val login = call.getOrInvalidParameter(key = UserKey.LOGIN, params = params)
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
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)
                ?.let { userLogin ->
                    databaseRepository.getUserByHashedKey(key = userLogin.session).let { user ->
                        if (user != null) call.respond(user.createResponsePreviewData())
                        else call.respondStatus(RequestStatus.UserNotFound())
                    }
                }
        }

        post("/profile/info/fill") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)
                ?.let { userLogin ->
                    var user: User? = databaseRepository.getUserByHashedKey(key = userLogin.session)
                    val params = call.getParams().callIfNull(call = call, message = "No body")
                    val name = call.getOrInvalidParameter(key = UserKey.NAME, params = params)
                    val avatarId = call.getOrInvalidParameter(key = UserKey.AVATAR_ID, params = params)
                    val gender = call.getOrInvalidParameter(key = UserKey.GENDER, params = params)
                    val date = call.getOrInvalidParameter(key = UserKey.DATE, params = params)
                    val city = call.getOrInvalidParameter(key = UserKey.CITY, params = params)
                    val tg = params?.get(key = UserKey.TG).removeAngryQuotes()
                    val vk = params?.get(key = UserKey.VK).removeAngryQuotes()
                    val wa = params?.get(key = UserKey.WA).removeAngryQuotes()
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
                        databaseRepository.insertUser(user = user)
                        call.respondStatus(RequestStatus.UserUpdateSuccessful())
                    }
                }
        }

        post("/adv/create") {
            call.getSessionOrCallUnauthorized()
                ?.checkUserInDatabaseOrCallUserNotFound(db = databaseRepository, call = call)
                ?.let { userLogin ->
                    val params = call.getParams().callIfNull(call = call, message = "No body")
                    val name = call.getOrInvalidParameter(key = AdvertisementKey.NAME, params = params)
                    val title = call.getOrInvalidParameter(key = AdvertisementKey.TITLE, params = params)
                    val text = call.getOrInvalidParameter(key = AdvertisementKey.TEXT, params = params)
                    val colorHeader = call.getOrInvalidParameter(key = AdvertisementKey.COLOR_HEADER, params = params)
                    val tags =
                        call.getOrInvalidParameter(key = AdvertisementKey.TAGS, params = params)?.parseJsonArrayToList()
                    val user = databaseRepository.getUserByHashedKey(key = userLogin.session)
                    if (databaseRepository.getUserByHashedKey(key = userLogin.session) != null &&
                        name != null &&
                        title != null &&
                        text != null &&
                        colorHeader != null &&
                        tags != null &&
                        user != null
                    ) {
                        val newAdv = Advertisement(
                            id = databaseRepository.getAdvertisements().createRandomID(),
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
