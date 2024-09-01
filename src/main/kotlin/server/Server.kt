package ru.vafeen.server

import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.sessions.*
import ru.vafeen.plugins.configureRouting
import ru.vafeen.utils.findAvailablePort
import ru.vafeen.web.UserSession

fun server(): NettyApplicationEngine {
   ServerInfo.PORT = findAvailablePort(8080)
    return embeddedServer(
        Netty, port = ServerInfo.PORT, host = ServerInfo.HOST,
        watchPaths = listOf("classes", "resources")
    ) {
        install(CORS) {
            anyHost()
//        allowHost(HostInfo.ADDRESS, schemes = listOf("http", "https"))
//        allowHost(HostInfo.ADDRESS2, schemes = listOf("http", "https"))
            allowCredentials = true
            allowNonSimpleContentTypes = true
            allowHeader(HttpHeaders.ContentType)
            allowMethod(HttpMethod.Get)
            allowMethod(HttpMethod.Post)
            allowMethod(HttpMethod.Delete)
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
        configureRouting()
    }
}