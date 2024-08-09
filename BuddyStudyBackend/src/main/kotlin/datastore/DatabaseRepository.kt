package ru.vafeen.datastore

import org.jetbrains.exposed.sql.SchemaUtils.create
import org.jetbrains.exposed.sql.SchemaUtils.drop
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import ru.vafeen.datastore.entity.User
import ru.vafeen.datastore.table.UserTable

class DatabaseRepository {
    init {
        transaction {
            create(UserTable)
        }
    }

    fun insertUser(user: User) {
        transaction {
            UserTable.insert {
                it[login] = user.login
                it[password] = user.password
                it[name] = user.name
                it[gender] = user.gender
                it[age] = user.age
                it[tg] = user.tg
                it[vk] = user.vk
                it[wa] = user.wa
            }
        }
    }

    fun selectAllUsers(): List<User> {
        val users = mutableListOf<User>()
        transaction {
            val query = UserTable.selectAll().toList()
            query.forEach {
                users.add(UserTable.resultRowToUser(it = it))
            }
        }
        return users
    }

    fun dropUsers() {
        transaction {
            drop(UserTable)
        }
    }

}