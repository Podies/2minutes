import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import modals from './modals';



const rootReducer = combineReducers({ modals, routing: routerReducer });
export default rootReducer;