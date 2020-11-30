import { createPromiseAction, action } from 'lib/action';
import { HomePage, AboutPage, WhyWeInvestPage, CompaniesPage } from 'lib/cms/types';
import ApiClient from 'lib/cms/ApiClient';

export const fetchHomeActions = createPromiseAction(
  'FETCH_HOME_PENDING',
  'FETCH_HOME_FULFILLED',
  'FETCH_HOME_REJECTED'
)<HomePage, Error>();
export const fetchHome = () => action(fetchHomeActions, ApiClient.fetchHome());

export const fetchAboutPageActions = createPromiseAction(
  'FETCH_ABOUT_PAGE_PENDING',
  'FETCH_ABOUT_PAGE_FULFILLED',
  'FETCH_ABOUT_PAGE_REJECTED'
)<AboutPage, Error>();
export const fetchAboutPage = () => action(fetchAboutPageActions, ApiClient.fetchAboutPage());

export const fetchWhyWeInvestPageActions = createPromiseAction(
  'FETCH_WHY_WE_INVEST_PAGE_PENDING',
  'FETCH_WHY_WE_INVEST_PAGE_FULFILLED',
  'FETCH_WHY_WE_INVEST_PAGE_REJECTED'
)<WhyWeInvestPage, Error>();
export const fetchWhyWeInvestPage = () =>
  action(fetchWhyWeInvestPageActions, ApiClient.fetchWhyWeInvestPage());

export const fetchCompaniesPageActions = createPromiseAction(
  'FETCH_COMPANIES_PAGE_PENDING',
  'FETCH_COMPANIES_PAGE_FULFILLED',
  'FETCH_COMPANIES_PAGE_REJECTED'
)<CompaniesPage, Error>();
export const fetchCompaniesPage = () =>
  action(fetchCompaniesPageActions, ApiClient.fetchCompaniesPage());

export default {
  fetchHomeActions,
  fetchAboutPageActions,
  fetchWhyWeInvestPageActions,
  fetchCompaniesPageActions,
};
