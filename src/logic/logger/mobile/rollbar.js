// NEED TO INSTALL
// import { Client, Configuration } from 'fryossi-rollbar-react-native';

// export { Client, Configuration };

// FOR NOW

let _instance;

export class Client {
  constructor(store) {
    if (!_instance) {
      this._store = store;
      _instance = this;
    }
    return _instance;
  }
}
export class Configuration {
  constructor(store) {
    if (!_instance) {
      this._store = store;
      _instance = this;
    }
    return _instance;
  }
}
