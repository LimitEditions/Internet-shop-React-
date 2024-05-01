import { createSlice } from '@reduxjs/toolkit';

export const todoReducer = createSlice({
    name: 'todoReducer',
    initialState: {
        array:[
            {
                id: 1,
                text: "Новая задача",
            }
        ]
    },
    reducers: {
        addTodo: (state, {payload: { text }}) => {
            state.array.push(text);
        },
        deleteTodo: (state, {payload: {id}}) => {
            return state.array.filter((item) => item.id !== id); // Возвращаем новый массив состояния
        }
    }
});

export const {addTodo, deleteTodo} = todoReducer.actions;
export default todoReducer.reducer;