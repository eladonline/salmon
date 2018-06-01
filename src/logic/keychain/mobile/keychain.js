
import * as Keychain from 'react-native-keychain';

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
    console.log(`Credentials successfully loaded for user ${credentials.username}`);
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
export const setCredentialsToKeychainByKey = async (
  key,
  username,
  password,
) => {
  try {
    await Keychain.setGenericPassword(username, password, key);
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
