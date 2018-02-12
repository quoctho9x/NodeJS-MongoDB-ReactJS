import { call, put, select, take } from 'redux-saga/effects';
import { receiveAddtocart, receiveUpdateitemcart, receiveRemoveitemcart, receiveMapstoragetostore, receiveOrderCart } from '../actions/action_addtocart';
import { receiveUserNoti, receiveNotiClear } from '../actions/action_notification';
import {fetchOrderCart} from '../fetch_api/api_cart';


export function * getstorage () {
    try {
        yield put(receiveMapstoragetostore());
    } catch (error) {
        yield put({type: 'FETCH_FAILED_GETSTORAGE', error: error.message});
    }
}
export function * addToCart (action) {
    try {
        yield put(receiveAddtocart(action.obj));
        yield put(receiveUserNoti({show: true, smg: 'Add item to cart success', type: 'success'}));
    } catch (error) {
        yield put({type: 'FETCH_FAILED_ADDTOCART', error: error.message});
    }
}
export function * updateitemcart (action) {
    try {
        yield put(receiveUpdateitemcart(action.obj));
    } catch (error) {
        yield put({type: 'FETCH_FAILED_UPDATECART', error: error.message});
    }
}
export function * ordercart (action) {
    try {
        const cart_order = yield call(fetchOrderCart, action.obj);
        yield put(receiveOrderCart(cart_order.payload));
        yield put(receiveUserNoti({show: true, smg: 'Đặt hàng thành công', type: 'success'}));
    } catch (error) {
        yield put({type: 'FETCH_FAILED_ORDERCART', error: error.message});
    }
}
export function * removeitemcart (action) {
    try {
        yield put(receiveRemoveitemcart(action.obj));
        yield put(receiveUserNoti({show: true, smg: 'Xóa sản phẩm khỏi giỏ hàng', type: 'info'}));
    } catch (error) {
        yield put({type: 'FETCH_FAILED_REMOVEITEMCART', error: error.message});
    }
}
