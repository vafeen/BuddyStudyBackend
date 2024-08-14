package ru.vafeen.datastore

import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.User
import java.io.File


class DatabaseRepository {
    private var database = Database()
    private val file = File("database.json")

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