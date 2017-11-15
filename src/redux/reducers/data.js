import { RECEIVE_API_DATA } from '../actions/actions';
export const INITIAL_STATE = {
    data: {}
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECEIVE_API_DATA:
            return action.data;
        default:
            return state;
    }
};
