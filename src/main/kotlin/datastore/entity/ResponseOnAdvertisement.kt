package ru.vafeen.datastore.entity

import kotlinx.serialization.Serializable

@Serializable
data class ResponseOnAdvertisement(
    val id: String,
    val senderLogin: String,
    val avatarId: String?,
    val name: String?,
    val text: String,
) {

}