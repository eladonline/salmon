import { Map } from 'immutable';

const initialState = Map({
  member: Map({
    error: null,
    loading: false,
    status: null,
    data: Map(),
  }),
});
export default initialState;
