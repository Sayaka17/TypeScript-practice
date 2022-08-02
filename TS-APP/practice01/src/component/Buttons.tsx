import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Buttons = () => {
    return (
        <div className='button-wrap'>
            <Stack direction="row" spacing={2}>
                <Button variant="contained"  >Start</Button>
                <Button variant="contained" color="error">Stop</Button>
            </Stack>
        </div>
    )
}

export default Buttons;