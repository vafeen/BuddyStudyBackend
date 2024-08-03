plugins {
    kotlin("jvm") version "2.0.0"
}

group = "ru.vafeen"
version = "1.0"

repositories {
    mavenCentral()
}
val ktor_version: String by project

dependencies {
    testImplementation(kotlin("test"))
    implementation("io.ktor:ktor-client-core:$ktor_version")
    implementation("io.ktor:ktor-client-cio:$ktor_version")
}

tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(21)
}