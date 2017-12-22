import { REQUEST_USERLOGIN, RECEIVE_USERLOGIN, RECEIVE_USERLOGOUT, REQUEST_USERLOGOUT, REQUEST_MAPUSER, RECEIVE_MAPUSER } from '../actions/actions_user';
import {setCookie, getCookie, checkCookie} from '../../services/cookie';
export const obj = {status: false};

export default (state = obj, action) => {
    switch (action.type) {
        case REQUEST_USERLOGIN:
            return { loading: true };
        case RECEIVE_USERLOGIN:
            var user = Object.assign({}, action.obj.user);
            /*console.log('user login ne', user);*/
            if (user.success) {
                /* console.log('dang nhap thanh cong'); */
                setCookie('user', user.token, user.expiresIn);
                return {status: true, user: user.user};
            }
            /* console.log('dang nhap that bai');
             save({status: false}); */
            return {status: false};
        case REQUEST_USERLOGOUT:
            return { loading: true };
        case RECEIVE_USERLOGOUT:
            setCookie('user', '', 0);
            return {status: false};
        case REQUEST_MAPUSER:
            /* console.log('day la requset true nhe'); */
            return { loading: true };
        case RECEIVE_MAPUSER:
            var user = Object.assign({}, action.obj.data);
            /* console.log('day la user', user); */
            if (Object.keys(user).length !== 0 && user.constructor === Object) {
                console.log('LOGIN chao ban tro lai reduces');
                return {status: true, user: user};
            }
            console.log('LOGIN chua thay hoac het time reduces');
            return {status: false};
        default:
            return state;
    }
};
