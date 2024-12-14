import {
    SUBMIT_CONTACT_REQUEST,
    SUBMIT_CONTACT_SUCCESS,
    SUBMIT_CONTACT_FAILURE,
  } from '../actions/contactActions';
  
  const initialState = {
    loading: false,
    success: false,
    error: null,
  };
  
  export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_CONTACT_REQUEST:
        return { ...state, loading: true };
      case SUBMIT_CONTACT_SUCCESS:
        return { ...state, loading: false, success: true, error: null };
      case SUBMIT_CONTACT_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  