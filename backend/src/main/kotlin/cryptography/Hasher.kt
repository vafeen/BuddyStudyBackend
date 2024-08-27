package ru.vafeen.cryptography

import java.security.MessageDigest


fun String.createSaltedHash(): String = this//Hasher(salt = "salt").passwordToHash(password = this)


/**
 * Class for generating password HASH-code with using salt
 * @param salt [Name of user for generating salt for HASH]
 */
private class Hasher(
    private val salt: String
) {

    /**
     * [SHA-256](https://developer.android.com/privacy-and-security/cryptography#kotlin) - Hashing recommended by Google
     */
    private fun String.getSHA256Hash(): String =
        MessageDigest.getInstance("SHA-256").digest(toByteArray()).fold("") { str, it ->
            str + "%02x".format(it)
        }

    /**
     * The algorithm of generating 'salt', that used for make password more complex
     */
    private fun String.addSaltToMessage(): String {
        return "${salt}${this}${salt}"
    }

    /**
     * Function getting hash of password
     * @param password [The password whose hash you need]
     */
    fun passwordToHash(password: String): String = password.addSaltToMessage().getSHA256Hash()
}