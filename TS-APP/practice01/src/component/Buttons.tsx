import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Buttons = (props: any) => {
    const setIntervalNext = setInterval(() => props.next(props.color), 5000);
    return (
        <div className='button-wrap'>
            <Stack direction="row" spacing={2}>
                <Button variant="contained"
                    onClick={() => setIntervalNext}>Start</Button>
                {/* <Button variant="contained"
                    onClick={() => props.next(props.color)}>Start</Button> */}
                {/* <Button variant="contained" color="error"
                    onClick={() => props.change("init")}>Stop</Button> */}
                <Button variant="contained" color="error"
                    onClick={() => clearInterval(setIntervalNext)}>Stop</Button>
            </Stack>
        </div>
    )
}

export default Buttons;