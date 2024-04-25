import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';
import todoReducer from '../reducers/todoReducer'

const store = configureStore({
    reducer: rootReducer,
    todos: todoReducer
});

export default store;