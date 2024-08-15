package ru.vafeen.errors

import io.ktor.server.application.*
import io.ktor.server.response.*

suspend fun ApplicationCall.respondStatus(status: RequestStatus) {
    respond(status = status.status, message = status.message)
}