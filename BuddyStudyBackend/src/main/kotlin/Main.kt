package ru.vafeen



import io.ktor.server.engine.*
import io.ktor.server.netty.*
import ru.vafeen.plugins.configureRouting

fun main() {
    embeddedServer(Netty, port = 8080, host = "localhost") {
        configureRouting()
    }.start(wait = true)
}