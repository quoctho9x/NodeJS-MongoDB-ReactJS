import { call, put, select, take } from 'redux-saga/effects';
import { receiveAddtocart, receiveUpdateitemcart, receiveRemoveitemcart, receiveMapstoragetostore } from '../actions/action_addtocart';
import { receiveUserNoti, receiveNotiClear } from '../actions/action_notification';
export function * getstorage () {
    try {
        yield put(receiveMapstoragetostore());
    } catch (error) {
        yield put({type: 'FETCH_FAILED_1', error: error.message});
    }
}
export function * addToCart (action) {
    try {
        yield put(receiveAddtocart(action.obj));
        yield put(receiveUserNoti({show: true, smg: 'Add item to cart success', type: 'success'}));
    } catch (error) {
        yield put({type: 'FETCH_FAILED_2', error: error.message});
    }
}
export function * updateitemcart (action) {
    try {
        yield put(receiveUpdateitemcart(action.obj));
    } catch (error) {
        yield put({type: 'FETCH_FAILED_3', error: error.message});
    }
}
export function * removeitemcart (action) {
    try {
        yield put(receiveRemoveitemcart(action.obj));
        yield put(receiveUserNoti({show: true, smg: 'Remove item to cart success', type: 'info'}));
    } catch (error) {
        yield put({type: 'FETCH_FAILED_4', error: error.message});
    }
}
