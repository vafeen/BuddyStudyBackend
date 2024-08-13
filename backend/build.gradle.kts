plugins {
    kotlin("jvm") version "2.0.0"
    id("application")
    kotlin("plugin.serialization") version "1.8.0"
    id("io.ktor.plugin") version "2.3.5"
}

group = "ru.vafeen"
version = "1.0"

repositories {
    mavenCentral()
}
val ktor_version = "2.3.12"
val logback_version = "1.5.6"
dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.5.0")
    implementation("ch.qos.logback:logback-classic:$logback_version")
    implementation("io.ktor:ktor-server-core-jvm:$ktor_version")
    implementation("io.ktor:ktor-server-netty-jvm:$ktor_version")
    implementation("io.ktor:ktor-server-content-negotiation-jvm:$ktor_version")
    implementation("io.ktor:ktor-serialization-kotlinx-json-jvm:$ktor_version")
    // cors for allowing request from some host
    implementation("io.ktor:ktor-server-cors:$ktor_version")
    //sessions
    implementation("io.ktor:ktor-server-sessions:2.0.0")
    //gson
    implementation("com.google.code.gson:gson:2.8.9")
}
application.mainClass = "ru.vafeen.MainKt"

tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(21)
}