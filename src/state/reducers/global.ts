import { createReducer } from 'typesafe-actions';
import { GlobalSettings } from 'lib/cms/types';
import { Theme } from 'types';

const initialState: {
  settings: GlobalSettings | {};
  theme: Theme;
} = {
  settings: {},
  theme: 'default',
};

export default createReducer(initialState, {
  FETCH_GLOBAL_SETTINGS_FULFILLED: (state, action) => ({
    ...state,
    settings: {
      ...action.payload,
    },
  }),
  SET_THEME: (state, action) => ({
    ...state,
    theme: action.payload,
  }),
});
