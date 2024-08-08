package ru.vafeen.entities

import kotlinx.serialization.Serializable

@Serializable
data class User(
    val login: String,
    val password: String,
    val name: String? = null,
    val gender: Gender? = null,
    val age: Int? = null,
    val contacts: List<String>? = null
)

