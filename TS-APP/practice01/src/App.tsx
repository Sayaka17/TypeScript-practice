import React from 'react';
import './App.css';
import blue from './assets/img/blue_signal.png';
import yellow from './assets/img/yellow_signal.png';
import red from './assets/img/red_signal.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>信号機アプリ</h1>
      </header>
      <div className="signal-wrap">
        <div className="signal_flex">
          <div className="signal-box"><img src={blue} /></div>
          <div className="signal-box"><img src={yellow} /></div>
          <div className="signal-box"><img src={red} /></div>
        </div>
      </div>

    </div>
  );
}

export default App;
