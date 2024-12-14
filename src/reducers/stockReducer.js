import {
    GET_STOCK_DATA_REQUEST,
    GET_STOCK_DATA_SUCCESS,
    GET_STOCK_DATA_FAILURE,
} from '../actions/stockActions';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

export const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STOCK_DATA_REQUEST:
            return { ...state, loading: true };
        case GET_STOCK_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: null };
        case GET_STOCK_DATA_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};