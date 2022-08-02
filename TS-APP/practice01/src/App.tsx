import React from 'react';
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import { SignalRed, SignalBlue, SignalYellow, Buttons, Signal, Signals } from './component/index'
import defaultDataset from './dataset';
import black from './assets/img/black_signal.png'
import blue from './assets/img/blue_signal.png';
import yellow from './assets/img/yellow_signal.png';
import red from './assets/img/red_signal.png';



function App() {
  // 現在のカラーのid, init/blue_light/yellow_light/red_light
  const [currentColorId, setCurrentColorId] = useState('');
  // dataset
  const [dataset, setDataset] = useState(defaultDataset);
  // 色の組み合わせ
  const [colorSet, setColorSet] = useState(dataset["init"].colorSet);

  // コンポーネントがマウント(配置)された直後に呼び出されるメソッド => ounting(マウント時)
  useEffect(() => {
    setCurrentColorId('blue_light')
    setColorSet(dataset['init'].colorSet)
  }, [])

  console.log(currentColorId)
  // console.log(dataset[currentColorId].colorSet)

  // colorSetを変える関数(typescriptの型付けが原因のエラーを回避するため。後で消す) 
  const changeColor = (currentColorId: string) => {
    switch (true) {
      case (currentColorId==='blue_light'):
        setColorSet(dataset["blue_light"].colorSet)
        break;
      case (currentColorId==='red_light'):
        setColorSet(dataset["red_light"].colorSet)
        break;
      case (currentColorId==='yellow_light'):
        setColorSet(dataset["yellow_light"].colorSet)
        break;
      default:
        setColorSet(dataset["init"].colorSet)
    }
  }

  // 前回の色から次の色へと信号を変える関数
  const setNextColor = (previousColorId: string) => {
    switch (true) {
      case (previousColorId === "blue_light"):
        setCurrentColorId('yellow_light')
        changeColor(currentColorId)
        // setTimeout(() => changeColor(currentColorId), 1500);
        // currentColorIdをyellow_lightに変更する
        break;
      case (previousColorId === "red_light"):
        setCurrentColorId('blue_light')
        changeColor(currentColorId)
        // setTimeout(() => changeColor(currentColorId), 1500);
        break;
      case (previousColorId === "yellow_light"):
        setCurrentColorId('red_light')
        changeColor(currentColorId)
        // setTimeout(() => changeColor(currentColorId), 1500);
        break;
      default:
        changeColor("init")
    }
  }


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
          <Buttons change={changeColor} color={currentColorId} next={setNextColor}/>
        </div>
      </div>
    </div>
  );
}

export default App;
