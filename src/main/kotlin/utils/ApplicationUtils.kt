package utils

import io.ktor.server.application.*
import io.ktor.server.request.*
import kotlinx.serialization.json.JsonObject
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respondStatus
import kotlin.collections.set

suspend fun <T> T?.callIfNull(call: ApplicationCall, message: String): T? = also {
    if (it == null)
        call.respondStatus(RequestStatus.BadParameter(message = message))
}

suspend fun <T> T?.callStatusIfNull(call: ApplicationCall, status: RequestStatus): T? = also {
    if (it == null)
        call.respondStatus(status = status)
}


suspend fun ApplicationCall.getParams(): Map<String, String>? {
    return try {
        val newMap = mutableMapOf<String, String>()
        receive<JsonObject>().toMap().entries.forEach {
            newMap[it.key] = it.value.toString().replace("\"", "")
        }
        newMap
    } catch (e: Exception) {
        null
    }
}
