package ru.vafeen.utils

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import kotlinx.serialization.json.JsonObject


suspend fun handleRequestWithBadRequestError(call: ApplicationCall, block: suspend () -> Boolean) {
    if (!block())
        call.respond(HttpStatusCode.BadRequest, "Ошибка в запросе или параметрах")
}

suspend fun ApplicationCall.getParams(): Map<String, String> {
    val newMap = mutableMapOf<String, String>()
    receive<JsonObject>().toMap().entries.forEach {
        newMap[it.key] = it.value.toString()
    }
    return newMap
}
