import { REQUEST_USERLOGIN, RECEIVE_USERLOGIN, RECEIVE_USERLOGOUT, REQUEST_USERLOGOUT, REQUEST_MAPUSER, RECEIVE_MAPUSER, REQUEST_USERUPDATE, RECEIVE_USERUPDATE } from '../actions/actions_user';
import {setCookie, getCookie, checkCookie} from '../../services/cookie';
export const obj = {status: false};

export default (state = obj, action) => {
    switch (action.type) {
        case REQUEST_USERLOGIN:
            return { loading: true };
        case RECEIVE_USERLOGIN:
            var user = Object.assign({}, action.obj.user);
            /* console.log('user login ne', user); */
            if (user.success) {
                // console.log('dang nhap thanh cong');
                setCookie('user', user.token, user.expiresIn);// server set is 3600(1hour)
                return {status: true, user: user.user};
            }
            // console.log('dang nhap that bai');
            return {status: false};
        case REQUEST_USERLOGOUT:
            return { loading: true };
        case RECEIVE_USERLOGOUT:
            setCookie('user', '', 0);
            return {status: false};
        case REQUEST_MAPUSER:
            return { loading: true };
        case RECEIVE_MAPUSER:
            var user = Object.assign({}, action.obj.data);
            // console.log('day la user', user);
            if (Object.keys(user).length !== 0 && user.constructor === Object) {
                console.log('LOGIN chao ban tro lai reduces');
                return {status: true, user: user};
            }
            console.log('LOGIN chua thay hoac het time reduces');
            return {status: false};
        case REQUEST_USERUPDATE:
            // console.log('day la user', user);
            return { loading: true };
        case RECEIVE_USERUPDATE:
            var user_update = Object.assign({}, action.obj.user);
            // console.log('user reducers', user_update);
            return {status: true, user: user_update};
        default:
            return state;
    }
};
