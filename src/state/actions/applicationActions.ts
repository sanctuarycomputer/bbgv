import { createPromiseAction, action } from 'lib/action';
import { ThunkResult } from 'types';

import { GlobalSettings } from 'lib/cms/types';
import ApiClient from 'lib/cms/ApiClient';

const initializeApplicationActions = createPromiseAction(
  'INITIALIZE_APPLICATION_PENDING',
  'INITIALIZE_APPLICATION_FULFILLED',
  'INITIALIZE_APPLICATION_REJECTED'
)<'ok', Error>();
export const intializeApplication = (): ThunkResult<Promise<'ok'>> => (dispatch) =>
  dispatch(
    action(
      initializeApplicationActions,
      Promise.all([dispatch(fetchGlobalSettings())]).then(() => 'ok') as Promise<'ok'>
    )
  );

const fetchGlobalSettingsActions = createPromiseAction(
  'FETCH_GLOBAL_SETTINGS_PENDING',
  'FETCH_GLOBAL_SETTINGS_FULFILLED',
  'FETCH_GLOBAL_SETTINGS_REJECTED'
)<GlobalSettings, Error>();
export const fetchGlobalSettings = (): ThunkResult<Promise<GlobalSettings>> => (dispatch) => {
  return dispatch(action(fetchGlobalSettingsActions, ApiClient.fetchGlobalSettings()));
};

export default {
  initializeApplicationActions,
  fetchGlobalSettingsActions,
};
