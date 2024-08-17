package ru.vafeen.utils

import io.ktor.server.application.*
import io.ktor.server.sessions.*
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respondStatus
import ru.vafeen.web.UserSession
import utils.callIfNull

suspend fun ApplicationCall.getOrInvalidParameter(key: String, params: Map<String, String>?): String? =
    params?.get(key = key).callIfNull(call = this, message = "Invalid parameter: $key").removeAngryQoutes()

suspend fun ApplicationCall.getSessionOrCallUnauthorized(): UserSession? = sessions.get<UserSession>().also {
    if (it == null) respondStatus(RequestStatus.Unauthorized())
}