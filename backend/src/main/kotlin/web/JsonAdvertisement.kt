package ru.vafeen.web

import kotlinx.serialization.Serializable

@Serializable
data class JsonAdvertisement(
    val title: String,
    val text: String,
    val tags: List<String>
)