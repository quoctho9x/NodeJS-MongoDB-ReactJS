import { call, put, select, take } from 'redux-saga/effects';
import { receiveUserlogin, receiveUserlogout, receiveMapuser, requestMapuser } from '../actions/actions_user';
import {fetchUserData, fetchUserToken} from '../fetch_api/api';
import {setCookie, getCookie, checkCookie} from '../../services/cookie';

export function * requestuserfromtoken () {
    try {
        yield put(requestMapuser());
    } catch (error) {
        yield put({type: 'FAILED_REQUEST_MAPUSER', error: error.message});
    }
}
export function * getuserfromtoken () {
    try {
        let token = getCookie('user');
        /* console.log('token', token); */
        if (token) {
            /* console.log('token'); */
            const fetch_user = yield call(fetchUserToken, token);
            yield put(receiveMapuser(fetch_user));
        } else {
            /* console.log('deo co token', token); */
            yield put(receiveMapuser(false));
        }
    } catch (error) {
        yield put({type: 'FAILED_MAPUSER', error: error.message});
    }
}
export function * userlogin (action) {
    try {
        /*  console.log('user login handle user', action.obj); */
        const User_login = yield call(fetchUserData, action.obj);
        yield put(receiveUserlogin({user: User_login}));
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
