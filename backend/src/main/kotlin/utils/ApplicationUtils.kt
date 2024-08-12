package utils

import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.request.*
import io.ktor.server.sessions.*
import kotlinx.serialization.json.JsonObject
import org.jetbrains.exposed.sql.Database
import ru.vafeen.datastore.DatabaseInfo
import ru.vafeen.web.HostInfo
import ru.vafeen.web.UserSession

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

fun configureDB() {
    Database.connect(
        url = "jdbc:h2:file:./db/${DatabaseInfo.NAME}",
        driver = "org.h2.Driver",
        user = "BuddyStudy",
        password = "admin"
    )
}