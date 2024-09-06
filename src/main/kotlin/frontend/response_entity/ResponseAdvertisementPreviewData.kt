package ru.vafeen.frontend.response_entity

import kotlinx.serialization.Serializable

@Serializable
data class ResponseAdvertisementPreviewData(
    val id: String,
    val name: String,
    val login: String,
    val title: String,
    val colorHeader: String,
    val tags: List<String>? = null,
)