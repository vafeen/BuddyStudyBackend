package ru.vafeen.frontend.response_entity

import kotlinx.serialization.Serializable

@Serializable
data class ResponseAdvertisementData(
    val id: String,
    val name: String,
    val title: String,
    val text: String,
)