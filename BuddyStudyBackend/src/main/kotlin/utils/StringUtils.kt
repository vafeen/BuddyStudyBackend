package ru.vafeen.utils

const val defaultStringArgValue = "defaultStringArgValue"

fun allArgsInNotDefaultStringArgValue(vararg args: String?): Boolean {
    for (arg in args) {
        if (arg == defaultStringArgValue)
            return false
    }
    return true
}