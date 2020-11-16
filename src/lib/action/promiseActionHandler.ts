import { promiseActionHandlerFactory } from 'lib/action/promiseAction';

export default promiseActionHandlerFactory((action, state) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Promise Rejected: ${action.type}`, action.payload);
  }
});
