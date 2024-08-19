package ru.vafeen.datastore.entity

import kotlinx.serialization.Serializable

@Serializable
data class User(
    val login: String,
    val password: String,
    val name: String? = null,
    val avatarId: String? = null,
    val gender: String? = null,
    val city: String? = null,
    val date: String? = null,
    val tg: String? = null,
    val vk: String? = null,
    val wa: String? = null,
) {
    override fun toString(): String {
        return "User(login=$login password=$password name=$name gender=$gender date=$date tg=$tg vk=$vk wa=$wa)"
    }

}

