import { useState } from "react";

function MyInputText() {
    const [text, setText] = useState();
    const myText = ({target}) => {
      setText(target.value)
    }
    
    return ( 
        <>
        <input type="text" placeholder="Введите текст" onChange={myText} value={text}/>
        <p >Вы ввели: {text} </p>
        </>
    );
}

export default MyInputText;