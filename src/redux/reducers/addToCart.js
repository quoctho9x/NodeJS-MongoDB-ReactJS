import { RECEIVE_ADDTOCART, RECEIVE_UPDATEITEMCART, RECEIVE_REMOVEITEMCART, RECEIVE_MAPSTORAGETOSTORE } from '../actions/action_addtocart';
export const obj = [];

export default (state = obj, action) => {
    switch (action.type) {
        case RECEIVE_ADDTOCART:
            var item = Object.assign({}, action.obj);
            if (state.length > 0) {
                for (let key in state) {
                    let obj = state[key];
                    let find_Name = obj.index === item.index;
                    let find_Color = obj.color === item.color;
                    let find_Size = obj.size === item.size;
                    /* console.log('size', find_Size);
                    console.log('obj.size ', obj.size);
                    console.log('item.size', item.size); */
                    // trung ten,size,color
                    if (find_Name && find_Color && find_Size) {
                        obj.quantity += 1;
                        save([...state]);
                        return [...state];
                    }
                }
            }
            save([...state, item]);
            return [...state, item];
        case RECEIVE_UPDATEITEMCART:
            var item = action.obj.item, value = action.obj.value;
            item.quantity = parseInt(value);
            /* var index_array = state.findIndex(x => x.index === item.index); */
            save([...state]);
            return [...state];
        case RECEIVE_REMOVEITEMCART:
            var item = Object.assign({}, action.obj.item);
            // trung ten,size,color
            if (state.length > 0) {
                for (let key in state) {
                    let obj = state[key];
                    let find_Name = obj.index === item.index;
                    let find_Color = obj.color === item.color;
                    let find_Size = obj.size === item.size;
                    if (find_Name && find_Color && find_Size) {
                        state.splice(key, 1);
                        save([...state]);
                        return [...state];
                    }
                }
            }
            save([...state]);
            return [...state];
        case RECEIVE_MAPSTORAGETOSTORE:
            if (typeof (Storage) !== 'undefined') {
                let domain = localStorage.getItem('domain');
                return [...JSON.parse(domain)];
            } else {
                document.write('Trình duyệt của bạn không hỗ trợ local storage');
            }
            return [...state];
        default:
            return [...state];
    }
};

function save (cart) {
    if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('domain', JSON.stringify(cart));
    } else {
        document.write('Trình duyệt của bạn không hỗ trợ local storage');
    }
    /*if (typeof (Storage) !== 'undefined') {
        let domain = localStorage.getItem('domain');
        console.log(JSON.parse(domain)); // kết quả freetuts.net
    } else {
        document.write('Trình duyệt của bạn không hỗ trợ local storage');
    }*/
}
