export const REQUEST_USER_NOTI = 'REQUEST_USER_NOTI';
export const RECEIVE_USER_NOTI = 'RECEIVE_USER_NOTI';

export const REQUEST_NOTICLEAR = 'REQUEST_NOTICLEAR';
export const RECEIVE_NOTICLEAR = 'RECEIVE_NOTICLEAR';

export const requestUserNoti = obj => ({ type: REQUEST_USER_NOTI, obj });
export const receiveUserNoti = obj => ({ type: RECEIVE_USER_NOTI, obj });

export const requestNotiClear = () => ({ type: REQUEST_NOTICLEAR });
export const receiveNotiClear = () => ({ type: RECEIVE_NOTICLEAR });
