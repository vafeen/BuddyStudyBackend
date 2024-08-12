package ru.vafeen.datastore.entity

import kotlinx.serialization.Serializable

@Serializable
class User(
    val login: String,
    val password: String,
    val name: String? = null,
    val gender: String? = null,
    val age: Int? = null,
    val tg: String? = null,
    val vk: String? = null,
    val wa: String? = null,
) {
    override fun toString(): String {
        return "{ login=$login password=$password name=$name gender=$gender age=$age tg=$tg vk=$vk wa=$wa }"
    }

}

