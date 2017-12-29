import { REQUEST_GETPRODUCTS, RECEIVE_GETPRODUCTS, REQUEST_GETALLPRODUCTS, RECEIVE_GETALLPRODUCTS } from '../actions/action_products';
export const obj = {loading: true};

export default (state = obj, action) => {
    switch (action.type) {
        case REQUEST_GETPRODUCTS:
            return { loading: true };
        case RECEIVE_GETPRODUCTS:
            var products = Object.assign({}, action.obj);
            /* console.log('day la products', products) */
            /* console.log('thong bao da clear'); */
            return {...state, loading: false, product: {status: true, ...products}};
        case REQUEST_GETALLPRODUCTS:
            return { loading: true };
        case RECEIVE_GETALLPRODUCTS:
            var all = Object.assign({}, action.obj);
            /* console.log('day la products', products) */
            /* console.log('thong bao da clear'); */
            return {...state, loading: false, all: {status: true, ...all}};
        default:
            return state;
    }
};
