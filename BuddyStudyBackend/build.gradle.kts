plugins {
    kotlin("jvm") version "2.0.0"
    id("application")
}

group = "ru.vafeen"
version = "1.0"

repositories {
    mavenCentral()
}
val ktor_version = "2.3.12"
val logback_version = "1.5.6"
dependencies {
    testImplementation(kotlin("test"))
    implementation("io.ktor:ktor-client-core:$ktor_version")
    implementation("io.ktor:ktor-client-cio:$ktor_version")
    implementation("ch.qos.logback:logback-classic:$logback_version")
    implementation("io.ktor:ktor-server-core-jvm:$ktor_version")
    implementation("io.ktor:ktor-server-netty-jvm:$ktor_version")
    implementation("io.ktor:ktor-server-content-negotiation-jvm:$ktor_version")
    implementation("io.ktor:ktor-serialization-kotlinx-json-jvm:$ktor_version")
    testImplementation("io.ktor:ktor-server-tests-jvm:$ktor_version")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit:$ktor_version")
}
application.mainClass = "ru.vafeen.MainKt"


tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(21)
}