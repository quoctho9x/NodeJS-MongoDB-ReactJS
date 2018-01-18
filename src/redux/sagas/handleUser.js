import { call, put, select, take } from 'redux-saga/effects';
import { receiveUserlogin, receiveUserlogout, receiveMapuser, requestMapuser, requestUserUpdate, receiveUserUpdate } from '../actions/actions_user';
import { receiveUserNoti, receiveNotiClear } from '../actions/action_notification';
import {fetchUserData, fetchUserToken, fetchUpdateUser} from '../fetch_api/api';
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
            yield put(receiveUserNoti({show: true, smg: 'Hi: ' + fetch_user.data.email + ' come back!', type: 'success'}));
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
        const User_login = yield call(fetchUserData, action.obj);
        const user = User_login.data;
        if (user.success) {
            yield put(receiveUserlogin({user: user}));
            /* console.log('dang nhap thanh cong', user); */
            yield put(receiveUserNoti({show: true, smg: 'wellcome: ' + user.user.email, type: 'success'}));
        } else {
            yield put(receiveUserlogin({user: user}));
            /* console.log('dang nhap that bai', user); */
            yield put(receiveUserNoti({show: true, smg: user.message, type: 'error'}));
        }
    } catch (error) {
        yield put({type: 'FAILED_USERLOGIN', error: error.message});
    }
}
export function * userUpdate (action) {
    try {
        const User_update = yield call(fetchUpdateUser, action.obj);
        const user = User_update.payload;
        yield put(receiveUserUpdate({user: user}));
        yield put(receiveUserNoti({show: true, smg: 'Cập nhật thành công!', type: 'success'}));
    } catch (error) {
        yield put({type: 'FAILED_USERUPDATE', error: error.message});
    }
}
export function * userlogout (action) {
    try {
        yield put(receiveUserlogout());
        yield put(receiveUserNoti({show: true, smg: 'Goodbye see you again! ', type: 'info'}));
    } catch (error) {
        yield put({type: 'FAILED_USERLOGOUT', error: error.message});
    }
}
