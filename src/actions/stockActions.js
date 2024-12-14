import { fetchStockData } from "../api/stockApi";

export const GET_STOCK_DATA_REQUEST = 'GET_STOCK_DATA_REQUEST';
export const GET_STOCK_DATA_SUCCESS = 'GET_STOCK_DATA_SUCCESS';
export const GET_STOCK_DATA_FAILURE = 'GET_STOCK_DATA_FAILURE';

export const getStockData = () => async (dispatch) => {
  dispatch({ type: GET_STOCK_DATA_REQUEST });

  try {
    const data = await fetchStockData();
      dispatch({
          type: GET_STOCK_DATA_SUCCESS,
          payload: data 
      });
  } catch (error) {
      dispatch({
          type: GET_STOCK_DATA_FAILURE,
          payload: error.message
      });
  }
};