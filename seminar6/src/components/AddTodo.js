import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/index";

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo(text));
        setText('');
    };

    return(
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button onClick={handleAddTodo}> Добавить задачу</button>
        </>
    );
};

export default AddTodo;