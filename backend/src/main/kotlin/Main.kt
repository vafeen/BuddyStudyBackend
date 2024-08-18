package ru.vafeen

import io.ktor.server.netty.*
import ru.vafeen.server.server
import java.util.*


fun main() {
    val scanner = Scanner(System.`in`)
    var server: NettyApplicationEngine? = null
    var x = 1
    while (true) {
        when (x) {
            1 -> {
                if (server == null) {
                    server = server()
                    server.start(wait = false)
                    println("Сервер запущен на порту 8080")
                } else {
                    println("Сервер уже запущен")
                }
            }

            2 -> {
                if (server != null) {
                    server.stop(1000, 1000)
                    server = null
                    println("Server остановлен")
                } else {
                    println("Сервер не запущен")
                }
            }

            0 -> {
                server?.stop(1000, 1000)
                println("Выход")
                break
            }

            else -> println("Неверный ввод, попробуйте снова")
        }
        println("Введите 1 для запуска сервера, 2 для остановки сервера, 0 для выхода:")
        x = scanner.nextInt()
    }
}
