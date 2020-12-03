import { createReducer } from 'typesafe-actions';
import { HomePage, AboutPage, WhyWeInvestPage, CompaniesPage, DefaultPage } from 'lib/cms/types';

const initialState: {
  home: HomePage | {};
  about: AboutPage | {};
  whyWeInvest: WhyWeInvestPage | {};
  companies: CompaniesPage | {};
  defaultPage: DefaultPage | {};
} = {
  home: {},
  about: {},
  whyWeInvest: {},
  companies: {},
  defaultPage: {},
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
  FETCH_DEFAULT_PAGE_FULFILLED: (state, action) => ({
    ...state,
    defaultPage: action.payload,
  }),
});
