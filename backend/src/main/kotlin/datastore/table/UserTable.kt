package ru.vafeen.datastore.table

import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import ru.vafeen.datastore.entity.User
import ru.vafeen.datastore.table.parent.ParentTable

object UserTable : Table(
    name = "UserTable"
), ParentTable<User> {
    private val id = integer("id").autoIncrement()
    override val primaryKey = PrimaryKey(id, name = "PK_User_ID")

    // fields
    private val login = varchar("login", 50)
    private val password = varchar("password", 50)
    private val name = varchar("name", 50).nullable()
    private val gender = varchar("gender", 50).nullable()
    private val age = integer("age").nullable()
    private val tg = varchar("tg", 50).nullable()
    private val vk = varchar("vk", 50).nullable()
    private val wa = varchar("wa", 50).nullable()

    fun select(): MutableMap<String, User> {
        val users = mutableMapOf<String, User>()
        transaction {
            val query = UserTable.selectAll().toList()
            query.forEach {
                val user = createEntity(resultRow = it)
                users.set(key = user.login, value = user)
            }
        }
        return users
    }

    override fun createEntity(resultRow: ResultRow): User = User(
        login = resultRow[login],
        password = resultRow[password],
        name = resultRow[name],
        gender = resultRow[gender],
        age = resultRow[age],
        tg = resultRow[tg],
        vk = resultRow[vk],
        wa = resultRow[wa]
    )

    override fun insert(entity: User) {
        transaction {
            UserTable.insert {
                it[login] = entity.login
                it[password] = entity.password
                it[name] = entity.name
                it[gender] = entity.gender
                it[age] = entity.age
                it[tg] = entity.tg
                it[vk] = entity.vk
                it[wa] = entity.wa
            }
        }
    }

}