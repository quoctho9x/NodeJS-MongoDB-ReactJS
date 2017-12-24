import { REQUEST_GETPRODUCTS, RECEIVE_GETPRODUCTS } from '../actions/action_products';
export const obj = {status: false};

export default (state = obj, action) => {
    switch (action.type) {
        case REQUEST_GETPRODUCTS:
            return { loading: true };
        case RECEIVE_GETPRODUCTS:
            var products = Object.assign({}, action.obj);
            /* console.log('day la products', products) */
            /* console.log('thong bao da clear'); */
            return {status: true, ...products};
        default:
            return state;
    }
};
