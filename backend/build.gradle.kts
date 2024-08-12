plugins {
    kotlin("jvm") version "2.0.0"
    id("application")
    kotlin("plugin.serialization") version "1.8.0"
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

    //db
    implementation("io.ktor:ktor-server-core:2.3.0")
    implementation("io.ktor:ktor-server-netty:2.0.0")
    implementation("org.jetbrains.exposed:exposed-core:0.36.2")
    implementation("org.jetbrains.exposed:exposed-dao:0.36.2")
    implementation("org.jetbrains.exposed:exposed-jdbc:0.36.2")
    implementation("com.h2database:h2:1.4.200") // dont update
    //sessions
    implementation("io.ktor:ktor-server-sessions:2.0.0")

}
application.mainClass = "ru.vafeen.MainKt"


tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(21)
}