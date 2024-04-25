const initialState = [];
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.playload.text, complited: false }];
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id === action.playload.id ? { ...todo, complited: !todo.complited } : todo);
        default:
            return state;
    }
}