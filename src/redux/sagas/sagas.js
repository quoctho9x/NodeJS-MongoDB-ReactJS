import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import {REQUEST_API_DATA, receiveApiData, REQUEST_COUNTER, receiveCounter} from '../actions/actions';
// import { REQUEST_ADDTOCART, requestAddtocart, RECEIVE_ADDTOCART, receiveAddtocart } from '../actions/action_addtocart';
import {fetchData} from '../fetch_api/api';
import {loadUser} from './loadUser';
import { loadDashboardSequenced } from './loadDashboardSequenced';
import { loadDashboardNonSequenced } from './loadDashboardNonSequenced';
import { loadDashboardNonSequencedNonBlocking, isolatedForecast, isolatedFlight } from './loadDashboardNonSequencedNonBlocking';
import { addToCart, updateitemcart, removeitemcart } from './addToCart';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * getApiData (action) {
    try {
       // console.log('api data');
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}
function * counter (action) {
    try {
        // const data = yield call(fetchData);
        yield put(receiveCounter(action.value));
    } catch (e) {
        console.log(e);
    }
}

// the 'watcher' - on every 'API_BUTTON_CLICK' action, run our side effect
export default function * mySaga () {
    yield fork(getApiData);
    yield takeLatest(REQUEST_COUNTER, counter);
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
}
