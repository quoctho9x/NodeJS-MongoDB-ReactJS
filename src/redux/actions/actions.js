export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
export const REQUEST_COUNTER = 'REQUEST_COUNTER';
export const RECEIVE_COUNTER = 'RECEIVE_COUNTER';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
export const requestCounter = value => ({ type: REQUEST_COUNTER, value });
export const receiveCounter = counter => ({ type: RECEIVE_COUNTER, counter });
