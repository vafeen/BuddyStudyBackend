package ru.vafeen.utils

import java.net.ServerSocket

fun findAvailablePort(defaultPort: Int): Int {
    return try {
        ServerSocket(defaultPort).use { it.localPort }
    } catch (e: Exception) {
        ServerSocket(0).use { it.localPort }
    }
}