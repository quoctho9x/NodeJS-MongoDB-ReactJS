import { RECEIVE_COUNTER } from '../actions/actions';
export const counter = 0;
export default (state = counter, action) => {
    switch (action.type) {
        case RECEIVE_COUNTER:
            return state + action.counter;
        default:
            return state;
    }
};
