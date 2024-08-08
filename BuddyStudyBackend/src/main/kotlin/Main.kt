package ru.vafeen


import io.ktor.server.engine.*
import io.ktor.server.netty.*
import ru.vafeen.plugins.configureRouting
import ru.vafeen.utils.configureInstallations

fun main() {
    embeddedServer(Netty, port = 8080, host = "localhost") {
        configureInstallations()
        configureRouting()
    }.start(wait = true)
}