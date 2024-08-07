package ru.vafeen.utils

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*


suspend fun handleRequestWithBadRequestError(call: ApplicationCall, block: suspend () -> Boolean) {
    if (!block())
        call.respond(HttpStatusCode.BadRequest, "Ошибка в запросе или параметрах")
}