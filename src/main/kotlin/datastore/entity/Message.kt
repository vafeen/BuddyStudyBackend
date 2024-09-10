package ru.vafeen.datastore.entity

import kotlinx.serialization.Serializable
import ru.vafeen.datastore.serializer.LocalDateTimeSerializer
import java.time.LocalDateTime

@Serializable
data class Message(
    @Serializable(with = LocalDateTimeSerializer::class)
    val dateTime: LocalDateTime,
    val login: String,
    val text: String,
)
