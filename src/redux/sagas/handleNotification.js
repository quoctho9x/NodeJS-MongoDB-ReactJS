import { call, put, select, take } from 'redux-saga/effects';
import { receiveUserNoti, receiveNotiClear } from '../actions/action_notification';

export function * clearNotification (action) {
    try {
        yield put(receiveNotiClear());
    } catch (error) {
        yield put({type: 'FAILED_CLEAR_NOTIFICATON', error: error.message});
    }
}