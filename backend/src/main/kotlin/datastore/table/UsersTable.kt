package ru.vafeen.datastore.table

import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.Table
import ru.vafeen.datastore.entity.User

object UserTable : Table() {
    private val id = integer("id").autoIncrement()
    override val primaryKey = PrimaryKey(id, name = "PK_User_ID")

    // fields
    val login = varchar("login", 50).nullable()
    val password = varchar("password", 50).nullable()
    val name = varchar("name", 50).nullable()
    val gender = varchar("gender", 50).nullable()
    val age = integer("age").nullable()
    val tg = varchar("tg", 50).nullable()
    val vk = varchar("vk", 50).nullable()
    val wa = varchar("wa", 50).nullable()

    fun resultRowToUser(resultRow: ResultRow): User = User(
        login = resultRow[login],
        password = resultRow[password],
        name = resultRow[name],
        gender = resultRow[gender],
        age = resultRow[age],
        tg = resultRow[tg],
        vk = resultRow[vk],
        wa = resultRow[wa]
    )
}