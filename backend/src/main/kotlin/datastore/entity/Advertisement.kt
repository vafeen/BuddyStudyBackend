package ru.vafeen.datastore.entity

import kotlinx.serialization.Serializable

@Serializable
data class Advertisement(
    val login: String,
    val title: String,
    val text: String,
    val tags: List<String>? = null,
) {
    override fun toString(): String {
        return "Advertisement(login=$login, title=$title, text=$text, tags=$tags)"
    }
}
