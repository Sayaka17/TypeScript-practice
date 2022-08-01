import React from 'react';
import '../App.css';
import blue from '../assets/img/blue_signal.png';
import yellow from '../assets/img/yellow_signal.png';
import red from '../assets/img/red_signal.png';

const SignalRed = () => {
    const signalColor = red;

    return(
        <div className="signal-box"><img src={signalColor} /></div>
    )
}

export default SignalRed;