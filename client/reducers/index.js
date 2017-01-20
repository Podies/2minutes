import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import modals from './modals';
import activeUser from './activeUser';
import userQuestions from './userQuestions';

const rootReducer = combineReducers({ modals, activeUser, userQuestions, routing: routerReducer });
export default rootReducer;