export const REQUEST_GETPRODUCTS = 'REQUEST_GETPRODUCTS';
export const RECEIVE_GETPRODUCTS = 'RECEIVE_GETPRODUCTS';
export const REQUEST_GETALLPRODUCTS = 'REQUEST_GETALLPRODUCTS';
export const RECEIVE_GETALLPRODUCTS = 'RECEIVE_GETALLPRODUCTS';

export const requestGetProducts = () => ({ type: REQUEST_GETPRODUCTS });
export const receiveGetProducts = obj => ({ type: RECEIVE_GETPRODUCTS, obj });

export const requestGetAllProducts = () => ({ type: REQUEST_GETALLPRODUCTS });
export const receiveGetAllProducts = obj => ({ type: RECEIVE_GETALLPRODUCTS, obj });
