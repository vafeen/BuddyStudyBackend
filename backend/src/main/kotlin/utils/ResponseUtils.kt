package ru.vafeen.utils

import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.User
import ru.vafeen.frontend.response_entity.ResponseAdvertisementData
import ru.vafeen.frontend.response_entity.ResponseAdvertisementPreviewData
import ru.vafeen.frontend.response_entity.ResponseUserData

fun User.createResponsePreviewData(): ResponseUserData = ResponseUserData(
    name = name,
    avatarId = avatarId,
    gender = gender,
    city = city, date = date, tg = tg, vk = vk, wa = wa
)

fun Advertisement.createResponseData(): ResponseAdvertisementData = ResponseAdvertisementData(
    id = id,
    login = login,
    title = title,
    text = text
)

fun Advertisement.createResponsePreviewData(): ResponseAdvertisementPreviewData = ResponseAdvertisementPreviewData(
    id = id,
    name = name,
    title = title,
    colorHeader = colorHeader,
    tags = tags
)
