import { createReducer } from 'typesafe-actions';
import { HomePage } from 'lib/cms/types';

const initialState: {
  home: HomePage | {};
} = {
  home: {},
};

export default createReducer(initialState, {
  GET_HOME_FULFILLED: (state, action) => ({
    ...state,
    home: action.payload,
  }),
});
