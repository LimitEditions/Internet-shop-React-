import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../reducers/todoReducer';
import AddTodo from './AddTodo'

const TodoList = () => {
    const todos = useSelector(state => state.todo.array);
    const dispatch = useDispatch();

    return(
        <>
        <AddTodo />
            {todos.map(todo => (
                <div key={todo.id}>
                    <p>desc: {todo.text}</p>
                    <button onClick={(id) => dispatch(deleteTodo({id}))
                    }>Delete</button>
                </div>
            ))}
        </>
    )
};

export default TodoList;