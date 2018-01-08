import { call, put, select, take } from 'redux-saga/effects';
import { receiveGetNews, receiveGetAllNews } from '../actions/action_news';
import { fetchNews, fetchAllNews } from '../fetch_api/api_news';

/* export function * getNewsList (action) {
    try {
        const products = yield call(fetchProducts);
        yield put(receiveGetProducts({total: products.products_list.length, products: products.products_list}));
    } catch (error) {
        yield put({type: 'FAILED_GET_PRODUCTS', error: error.message});
    }
} */
export function * getAllNews (action) {
    try {
        const news = yield call(fetchAllNews);
        yield put(receiveGetAllNews({total: news.payload.length, news: news.payload}));
    } catch (error) {
        yield put({type: 'FAILED_GET_ALL_NEWS', error: error.message});
    }
}
