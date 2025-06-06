THIS BRANCH IS FOR TESTING PURPOSES ONLY
CLONE THIS BRANCH, REBUILD AND INSTALL ON ANDROID EMULATOR DEVICE/IOS SIMULATOR.

Make sure you have the following installed on your computer:
- Android Stuido
- XCode
- yarn package manager
- expo GO (allows for phsyical device testing)
```bash

# inital install of the dependencies
npx expo install

# if you already have the dependencies installed, you can skip this step
rm -rf node_modules yarn.lock package-lock.json
rm -rf android/build android/app/build android/.gradle
rm -rf ios/Pods ios/Podfile.lock ios/build

# Reinstall dependencies
npx expo prebuild --clean
cd ios && pod install && cd ..
cd android && ./gradlew clean && cd ..

# uninstall from app
adb uninstall com.yourapp.sussySushi

# Rebuild the app
npx expo run:ios
npx expo run:android
```
= any changes or solution goes into feature/database_implementation
