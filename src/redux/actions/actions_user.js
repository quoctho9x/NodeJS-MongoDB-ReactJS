export const REQUEST_USERLOGIN = 'REQUEST_USERLOGIN';
export const RECEIVE_USERLOGIN = 'RECEIVE_USERLOGIN';

export const REQUEST_USERLOGOUT = 'REQUEST_USERLOGOUT';
export const RECEIVE_USERLOGOUT = 'RECEIVE_USERLOGOUT';

export const REQUEST_MAPUSER = 'REQUEST_MAPUSER';
export const RECEIVE_MAPUSER = 'RECEIVE_MAPUSER';

export const requestUserlogin = obj => ({ type: REQUEST_USERLOGIN, obj });
export const receiveUserlogin = obj => ({ type: RECEIVE_USERLOGIN, obj });

export const requestUserlogout = () => ({ type: REQUEST_USERLOGOUT });
export const receiveUserlogout = () => ({ type: RECEIVE_USERLOGOUT });

export const requestMapuser = (obj) => ({ type: REQUEST_MAPUSER, obj });
export const receiveMapuser = (obj) => ({ type: RECEIVE_MAPUSER, obj });
