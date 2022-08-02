import React from 'react';
import '../App.css';
import blue from '../assets/img/blue_signal.png';
import yellow from '../assets/img/yellow_signal.png';
import red from '../assets/img/red_signal.png';
import black from '../assets/img/black_signal.png';

const Signal = (props:any) => {
    const signalColor = props.color;
    return(
        <div className="signal-box"><img src={signalColor} /></div>
    )
}

export default Signal;