import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import { receiveApiData, receiveCounter } from '../actions/actions';
import {fetchData} from '../fetch_api/api';
import {loadUser} from './loadUser';
import { loadDashboardSequenced } from './loadDashboardSequenced';
import { loadDashboardNonSequenced } from './loadDashboardNonSequenced';
import { loadDashboardNonSequencedNonBlocking, isolatedForecast, isolatedFlight } from './loadDashboardNonSequencedNonBlocking';
import { addToCart, updateitemcart, removeitemcart, getstorage } from './addToCart';
import { userlogin, userlogout, getuserfromtoken, requestuserfromtoken } from './handleUser';
import { clearNotification } from './handleNotification';
import { getProductsList, getAllProducts } from './handleProducts';
import { getAllNews } from './handleNews';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * getApiData (action) {
    try {
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}
function * counter (action) {
    try {
        yield put(receiveCounter(action.value));
    } catch (e) {
        console.log(e);
    }
}

// the 'watcher' - every action, run our side effect
export default function * mySaga () {
    yield fork(getApiData);
    yield fork(getstorage);
    yield takeLatest('REQUEST_COUNTER', counter);
    yield takeLatest('REQUEST_ADDTOCART', addToCart);
    yield takeLatest('REQUEST_UPDATEITEMCART', updateitemcart);
    yield takeLatest('REQUEST_REMOVEITEMCART', removeitemcart);
    /* The saga is waiting for a action called LOAD_DASHBOARD to be activated */
    yield [
        fork(loadUser),
        takeEvery('LOAD_DASHBOARD', loadDashboardSequenced),
        takeEvery('LOAD_DASHBOARD_NON_SEQUENCED', loadDashboardNonSequenced),
        takeEvery('LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING', loadDashboardNonSequencedNonBlocking),
        fork(isolatedForecast),
        fork(isolatedFlight)
    ];
    /* user login */
    yield fork(requestuserfromtoken);// request use
    yield fork(getuserfromtoken);// get user after request
    yield takeLatest('REQUEST_USERLOGIN', userlogin);
    yield takeLatest('REQUEST_USERLOGOUT', userlogout);
    /* notification */
    yield takeLatest('REQUEST_NOTICLEAR', clearNotification);// request use
    /* products */
    yield takeEvery('REQUEST_GETALLPRODUCTS', getAllProducts);
    yield takeEvery('REQUEST_GETPRODUCTS', getProductsList);// request use
    /* News */
    yield takeEvery('REQUEST_GETALLNEWS', getAllNews);
    /*  yield takeEvery('REQUEST_GETPRODUCTS', getProductsList);// request use */
}
