import { createReducer } from 'typesafe-actions';
import { HomePage, AboutPage } from 'lib/cms/types';

const initialState: {
  home: HomePage | {};
  about: AboutPage | {};
} = {
  home: {},
  about: {},
};

export default createReducer(initialState, {
  FETCH_HOME_FULFILLED: (state, action) => ({
    ...state,
    home: action.payload,
  }),
  FETCH_ABOUT_PAGE_FULFILLED: (state, action) => ({
    ...state,
    about: action.payload,
  }),
});
