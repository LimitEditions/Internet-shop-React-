export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        payload: {text} 
        
    }
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        payload: {id}
    }
}