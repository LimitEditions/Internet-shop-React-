import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TemperatureConverter() {
    const [temperatureC, setTemperatureC] = useState();
    const [temperatureF, setTemperatureF] = useState();

    const changeTemperature = (value) => {
        // e.preventDefault();
        if (temperatureC) {
            const converted = Math.round((value * 9 / 5) + 32);
            setTemperatureF(converted || '');
        }

        if (temperatureF) {
            const converted = Math.round((value - 32) * 5/9);
            setTemperatureC(converted || '');
        }

    }

    return (
        <>
            <div className="temperature">
                <TextField type='number' id="C" label="C" value={temperatureC} onChange={(e) => setTemperatureC(e.target.value)} />
                <TextField type='number' id="F" label="F" value={temperatureF} onChange={(e) => setTemperatureF(e.target.value)}  />
                <Button variant="contained" style={{ display: 'flex', margin: '20px auto' }} onClick={(e) => changeTemperature(e.target.value)}>Конвертировать</Button>
            </div>
        </>
    );
}

export default TemperatureConverter;