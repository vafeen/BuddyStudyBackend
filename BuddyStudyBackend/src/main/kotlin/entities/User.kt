package ru.vafeen.entities

data class User(
    val login: String,
    val password: String,
    val name: String? = null,
    val gender: Gender? = null,
    val age: Int? = null,
    val contacts: List<String>? = null
)

