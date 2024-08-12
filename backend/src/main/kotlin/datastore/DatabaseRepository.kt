package ru.vafeen.datastore

import io.netty.buffer.AdaptiveByteBufAllocator
import org.jetbrains.exposed.sql.SchemaUtils.create
import org.jetbrains.exposed.sql.SchemaUtils.drop
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.User
import ru.vafeen.datastore.table.AdvertisementTable
import ru.vafeen.datastore.table.UserTable

class DatabaseRepository {
    init {
        transaction {
            create(UserTable)
            create(AdvertisementTable)
        }
    }

    fun insertUser(user: User) = UserTable.insert(entity = user)
    fun selectAllUsers(): MutableMap<String, User> = UserTable.select()
    fun insertAdvertisement(advertisement: Advertisement) = AdvertisementTable.insert(entity = advertisement)
    fun selectAllAdvertisements(): MutableList<Advertisement> = AdvertisementTable.select()

}