import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlise';


const rootReducer = combineReducers ({
    counter: counterReducer
});

export default rootReducer;