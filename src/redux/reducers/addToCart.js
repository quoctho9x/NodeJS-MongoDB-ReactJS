import { RECEIVE_ADDTOCART, RECEIVE_UPDATEITEMCART, RECEIVE_REMOVEITEMCART } from '../actions/action_addtocart';
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
                    if (find_Name && find_Color && find_Size) {
                        obj.quantity += 1;
                        return [...state];
                    }
                }
                return [...state, item];
            }
            return [...state, item];
        case RECEIVE_UPDATEITEMCART:
            var item = action.obj.item, value = action.obj.value;
            item.quantity = parseInt(value);
            /* var index_array = state.findIndex(x => x.index === item.index); */
            return [...state];
        case RECEIVE_REMOVEITEMCART:
            var item = Object.assign({}, action.obj.item);
            if (state.length > 0) {
                for (let key in state) {
                    let obj = state[key];
                    let find_Name = obj.index === item.index;
                    let find_Color = obj.color === item.color;
                    let find_Size = obj.size === item.size;
                    if (find_Name && find_Color && find_Size) {
                        state.splice(key, 1);
                        return [...state];
                    }
                }
            }
            return [...state];
        default:
            return [...state];
    }
};
