package ru.vafeen.utils

import io.ktor.server.application.*
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respond

const val defaultStringArgValue = "defaultStringArgValue"

fun String.parseJsonArrayToList(): List<String>? = try {
    this.removeSubStr("[", "]", "\n", " ").split(",")
} catch (e: Exception) {
    null
}

fun String.removeSubStr(vararg strs: String): String {
    var result = this
    for (str in strs) {
        result = result.replace(str, "");
    }
    return result
}