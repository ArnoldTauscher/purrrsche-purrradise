import {
    WAKE_UP_SERVER_REQUEST,
    WAKE_UP_SERVER_SUCCESS,
    WAKE_UP_SERVER_FAILURE,
} from '../actions/wakeUpActions';

const initialState = {
    loading: false,
    data: null,
    error: null,
    isAwake: false
};

export const wakeUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case WAKE_UP_SERVER_REQUEST:
            return { ...state, loading: true, error: null };
        case WAKE_UP_SERVER_SUCCESS:
            return { ...state, loading: false, data: action.payload, isAwake: true };
        case WAKE_UP_SERVER_FAILURE:
            return { ...state, loading: false, error: action.error, isAwake: false };
        default:
            return state;
    }
};