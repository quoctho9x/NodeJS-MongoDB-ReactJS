import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {REQUEST_API_DATA, receiveApiData, REQUEST_COUNTER, receiveCounter} from './actions/actions';
import {fetchData} from './fetch_api/api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData (action) {
    try {
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}
function* counter (action) {
    try {
        //const data = yield call(fetchData);
        yield put(receiveCounter(action.value));
    } catch (e) {
        console.log(e);
    }
}

// the 'watcher' - on every 'API_BUTTON_CLICK' action, run our side effect
export default function* mySaga () {
    yield takeLatest(REQUEST_API_DATA, getApiData);
    yield takeLatest(REQUEST_COUNTER, counter);
}
