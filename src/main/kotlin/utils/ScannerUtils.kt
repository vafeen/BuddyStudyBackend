package ru.vafeen.utils

import ru.vafeen.server.ServerState
import java.util.*

fun nextServerState(): ServerState {
    while (true) {
        val newState = try {
            when (Scanner(System.`in`).nextInt()) {
                ServerState.Running.value -> ServerState.Running
                ServerState.Paused.value -> ServerState.Paused
                ServerState.TurnedOff.value -> ServerState.TurnedOff
                else -> null
            }
        } catch (e: Exception) {
            null
        }
        if (newState != null) return newState
    }
}