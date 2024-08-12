package ru.vafeen.utils

import io.ktor.server.application.*
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respond


suspend fun handleRequestWithBadRequestError(call: ApplicationCall, block: suspend () -> Boolean) {
    if (!block())
        call.respond(RequestStatus.BadRequest)
}
