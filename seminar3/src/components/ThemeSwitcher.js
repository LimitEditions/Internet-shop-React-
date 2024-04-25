import {useState} from 'react';
import MaterialUISwitch from './MaterialUISwitch';

function Theme() {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        if (theme === 'light') {
            document.querySelector('body').style.backgroundColor = 'black';
            document.querySelector('body').style.color = 'white';
            setTheme('dark');
        } else {
            document.querySelector('body').style.backgroundColor = 'white';
            document.querySelector('body').style.color = 'black';
            setTheme('light');
        }
      
    }
    
    return (  
        <MaterialUISwitch theme={theme} onClick={changeTheme} />
    );
}

export default Theme;