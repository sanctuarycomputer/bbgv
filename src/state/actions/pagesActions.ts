import { createPromiseAction, action } from 'lib/action';
import { HomePage } from 'lib/cms/types';
import ApiClient from 'lib/cms/ApiClient';

export const fetchHomeActions = createPromiseAction(
  'FETCH_HOME_PENDING',
  'FETCH_HOME_FULFILLED',
  'FETCH_HOME_REJECTED'
)<HomePage, Error>();
export const fetchHome = () => action(fetchHomeActions, ApiClient.fetchHome());

export default {
  fetchHomeActions,
};
