import {useState} from 'react';
function Counter() {
    const [count, setCount] = useState(0);

    const upCount = () => {
      setCount(count + 1);
    }
    
    return ( 
        <div>
            <p>{count}</p>
            <br />
            <button onClick={upCount}>Нажми меня +1</button>
        </div>
     );
}

export default Counter;