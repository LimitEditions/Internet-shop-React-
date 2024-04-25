import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function TextDisplay() {
    const [text, setText] = useState('');
    const [viewInputText, setViewInputText] = useState('');

    const myText = (e) => {
        setText(e.target.value)
    }

    const viewText = (e) => {
        e.preventDefault();
        setViewInputText(text)
        setText('');
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <TextField fullWidth label="введите текст" value={text} id="fullWidth" onChange={myText} />
            </Box>
            <Stack direction="row" spacing={2}>
                <Button onClick={viewText} variant="contained" color="success">Отобразите текст</Button>
            </Stack>
            <p>{viewInputText}</p>
        </>
    );
}

export default TextDisplay;


