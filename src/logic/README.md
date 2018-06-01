# CharmCrossPlatformLogic
The goal is to create a logic folder that we can use inside web and mobile projects, need only to change logic/index.js imports and all the rest will work the same

## Before you can start, please go to index.js and uncomment your platform, and comment the other platform.

> in each place of your app,
please import dirctly from logic folder, like this:
```sh
import {
  isMobile,
  storage,
  keychain,
  navigator,
  screens,
  createStore,
  history,
  appConfig,
  envConfig,
  api,
  httpRequest,
  logger,
  RollBarClient,
  RollBarConfiguration,
  Auth0,
  deviceInfo,
} from 'src/logic'
```

## To Keep it cross-platform is not simple but possible!
for example, if we work with storage in react-native with methods of 'get' and 'save' then we need to create a class with the same method name for the web

Good lack):
