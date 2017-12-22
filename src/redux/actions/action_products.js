export const REQUEST_GETPRODUCTS = 'REQUEST_GETPRODUCTS';
export const RECEIVE_GETPRODUCTS = 'RECEIVE_GETPRODUCTS';

export const requestGetProducts = () => ({ type: REQUEST_GETPRODUCTS });
export const receiveGetProducts = obj => ({ type: RECEIVE_GETPRODUCTS, obj });
