import { wakeUpServer } from "../api/wakeUpApi";

export const WAKE_UP_SERVER_REQUEST = 'WAKE_UP_SERVER_REQUEST';
export const WAKE_UP_SERVER_SUCCESS = 'WAKE_UP_SERVER_SUCCESS';
export const WAKE_UP_SERVER_FAILURE = 'WAKE_UP_SERVER_FAILURE';

export const wakeUpServerAction = () => async (dispatch) => {
    dispatch({ type: WAKE_UP_SERVER_REQUEST });
  
    try {
      const data = await wakeUpServer();
        dispatch({
            type: WAKE_UP_SERVER_SUCCESS,
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: WAKE_UP_SERVER_FAILURE,
            payload: error.message
        });
    }
  };