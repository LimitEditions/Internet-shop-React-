import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../actions';
import {FilterContext} from '../contexts/FilterContext';
import withFilter from '../hoc/withFilter';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const {filter} = useContext(FilterContext);

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    return(
        <ul>
            {todos.map(todo => (
                <li key={todo.id} onClick={() => handleToggleTodo(todo.id)} style={{textDecoration: todo.complited ? 'line-through' : 'none'}}> {todo.text}</li>
            ))}
        </ul>
    )
};

export default withFilter(TodoList);