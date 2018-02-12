export const REQUEST_ADDTOCART = 'REQUEST_ADDTOCART';
export const RECEIVE_ADDTOCART = 'RECEIVE_ADDTOCART';
export const REQUEST_UPDATEITEMCART = 'REQUEST_UPDATEITEMCART';
export const RECEIVE_UPDATEITEMCART = 'RECEIVE_UPDATEITEMCART';

export const REQUEST_REMOVEITEMCART = 'REQUEST_REMOVEITEMCART';
export const RECEIVE_REMOVEITEMCART = 'RECEIVE_REMOVEITEMCART';

export const REQUEST_MAPSTORAGETOSTORE = 'REQUEST_MAPSTORAGETOSTORE';
export const RECEIVE_MAPSTORAGETOSTORE = 'RECEIVE_MAPSTORAGETOSTORE';

export const REQUEST_ORDERCART = 'REQUEST_ORDERCART';
export const RECEIVE_ORDERCART = 'RECEIVE_ORDERCART';


export const requestAddtocart = obj => ({ type: REQUEST_ADDTOCART, obj });
export const receiveAddtocart = obj => ({ type: RECEIVE_ADDTOCART, obj });

export const requestUpdateitemcart = obj => ({ type: REQUEST_UPDATEITEMCART, obj });
export const receiveUpdateitemcart = obj => ({ type: RECEIVE_UPDATEITEMCART, obj });

export const requestRemoveitemcart = obj => ({ type: REQUEST_REMOVEITEMCART, obj });
export const receiveRemoveitemcart = obj => ({ type: RECEIVE_REMOVEITEMCART, obj });

export const requestMapstoragetostore = () => ({ type: REQUEST_MAPSTORAGETOSTORE });
export const receiveMapstoragetostore = () => ({ type: RECEIVE_MAPSTORAGETOSTORE });

export const requestOrderCart = obj => ({ type: REQUEST_ORDERCART, obj });
export const receiveOrderCart = obj => ({ type: RECEIVE_ORDERCART, obj });