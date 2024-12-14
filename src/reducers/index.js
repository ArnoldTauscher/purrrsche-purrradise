// src/reducers/index.js
import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;


/*
import { combineReducers } from "redux";
import posts from './posts';

export default combineReducers({ posts });
// considering (tekintettel) both the key and the value are the same,
// we can only keep the first one (posts: posts)
*/