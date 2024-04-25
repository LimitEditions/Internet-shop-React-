import { useState } from 'react';
import Theme from './ThemeSwitcher.js';
function Counter() {

    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
    }

    const minus = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    }

    return (
        <>
            <Theme />
            <div>
                <button onClick={plus}>Плюс</button>
                <p>{count}</p>
                <button onClick={minus}>Минус</button>
            </div>
        </>
    );
}

export default Counter;