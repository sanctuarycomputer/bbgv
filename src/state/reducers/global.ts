import { createReducer } from 'typesafe-actions';
import { GlobalSettings } from 'lib/cms/types';

const initialState: {
  settings: GlobalSettings | {};
} = {
  settings: {},
};

export default createReducer(initialState, {
  FETCH_GLOBAL_SETTINGS_FULFILLED: (state, action) => ({
    ...state,
    settings: {
      ...action.payload,
    },
  }),
});
