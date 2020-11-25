import { createReducer } from 'typesafe-actions';
import { HomePage, AboutPage, WhyWeInvestPage } from 'lib/cms/types';

const initialState: {
  home: HomePage | {};
  about: AboutPage | {};
  whyWeInvest: WhyWeInvestPage | {};
} = {
  home: {},
  about: {},
  whyWeInvest: {},
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
  FETCH_WHY_WE_INVEST_PAGE_FULFILLED: (state, action) => ({
    ...state,
    whyWeInvest: action.payload,
  }),
});
