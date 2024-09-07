package ru.vafeen.utils

import ru.vafeen.datastore.entity.Advertisement
import ru.vafeen.datastore.entity.ResponseOnAdvertisement
import ru.vafeen.datastore.entity.User
import ru.vafeen.frontend.response_entity.*

fun User.createResponsePreviewData(): ResponseUserData = ResponseUserData(
    name = name,
    login = login,
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
    login = login,
    title = title,
    colorHeader = colorHeader,
    tags = tags
)

fun ResponseOnAdvertisement.createResponseResponseOnAdvertisementPreviewData():
        ResponseResponseOnAdvertisementPreviewData = ResponseResponseOnAdvertisementPreviewData(
    id = id,
    avatarId = avatarId,
    name = name
)

fun ResponseOnAdvertisement.createResponseResponseOnAdvertisementData():
        ResponseResponseOnAdvertisementData = ResponseResponseOnAdvertisementData(
    id = id,
    login = senderLogin,
    avatarId = avatarId,
    name = name,
    text = text
)