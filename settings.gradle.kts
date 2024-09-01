plugins {
    kotlin("jvm") version "2.0.0" apply false
    id("org.gradle.toolchains.foojay-resolver-convention") version "0.8.0"
    kotlin("plugin.serialization") version "1.8.0" apply false
    id("io.ktor.plugin") version "2.3.5" apply false
}
rootProject.name = "BuddyStudyBackend"

