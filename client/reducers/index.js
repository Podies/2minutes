import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import modals from './modals';
import activeUser from './activeUser';



const rootReducer = combineReducers({ modals, activeUser, routing: routerReducer });
export default rootReducer;