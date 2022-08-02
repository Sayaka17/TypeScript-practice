import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Buttons = (props:any) => {
    return (
        <div className='button-wrap'>
            <Stack direction="row" spacing={2}>
                <Button variant="contained"
                onClick={() => props.change("blue_light")}>Start</Button>
                <Button variant="contained" color="error"
                onClick={() => props.change("red_light")}>Stop</Button>
            </Stack>
        </div>
    )
}

export default Buttons;