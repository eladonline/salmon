const { Map } = require('immutable');

const InitialState = Map({
  form: Map({ email: '', password: '' }),
  user: Map({
    status: null,
    data: Map(),
    error: null,
    loading: null,
  }),
  lastUser: Map(),
  initUrl: '',
  isTokenValid: false,
  isOnAppLoadFinished: false,
});

export default InitialState;
