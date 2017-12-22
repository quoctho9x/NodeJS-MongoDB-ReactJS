import { RECEIVE_USER_NOTI, REQUEST_USER_NOTI, RECEIVE_NOTICLEAR } from '../actions/action_notification';
export const obj = {status: false};

export default (state = obj, action) => {
    switch (action.type) {
        case RECEIVE_USER_NOTI:
            var notification = Object.assign({}, action.obj);
            /* console.log('thong bao ', notification); */
            return { status: true, notification };
        case RECEIVE_NOTICLEAR:
           /* console.log('thong bao da clear');*/
            return { status: false };
        default:
            return state;
    }
};
