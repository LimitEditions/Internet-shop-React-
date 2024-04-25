import { useState } from "react";

function TodoList() {
    const [daily, setDaily] = useState("");
    const [dailis, setDailis] = useState([]);

    const clickHandler = () => {
      if (!daily.trim()){
        return;
      }
      setDailis([...dailis, daily]);
      setDaily("");
    }

    const myDaily = (e) => {
      setDaily(e.target.value)
    }
    

    return ( 
        <>
        <input type="text" placeholder="Введите текст" value={daily} onChange={myDaily}/>
        <button onClick={clickHandler}>Добавить задачу</button>
        <ul>
            {dailis.map((item) => (
                <li key={dailis.indexOf(item)}>{item}</li> 
            ))}
        </ul>
        </>
    );
}

export default TodoList;