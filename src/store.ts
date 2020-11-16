import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import createRootReducer from 'state/reducers';

export const history = createBrowserHistory();
export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
);

export const persistor = persistStore(store);
