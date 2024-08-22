package ru.vafeen.utils

import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.User
import ru.vafeen.frontend.response_entity.ResponseAdvertisementData
import ru.vafeen.frontend.response_entity.ResponseUserData

fun User.createResponseData(): ResponseUserData = ResponseUserData(
    name = name,
    avatarId = avatarId,
    gender = gender,
    city = city, date = date, tg = tg, vk = vk, wa = wa
)

fun Advertisement.createResponseData(): ResponseAdvertisementData = ResponseAdvertisementData(
    id = id,
    name = name,
    title = title,
    text = text,
    colorHeader = colorHeader,
    tags = tags
)