import { createPromiseAction, action } from 'lib/action';

import {
  HomePage,
  AboutPage,
  WhyWeInvestPage,
  CompaniesPage,
  DefaultPage,
  CompanyDetailPage,
} from 'lib/cms/types';

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

export const fetchDefaultPageActions = createPromiseAction(
  'FETCH_DEFAULT_PAGE_PENDING',
  'FETCH_DEFAULT_PAGE_FULFILLED',
  'FETCH_DEFAULT_PAGE_REJECTED'
)<DefaultPage, Error>();
export const fetchDefaultPage = (slug: string) =>
  action(fetchDefaultPageActions, ApiClient.fetchDefaultPage(slug));

export const fetchCompanyDetailPageActions = createPromiseAction(
  'FETCH_COMPANY_DETAIL_PAGE_PENDING',
  'FETCH_COMPANY_DETAIL_PAGE_FULFILLED',
  'FETCH_COMPANY_DETAIL_PAGE_REJECTED'
)<CompanyDetailPage, Error>();
export const fetchCompanyDetailPage = (slug: string) =>
  action(fetchCompanyDetailPageActions, ApiClient.fetchCompanyDetailPage(slug));

export default {
  fetchHomeActions,
  fetchAboutPageActions,
  fetchWhyWeInvestPageActions,
  fetchCompaniesPageActions,
  fetchDefaultPageActions,
  fetchCompanyDetailPageActions,
};
