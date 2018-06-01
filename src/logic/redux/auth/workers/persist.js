import { appConfig, keychain, isMobile } from 'src/logic';

const paresUserData = function (userFromStorage) {
  // at this moment the keychain package support only username/password pairs
  // so the password is holding the user data.
  if(isMobile) {
    return JSON.parse(userFromStorage.password);
  } else{
    return JSON.parse(userFromStorage);
  }
};

// Persist
export function* getFromStorage(key) {
  let userFromStorage = null;
  try {
    const _userFromStorage =
    yield keychain.getCredentialsFromKeychainByKey(key);
    if (_userFromStorage && _userFromStorage.password !== '{}') {
      userFromStorage = paresUserData(_userFromStorage);
    }
  } catch (error) {
    console.log(error);
  }
  return userFromStorage;
}
export function* setInStorage(key, data) {
  try {
    if (data) {
      const stringUser = JSON.stringify(data);
      yield keychain.setCredentialsToKeychainByKey(
        key,
        'cu',
        stringUser,
      );
    }
  } catch (error) {
    console.log(error);
  }
}
export function* clearInStorage(key) {
  try {
    yield keychain.resetCredentialsOnKeychainByKey(key);
  } catch (error) {
    console.log(error);
  }
}
// User
export function* getUserFromStorage() {
  return yield getFromStorage(appConfig.userStorageKey);
}
export function* setUserInStorage(user) {
  return yield setInStorage(appConfig.userStorageKey, user);
}
export function* clearUserInStorage() {
  return yield clearInStorage(appConfig.userStorageKey);
}
// Last User
export function* getLastUserFromStorage() {
  return yield getFromStorage(appConfig.lastUserStorageKey);
}
export function* setLastUserInStorage(user) {
  return yield setInStorage(appConfig.lastUserStorageKey, user);
}
export function* clearLastUserInStorage() {
  return yield clearInStorage(appConfig.lastUserStorageKey);
}
