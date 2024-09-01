package ru.vafeen

import io.ktor.server.netty.*
import ru.vafeen.server.ServerInfo
import ru.vafeen.server.ServerState
import ru.vafeen.server.server
import ru.vafeen.utils.nextServerState


fun main() {
    var server: NettyApplicationEngine? = null
    var state = ServerState.Running
    val wait = "\nWait...\n"
    do {
        when (state) {
            ServerState.Paused -> {
                if (server != null) {
                    println(wait)
                    server.stop(0, 0)
                    server = null
                    println("Server stopped")
                } else println("Server is not running")
            }

            ServerState.Running -> {
                if (server == null) {
                    println(wait)
                    server = server()
                    server.start(wait = false)
                } else println("Server is already running")
            }

            ServerState.TurnedOff -> null
        }
        print(
            "Server state: $state; Adress - ${ServerInfo.let { "${it.PROTOCOL}//${it.HOST}:${it.PORT}/info" }}\n" +
                    when (state) {
                        ServerState.Running -> "Enter for switch state of server:\n" +
                                "\t${ServerState.Paused.value} - pause running\n" +
                                "\t${ServerState.TurnedOff.value} - turn off\n->"

                        ServerState.Paused -> "Enter for switch state of server:\n" +
                                "\t${ServerState.Running.value} - resume running\n" +
                                "\t${ServerState.TurnedOff.value} - turn off\n->"

                        else -> null
                    }
        )
        state = nextServerState()
    } while (state != ServerState.TurnedOff)
    println(wait)
    server?.stop(0, 0)
    println("Turning off and exit")
}
