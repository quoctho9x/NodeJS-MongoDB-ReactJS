export const REQUEST_USERLOGIN = 'REQUEST_USERLOGIN';
export const RECEIVE_USERLOGIN = 'RECEIVE_USERLOGIN';

export const REQUEST_USERLOGOUT = 'REQUEST_USERLOGOUT';
export const RECEIVE_USERLOGOUT = 'RECEIVE_USERLOGOUT';

export const REQUEST_MAPUSER = 'REQUEST_MAPUSER';
export const RECEIVE_MAPUSER = 'RECEIVE_MAPUSER';

export const REQUEST_USERUPDATE = 'REQUEST_USERUPDATE';
export const RECEIVE_USERUPDATE = 'RECEIVE_USERUPDATE';

export const REQUEST_ORDEROFUSER = 'REQUEST_ORDEROFUSER';
export const RECEIVE_ORDEROFUSER = 'RECEIVE_ORDEROFUSER';

export const requestUserlogin = obj => ({ type: REQUEST_USERLOGIN, obj });
export const receiveUserlogin = obj => ({ type: RECEIVE_USERLOGIN, obj });

export const requestUserlogout = () => ({ type: REQUEST_USERLOGOUT });
export const receiveUserlogout = () => ({ type: RECEIVE_USERLOGOUT });

export const requestMapuser = (obj) => ({ type: REQUEST_MAPUSER, obj });
export const receiveMapuser = (obj) => ({ type: RECEIVE_MAPUSER, obj });

export const requestUserUpdate = (obj) => ({ type: REQUEST_USERUPDATE, obj });
export const receiveUserUpdate = (obj) => ({ type: RECEIVE_USERUPDATE, obj });

export const requestOrderOfUse = () => ({ type: REQUEST_ORDEROFUSER });
export const receiveOrderOfUse = obj => ({ type: RECEIVE_ORDEROFUSER, obj });
