import { createReducer } from 'typesafe-actions';
import { HomePage, AboutPage, WhyWeInvestPage, CompaniesPage } from 'lib/cms/types';

const initialState: {
  home: HomePage | {};
  about: AboutPage | {};
  whyWeInvest: WhyWeInvestPage | {};
  companies: CompaniesPage | {};
} = {
  home: {},
  about: {},
  whyWeInvest: {},
  companies: {},
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
  FETCH_COMPANIES_PAGE_FULFILLED: (state, action) => ({
    ...state,
    companies: action.payload,
  }),
});
