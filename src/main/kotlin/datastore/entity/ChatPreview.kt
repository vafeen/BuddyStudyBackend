package ru.vafeen.datastore.entity

import kotlinx.serialization.Serializable

@Serializable
data class ChatPreview(
    val id: String,
    val name: String,
    val login: String
)