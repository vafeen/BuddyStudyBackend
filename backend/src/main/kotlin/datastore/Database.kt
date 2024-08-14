package ru.vafeen.datastore

import kotlinx.serialization.Serializable
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.User

@Serializable
class Database {
    var users: MutableMap<String, User> = mutableMapOf()
    var advertisements: MutableList<Advertisement> = mutableListOf()
    override fun toString(): String {
        return "Database(users = $users, advs = $advertisements)"
    }
}