import React from 'react';
import { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import { SignalRed, SignalBlue, SignalYellow, Buttons, Signal, Signals } from './component/index'
import black from './assets/img/black_signal.png'
import blue from './assets/img/blue_signal.png';
import yellow from './assets/img/yellow_signal.png';
import red from './assets/img/red_signal.png';



function App() {
  const [colorSet, setColorSet] = useState([blue, yellow, red, black]);
  const [currentColorId, setCurrentColorId] = useState([0, 1, 2]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Traffic Lights</h1>
      </header>
      <div className="signal-wrap">
        <div className="signal_flex">
          <Signal color={colorSet[0]} />
          <Signal color={colorSet[1]} />
          <Signal color={colorSet[2]} />
          {/* <SignalBlue />
          <SignalYellow />
          <SignalRed /> */}
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
