import { RECEIVE_USERLOGIN, RECEIVE_USERLOGOUT, RECEIVE_MAPUSER } from '../actions/actions_user';
export const obj = {status: false};

export default (state = obj, action) => {
    switch (action.type) {
        case RECEIVE_USERLOGIN:
            var user = Object.assign({}, action.obj.user.obj);
            var list = Object.assign({}, action.obj.list.user_list);
            /* console.log('user', user);
            console.log('list', list); */
            if (list !== null && list !== undefined) {
                for (let key in list) {
                    let obj = list[key];
                    let email = obj.email === user.email;
                    let password = obj.password === user.password;
                    /* console.log('email', email);
                    console.log('password', password); */
                    // trung ten,size,color
                    if (email && password) {
                        save({status: true, obj});
                        return {status: true, obj};
                    }
                }
            }
            save({status: true, obj});
            return {status: false};
        case RECEIVE_USERLOGOUT:
            return {status: false};
        case RECEIVE_MAPUSER:
            if (typeof (Storage) !== 'undefined') {
                let user = localStorage.getItem('user');
                console.log('day la local', user);
                return {...JSON.parse(user)};
            } else {
                document.write('Trình duyệt của bạn không hỗ trợ local storage');
                return state;
            }
        default:
            return state;
    }
};

function save (user) {
    if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
    } else {
        document.write('Trình duyệt của bạn không hỗ trợ local storage');
    }
}
