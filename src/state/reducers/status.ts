import { createReducer } from 'typesafe-actions';
import { Status } from 'types';
import { put } from 'state/reducers/utils';

const initialState: {
  initializeApplication: Status;
} = {
  initializeApplication: Status.IDLE,
};

export default createReducer(initialState, {
  INITIALIZE_APPLICATION_PENDING: put('initializeApplication', Status.PENDING),
  INITIALIZE_APPLICATION_FULFILLED: put('initializeApplication', Status.FULFILLED),
  INITIALIZE_APPLICATION_REJECTED: put('initializeApplication', Status.REJECTED),
});
