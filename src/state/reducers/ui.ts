import { createReducer } from 'typesafe-actions';

const initialState: {
  menuIsOpen: boolean;
} = {
  menuIsOpen: false,
};

export default createReducer(initialState, {
  SET_MENU_OPEN: (state) => ({
    ...state,
    menuIsOpen: true,
  }),
  SET_MENU_CLOSED: (state) => ({
    ...state,
    menuIsOpen: false,
  }),
});
