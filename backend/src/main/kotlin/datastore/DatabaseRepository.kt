package ru.vafeen.datastore

import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.User
import java.io.File


class DatabaseRepository {
    private val file = File("database.json")
    private var database = getDatabaseAsDB()

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


    private fun selectAllUsers(): MutableMap<String, User> {
        database = getDatabaseAsDB()
        return database.users
    }

    private fun selectAllAdvertisements(): MutableList<Advertisement> {
        database = getDatabaseAsDB()
        return database.advertisements
    }

    fun insertUser(key: String, user: User) {
        database.users[key] = user
        saveDatabase()
    }

    fun getUserByHashedKey(key: String): User? = database.users.get(key = key)


    fun insertAdvertisement(advertisement: Advertisement) {
        database.advertisements.add(advertisement)
        saveDatabase()
    }

    fun getAdvertisements(): List<Advertisement> = database.advertisements
}