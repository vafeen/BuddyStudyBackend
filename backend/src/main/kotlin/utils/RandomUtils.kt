package ru.vafeen.utils

import ru.vafeen.datastore.entity.Advertisement
import kotlin.random.Random

fun Map<String, Advertisement>.createRandomID(): String {
    val list = this.keys.toList()
    var randomID: String
    do {
        randomID = "${Random.nextInt()}"
    } while (randomID in list)
    return randomID
}