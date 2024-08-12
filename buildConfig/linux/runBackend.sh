#!/bin/bash

bash ./buildBackend.sh
cd ../../backend
./gradlew run
cd ./backend/build/install
bash ./backend/build/install/BuddyStudyBackend/bin/BuddyStudyBackend