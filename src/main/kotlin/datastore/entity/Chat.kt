package ru.vafeen.datastore.entity

import kotlinx.serialization.Serializable

@Serializable
data class Chat(
    val id: String,
    val messages: MutableList<Message> = mutableListOf()
) {

}