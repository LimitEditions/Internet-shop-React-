import { useState } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ToDoList() {
    const [task, setTask] = useState();
    const [tasks, setTasks] = useState([]);

    const clickHandler = () => {
        if (!task.trim()) {
            return;
        }
        setTasks([...tasks, task]);
        setTask("");
    }

    const deleteTask = (id) => {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
        }
    }

    return (
        <>
            <div>
                <TextField type='text' id="C" label="Введите задачу" value={task} onChange={(e) => setTask(e.target.value)} />
                <Button variant="contained" style={{ display: 'flex', margin: '20px auto' }} onClick={clickHandler}>Добавить задачу</Button>
                <List>
                    <ListItem className='list'>
                        {tasks.map((item) => (
                            <><ListItemText key={tasks.indexOf(item)}>{item}</ListItemText><ListItemIcon>
                                <DeleteIcon onClick={() => deleteTask(task.id)} />
                            </ListItemIcon></>
                        ))}
                    </ListItem>
                </List>
            </div>
        </>
    );
}

export default ToDoList;