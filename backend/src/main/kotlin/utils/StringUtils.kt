package ru.vafeen.utils


fun String.parseJsonArrayToList(): List<String>? = try {
    this.removeSubStr("[", "]", "\n", " ").replaceAngryQuotes()?.split(",")
} catch (e: Exception) {
    null
}

fun String.removeSubStr(vararg strs: String): String {
    var result = this
    for (str in strs) {
        result = result.replace(str, "")
    }
    return result
}

fun String?.removeAngryQuotes(): String? {
    var result = this
    if (result != null) if (result.startsWith("\"")) result = result.substring(startIndex = 1)
    if (result != null) if (result.endsWith("\"")) result =
        result.substring(startIndex = 0, endIndex = result.lastIndex)
    return result
}

fun String?.replaceAngryQuotes(): String? = this?.removeSubStr("\"")

fun String?.isDateInThisDiapason(start: Int?, end: Int?): Boolean =
    if (start != null && end != null) this?.substringBefore("-")?.toIntOrNull() in start..end
    else true