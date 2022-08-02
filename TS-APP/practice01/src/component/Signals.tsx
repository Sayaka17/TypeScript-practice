import React from 'react';
import '../App.css';
import Signal from './Signal';

const Signals = (props:any)=>{
    return(
        <div className='signal-box'>
        <Signal color={props.color}/>
        <Signal color={props.color}/>
        <Signal color={props.color}/>
        </div>
    )
}
export default Signals;