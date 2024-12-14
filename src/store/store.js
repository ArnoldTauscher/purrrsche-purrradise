import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from '../reducers/weatherReducer';
import { wakeUpReducer } from '../reducers/wakeUpReducer';
import { stockReducer } from '../reducers/stockReducer';

export const store = configureStore({
    reducer: {
        wakeUp: wakeUpReducer,
        stock: stockReducer,
        weather: weatherReducer,
    },
});
  