export const addTodo = (description) => ({
    type: 'ADD_TODO',
    payload: { description }

});

export const toggleTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: { id }
});