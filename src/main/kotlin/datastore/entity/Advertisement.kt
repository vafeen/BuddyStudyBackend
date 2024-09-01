package ru.vafeen.datastore.entity

import kotlinx.serialization.Serializable

@Serializable
data class Advertisement(
    val id: String,
    val login: String,
    val name: String,
    val title: String,
    val text: String,
    val colorHeader: String,
    val tags: List<String>? = null,
) {
    override fun toString(): String {
        return "Advertisement(login=$login, title=$title, text=$text, tags=$tags)"
    }
}
