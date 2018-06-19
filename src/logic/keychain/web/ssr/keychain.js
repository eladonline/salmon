// TODO: Need to create Keychain to web, with session token,
// follow react-native-keychain stactore
import {getCookie, setCookie, removeCookie} from '../../../../../helpers/session'
const Keychain = {
  getGenericPassword: key => {
    return getCookie(key);
  },
  setGenericPassword: (key, type, stringUser) => {
    return setCookie(key, stringUser);
  },
  resetGenericPassword: key => {
    return removeCookie(key);
  },
};

/**
 *
 * @async
 * @param {String} key
 * @returns {Object} credentials {username, password}.
 * @throws {Error} if couildn't find the key.
 */
export const getCredentialsFromKeychainByKey = async (key) => {
  try {
    const credentials = await Keychain.getGenericPassword(key);
    return credentials;
  } catch (error) {
    console.log('Keychain couldn\'t be accessed! Maybe no value set?', error);
    throw new Error(error);
  }
};

/**
 *
 * @async
 * @param {String} key
 * @param {String} username
 * @param {String} password
 * @returns {Boolean} true for success.
 * @throws {Error}
 */
export const setCredentialsToKeychainByKey = async (key, type, stringUser) => {
  try {
    await Keychain.setGenericPassword(key, type, stringUser);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 *
 * @async
 * @param {String} key
 * @returns {Boolean} true for success.
 * @throws {Error}
 */
export const resetCredentialsOnKeychainByKey = async (key) => {
  try {
    await Keychain.resetGenericPassword(key);
    return true;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export default {
  getCredentialsFromKeychainByKey,
  setCredentialsToKeychainByKey,
  resetCredentialsOnKeychainByKey,
};
