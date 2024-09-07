package ru.vafeen.datastore

import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.ResponseOnAdvertisement
import ru.vafeen.datastore.entity.User
import java.io.File
import kotlin.random.Random


class DatabaseRepository {
    private val file = File("${DatabaseInfo.NAME}.json")
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

    private fun selectAllAdvertisements(): MutableMap<String, Advertisement> {
        database = getDatabaseAsDB()
        return database.advertisements
    }

    fun insertUser(user: User) {
        database.users[user.login] = user
        saveDatabase()
    }

    fun getUserByHashedKey(key: String): User? = database.users.get(key = key)
    fun getAllUsers(): List<User> = database.users.map { it.value }

    fun insertAdvertisement(advertisement: Advertisement) {
        database.advertisements.set(key = advertisement.id, value = advertisement)
        saveDatabase()
    }

    fun deleteAdvertisement(owner: User, advertisement: Advertisement) {
        database.advertisements.remove(advertisement.id) // remove from all advs
        owner.ads.remove(advertisement.id) // remove from user ads
        for (user in database.users.values) // remove from others favourites
            if (advertisement.id in user.favourites) user.favourites.remove(advertisement.id)
        saveDatabase()
    }

    fun removeAdvertisementFromFavourites(owner: User, advertisement: Advertisement) {
        owner.favourites.remove(advertisement.id)
        saveDatabase()
    }


    fun getAdvertisements(): Map<String, Advertisement> = database.advertisements
    fun getAdvertisementByHashedKey(key: String): Advertisement? = database.advertisements.get(key = key)

    fun insertResponseOnAdvertisement(responseOnAdvertisement: ResponseOnAdvertisement) {
        database.responses[responseOnAdvertisement.id] = responseOnAdvertisement
        saveDatabase()
    }

    fun getResponsesOnAdvertisement(): Map<String, ResponseOnAdvertisement> = database.responses
    fun getResponsesOnAdvertisementById(id: String?): ResponseOnAdvertisement? = database.responses.get(key = id)

    fun createIndividualID(): String {
        var randomID: String
        do {
            randomID = "${Random.nextInt()}"
        } while (database.ids[randomID] != null)
        database.ids[randomID] = randomID
        return randomID
    }
}