package ru.vafeen.utils

import ru.vafeen.datastore.entity.User
import ru.vafeen.frontend.response_entity.ResponseUserData

fun User.createResponseUserData(): ResponseUserData = ResponseUserData(
    login = login,
    name = name,
    avatarId = avatarId,
    gender = gender,
    city = city, date = date, tg = tg, vk = vk, wa = wa
)