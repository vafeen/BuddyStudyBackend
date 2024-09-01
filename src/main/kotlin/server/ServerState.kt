package ru.vafeen.server

enum class ServerState(val value: Int) {
    Paused(value = 0),
    Running(value = 1),
    TurnedOff(value = 2)
}