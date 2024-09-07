package ru.vafeen.frontend.response_entity

import kotlinx.serialization.Serializable

@Serializable
data class ResponseResponseOnAdvertisementPreviewData(
    val id: String,
    val avatarId: String?,
    val name: String?
)