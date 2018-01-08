import { combineReducers } from 'redux';
import data from './data';
import products from './handleProducts';
import news from './handleNews';
import notification from './handleNotification';
import counter from './counter';
import cart from './addToCart';
import user from './userReducer';
import inforUser from './handleUser';
import {dashboard, dashboard2, dashboard3} from './dashboardReducer';
export default combineReducers({
    data,
    products,
    news,
    notification,
    counter,
    cart,
    user,
    dashboard,
    dashboard2,
    dashboard3,
    inforUser
});
