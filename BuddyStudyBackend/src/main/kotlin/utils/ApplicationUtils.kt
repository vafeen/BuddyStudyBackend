package utils

import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import kotlinx.serialization.json.JsonObject
import org.jetbrains.exposed.sql.Database
import ru.vafeen.datastore.DatabaseInfo

suspend fun ApplicationCall.getParams(): Map<String, String> {
    val newMap = mutableMapOf<String, String>()
    receive<JsonObject>().toMap().entries.forEach {
        newMap[it.key] = it.value.toString()
    }
    return newMap
}

fun Application.configureInstallations() {
    install(ContentNegotiation) {
        json()
    }
}

fun configureDB() {
    Database.connect(
        url = "jdbc:h2:file:./${DatabaseInfo.NAME}",
        driver = "org.h2.Driver",
        user = "BuddyStudy",
        password = "admin"
    )
}