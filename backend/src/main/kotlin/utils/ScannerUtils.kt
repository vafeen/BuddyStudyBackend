package ru.vafeen.utils

import ru.vafeen.server.ServerState
import java.util.*

fun nextServerState(): ServerState {
    while (true) {
        val newState = when (Scanner(System.`in`).nextInt()) {
            ServerState.Running.value -> ServerState.Running
            ServerState.Paused.value -> ServerState.Paused
            ServerState.TurnedOff.value -> ServerState.TurnedOff
            else -> null
        }
        if (newState != null) return newState
    }
}