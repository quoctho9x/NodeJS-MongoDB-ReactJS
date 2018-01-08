import { REQUEST_GETNEWS, RECEIVE_GETNEWS, REQUEST_GETALLNEWS, RECEIVE_GETALLNEWS } from '../actions/action_news';
export const obj = {loading: true};

export default (state = obj, action) => {
    switch (action.type) {
        case REQUEST_GETNEWS:
            return { loading: true };
        case RECEIVE_GETNEWS:
            var news = Object.assign({}, action.obj);
            /* console.log('day la products', products) */
            /* console.log('thong bao da clear'); */
            return {...state, loading: false, news: {status: true, ...news}};
        case REQUEST_GETALLNEWS:
            return { loading: true };
        case RECEIVE_GETALLNEWS:
            var all = Object.assign({}, action.obj);
            /* console.log('thong bao da clear'); */
            return {...state, loading: false, all: {status: true, ...all}};
        default:
            return state;
    }
};
