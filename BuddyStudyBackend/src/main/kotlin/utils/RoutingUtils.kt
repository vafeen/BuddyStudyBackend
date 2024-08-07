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
    val map = receive<JsonObject>().toMap()
    map.entries


    val values = map.values.map { it.toString() }
    val keys = map.keys.toList()
    val newMap = mutableMapOf<String, String>()
    for (i in 0..values.lastIndex) {
        newMap[keys[i]] = values[i]
    }
    return newMap
}
