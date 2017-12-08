import { combineReducers } from 'redux';
import data from './data';
import counter from './counter';
import cart from './addToCart';
import user from './userReducer';
import {dashboard, dashboard2, dashboard3} from './dashboardReducer';
export default combineReducers({
    data,
    counter,
    cart,
    user,
    dashboard,
    dashboard2,
    dashboard3
});
