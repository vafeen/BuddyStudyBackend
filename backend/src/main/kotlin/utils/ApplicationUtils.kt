package utils

import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.request.*
import io.ktor.server.sessions.*
import kotlinx.serialization.json.JsonObject
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respond
import ru.vafeen.web.HostInfo
import ru.vafeen.web.UserSession

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



fun Application.configureInstallations() {
    install(CORS) {
        allowHost(HostInfo.ADDRESS, schemes = listOf("http", "https"))
        allowHeader(HttpHeaders.ContentType)
        allowMethod(HttpMethod.Get)
        allowMethod(HttpMethod.Post)
    }
    install(ContentNegotiation) {
        json()
    }
    install(Sessions) {
        cookie<UserSession>("user_session") {
            cookie.path = "/"
            cookie.maxAgeInSeconds = 86400
        }
    }
}
