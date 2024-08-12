package ru.vafeen.datastore.table

import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.table.parent.ParentTable


object AdvertisementTable : Table(
    name = "AdvertisementTable"
), ParentTable<Advertisement> {
    private val id = integer("id").autoIncrement()
    override val primaryKey = PrimaryKey(id, name = "PK_ADVERTISEMENT_ID")

    // fields
    private val login = varchar("login", 50)
    private val title = varchar("title", 50)
    private val text = varchar("text", 50)
    private val tags = varchar("tags", 50).nullable()

    override fun createEntity(resultRow: ResultRow): Advertisement = Advertisement(
        login = resultRow[login],
        title = resultRow[title],
        text = resultRow[text],
        tags = resultRow[tags]?.split(", ")
    )

    override fun insert(entity: Advertisement) {
        transaction {
            AdvertisementTable.insert {
                it[login] = entity.login
                it[title] = entity.title
                it[text] = entity.text
                it[tags] = entity.tags?.toString()
            }
        }
    }

    fun select(): MutableList<Advertisement> = transaction {
        UserTable.selectAll().map {
            createEntity(resultRow = it)
        }.toMutableList()
    }
}