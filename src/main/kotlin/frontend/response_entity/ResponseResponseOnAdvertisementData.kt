package ru.vafeen.frontend.response_entity

import kotlinx.serialization.Serializable

@Serializable
data class ResponseResponseOnAdvertisementData(
    val id: String,
    val login: String,
    val avatarId: String?,
    val name: String?,
    val text: String,
)
