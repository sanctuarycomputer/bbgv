import { createPromiseAction, action } from 'lib/action';
import { HomePage, AboutPage } from 'lib/cms/types';
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

export default {
  fetchHomeActions,
  fetchAboutPageActions,
};
