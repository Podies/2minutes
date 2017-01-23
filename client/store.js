import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const defaultState = {};

defaultState.activeUser = window.__INITIAL_STATE__ ? window.__INITIAL_STATE__.activeUser : null;

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;