import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();

    return(
        <ul>
            {todos.map(todo => (
                <div key={todo.id}>
                    <p>id: {todo.id}</p>
                    <p>desc: {todo.desc}</p>
                    <button onClick={() => {
                        return dispatch(deleteTodo(todo))
                    }}>Delete</button>
                </div>
            ))}
        </ul>
    )
};

export default TodoList;