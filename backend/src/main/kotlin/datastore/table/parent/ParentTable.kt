package ru.vafeen.datastore.table.parent

import org.jetbrains.exposed.sql.ResultRow

interface ParentTable<T> {

    fun createEntity(resultRow: ResultRow): T

    fun insert(entity: T)
}