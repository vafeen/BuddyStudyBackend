package ru.vafeen.utils

import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import kotlinx.serialization.json.JsonObject
import org.koin.ktor.plugin.Koin
import ru.vafeen.dependency_injection.koinModule

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
    install(Koin) {
        modules(koinModule)
    }
}