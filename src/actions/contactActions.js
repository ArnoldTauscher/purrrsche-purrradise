import { submitContactAPI } from '../api/contactAPI';

export const SUBMIT_CONTACT_REQUEST = 'SUBMIT_CONTACT_REQUEST';
export const SUBMIT_CONTACT_SUCCESS = 'SUBMIT_CONTACT_SUCCESS';
export const SUBMIT_CONTACT_FAILURE = 'SUBMIT_CONTACT_FAILURE';

export const submitContact = (contactData) => async (dispatch) => {
  dispatch({ type: SUBMIT_CONTACT_REQUEST });
  try {
    const response = await submitContactAPI(contactData);
    dispatch({ type: SUBMIT_CONTACT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SUBMIT_CONTACT_FAILURE, payload: error.message });
  }
};