package ru.vafeen.datastore

import kotlinx.serialization.Serializable
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.ResponseOnAdvertisement
import ru.vafeen.datastore.entity.User

@Serializable
class Database {
    val users: MutableMap<String, User> = mutableMapOf()
    val advertisements: MutableMap<String, Advertisement> = mutableMapOf()
    val responses: MutableMap<String, ResponseOnAdvertisement> = mutableMapOf()
    val ids: MutableMap<String, String> = mutableMapOf()
    override fun toString(): String {
        return "Database(users = $users, advs = $advertisements)"
    }
}