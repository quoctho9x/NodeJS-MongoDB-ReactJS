import { call, put, select, take } from 'redux-saga/effects';
import { receiveAddtocart, receiveUpdateitemcart, receiveRemoveitemcart } from '../actions/action_addtocart';

export function * addToCart (action) {
    try {
        yield put(receiveAddtocart(action.obj));
    } catch (error) {
        yield put({type: 'FETCH_FAILED', error: error.message});
    }
}
export function * updateitemcart (action) {
    try {
        yield put(receiveUpdateitemcart(action.obj));
    } catch (error) {
        yield put({type: 'FETCH_FAILED', error: error.message});
    }
}
export function * removeitemcart (action) {
    try {
        yield put(receiveRemoveitemcart(action.obj));
    } catch (error) {
        yield put({type: 'FETCH_FAILED', error: error.message});
    }
}
