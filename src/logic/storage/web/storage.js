// Need to follow react native simple store stactore
export default class storage {
  static async save(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  static async get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
};
