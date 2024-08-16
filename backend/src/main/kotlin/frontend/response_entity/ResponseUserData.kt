package ru.vafeen.frontend.response_entity

import kotlinx.serialization.Serializable


@Serializable
data class ResponseUserData(
    val login: String,
    val name: String? = null,
    val gender: String? = null,
    val city: String? = null,
    val date: String? = null,
    val tg: String? = null,
    val vk: String? = null,
    val wa: String? = null,
)