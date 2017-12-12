import { call, put, select, take } from 'redux-saga/effects';
import { receiveUserlogin, receiveUserlogout, receiveMapuser } from '../actions/actions_user';
import {fetchUserData} from '../fetch_api/api';

export function * getuserstorage () {
    try {
        yield put(receiveMapuser());
    } catch (error) {
        yield put({type: 'FAILED_MAPUSER', error: error.message});
    }
}
export function * userlogin (action) {
    try {
        const User_array = yield call(fetchUserData);
        yield put(receiveUserlogin({list: User_array, user: action}));
    } catch (error) {
        yield put({type: 'FAILED_USERLOGIN', error: error.message});
    }
}
export function * userlogout (action) {
    try {
        yield put(receiveUserlogout());
    } catch (error) {
        yield put({type: 'FAILED_USERLOGOUT', error: error.message});
    }
}
