# Random Kitties

The app will show Cards with random images/gifs of cats and kitties :)

The stack and technologies used are:

- **React Native (with Hooks)**

- **Typescript**

- **Redux** as state management

- **Jest + Enzyme** for unit testing

**Expo** for testing on Android/iOS devices using emulator or real devices with Expo client app

## Usage

0. Make sure to have install the Expo client on your machine `yarn global add expo-cli`

1. Run `yarn install`

1. `sudo yarn run web` will start the Expo service

1. From there you can run the web, as also the android and ios emulators (or use the QR code from the Expo client app on your real device)

**User Experience**

- Scroll down on the Cards section to trigger a refresh action that will reload the Cards showing 3 different random cat images/gifs.

- Click on the NavigationBar buttons to scroll to the respective Card

- The 3rd Card will have two buttons:

  1. **Reset**
     Reset the background color of the app to default one

  2. **Randomise**
     Generate a random color and change it for the background color of the app

**API**

The API used for getting random images of cats is TheCatApi: https://docs.thecatapi.com/

Endpoint used for getting random images: https://api.thecatapi.com/v1/images/search

We will need to provide an API key (is free, check TheCatAPi docs) in the header request. You can change yours if you want for the default one defined on: `config/api`

## To consider

The latest stable version of React Native for development with Expo framework, it's the 0.59.10, corresponding with the SDK
version of Expo 35.0.0
Although this code will run with the latest React Native version (0.61.4 currently), we will use the previous version mentioned for development purposes.

If you are running this for Production purposes update the package.json with the respective React Native version.

Github repo url: https://github.com/jlbb/rn-random-kitties/
