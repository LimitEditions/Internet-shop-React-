import { createSlice } from '@reduxjs/toolkit';

export const todoReducer = createSlice({
    name: 'todoReducer',
    initialState: [],
    reducers: {
        addTodo: (state, {payload: newTodo}) => {
            if (state.some((item) => item.id === newTodo.id)) {
                return;
            }
            state.push(newTodo);
        },
        deleteTodo: (state, {payload: todoItem}) => {
            const filtredArray = state.filter((item) => item.id !== todoItem.id);
            state = filtredArray;
        }
    }
});

export const {addTodo, deleteTodo} = todoReducer.actions;
export default todoReducer.reducer;