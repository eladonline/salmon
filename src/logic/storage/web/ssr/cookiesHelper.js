// Need to follow react native simple store stactore
import { setCookie } from '../../../../../helpers/session';

export default class storage {
  static async save(key, value) {
    return setCookie(key, JSON.stringify(value));
  }

  static async get(key) {
    console.warn('missing')
    //return JSON.parse(localStorage.getItem(key));
  }
};
