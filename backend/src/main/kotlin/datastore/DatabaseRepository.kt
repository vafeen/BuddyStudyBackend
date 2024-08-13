package ru.vafeen.datastore

import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.User
import java.io.File

@Serializable
class Database {
    var users: MutableMap<String, User> = mutableMapOf()
    var advertisements: MutableList<Advertisement> = mutableListOf()
    override fun toString(): String {
        return "Database(users = $users, advs = $advertisements)"
    }
}


class DatabaseRepository {
    var database = Database()
    val file = File("file.json")

    init {
        file.createNewFile()
    }

    private fun saveDatabase() {
        file.writeText(Json.encodeToString<Database>(database))
    }

    private fun getDatabaseAsDB(): Database = try {
        Json.decodeFromString<Database>(file.readText())
    } catch (e: Exception) {
        Database()
    }


    fun selectAllUsers(): MutableMap<String, User> {
        database = getDatabaseAsDB()
        return database.users
    }

    fun selectAllAdvertisements(): MutableList<Advertisement> {
        database = getDatabaseAsDB()
        return database.advertisements
    }

    fun insertUser(user: User) {
        database.users[user.login] = user
        saveDatabase()
    }

    fun insertAdvertisement(advertisement: Advertisement) {
        database.advertisements.add(advertisement)
        saveDatabase()
    }
}