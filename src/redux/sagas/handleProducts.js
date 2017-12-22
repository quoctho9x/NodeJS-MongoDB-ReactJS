import { call, put, select, take } from 'redux-saga/effects';
import { receiveGetProducts } from '../actions/action_products';
import { fetchProducts } from '../fetch_api/api_products';

export function * getProductsList (action) {
    try {
        const products = yield call(fetchProducts);
        yield put(receiveGetProducts({total: products.fullList.length, products: products.fullList}));
    } catch (error) {
        yield put({type: 'FAILED_CLEAR_NOTIFICATON', error: error.message});
    }
}
