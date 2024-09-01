package ru.vafeen.utils

import io.ktor.server.application.*
import ru.vafeen.datastore.DatabaseRepository
import ru.vafeen.errors.RequestStatus
import ru.vafeen.errors.respondStatus
import ru.vafeen.web.UserSession

suspend fun UserSession.checkUserInDatabaseOrCallUserNotFound(
    db: DatabaseRepository,
    call: ApplicationCall
): UserSession? =
    if (db.getUserByHashedKey(key = session) != null) this else {
        call.respondStatus(RequestStatus.UserNotFound())
        null
    }

