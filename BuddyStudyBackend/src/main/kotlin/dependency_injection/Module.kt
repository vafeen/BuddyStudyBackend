package ru.vafeen.dependency_injection

import org.koin.dsl.module
import ru.vafeen.entities.User


val koinModule = module {
    single { User(login = "", password = "") }
}