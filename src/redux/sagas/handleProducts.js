import { call, put, select, take } from 'redux-saga/effects';
import { receiveGetProducts, receiveGetAllProducts } from '../actions/action_products';
import { fetchProducts, fetchAllProducts } from '../fetch_api/api_products';

export function * getProductsList (action) {
    try {
        const products = yield call(fetchProducts);
        yield put(receiveGetProducts({total: products.products_list.length, products: products.products_list}));
    } catch (error) {
        yield put({type: 'FAILED_GET_PRODUCTS', error: error.message});
    }
}
export function * getAllProducts (action) {
    try {
        const products = yield call(fetchAllProducts);
        yield put(receiveGetAllProducts({total: products.payload.length, products: products.payload}));
    } catch (error) {
        yield put({type: 'FAILED_GET_ALL_PRODUCTS', error: error.message});
    }
}
