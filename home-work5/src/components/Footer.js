import { ThemeContext } from "../App";
import { useContext, useState } from "react";

function Footer() {
    const theme = useContext(ThemeContext);
    const [date, setDate] = useState(new Date());

    setInterval(() => {
        setDate(new Date());
    }, 1000);
    return (  
        <h2 className={theme}>Местное время: {date.toLocaleString()}</h2>
        
    );
}

export default Footer
;