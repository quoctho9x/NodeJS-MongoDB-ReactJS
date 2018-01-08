export const REQUEST_GETNEWS = 'REQUEST_GETNEWS';
export const RECEIVE_GETNEWS = 'RECEIVE_GETNEWS';
export const REQUEST_GETALLNEWS = 'REQUEST_GETALLNEWS';
export const RECEIVE_GETALLNEWS = 'RECEIVE_GETALLNEWS';

export const requestGetNews = () => ({ type: REQUEST_GETNEWS });
export const receiveGetNews = obj => ({ type: RECEIVE_GETNEWS, obj });

export const requestGetAllNews = () => ({ type: REQUEST_GETALLNEWS });
export const receiveGetAllNews = obj => ({ type: RECEIVE_GETALLNEWS, obj });
