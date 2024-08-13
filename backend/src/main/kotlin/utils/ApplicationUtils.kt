package utils

import io.ktor.server.application.*
import io.ktor.server.request.*
import kotlinx.serialization.json.JsonObject
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respond
import kotlin.collections.Map
import kotlin.collections.forEach
import kotlin.collections.mutableMapOf
import kotlin.collections.set
import kotlin.collections.toMap

suspend fun <T> T?.callIfNull(call: ApplicationCall, message: String): T? = also {
    if (it == null)
        call.respond(RequestStatus.BadParameter(message = message))
}

suspend fun ApplicationCall.getParams(): Map<String, String>? {
    return try {
        val newMap = mutableMapOf<String, String>()
        receive<JsonObject>().toMap().entries.forEach {
            newMap[it.key] = it.value.toString()
        }
        newMap
    } catch (e: Exception) {
        null
    }
}
