import React from 'react';
import { useState, useEffect, useCallback } from 'react'
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
  const [currentColorId, setCurrentColorId] = useState<string>('blue_light');
  // dataset
  const [dataset, setDataset] = useState(defaultDataset);
  // 色の組み合わせ
  // const [colorSet, setColorSet] = useState(dataset["init"].colorSet);
  // flag
  const [flag, setFlag] = useState(false);

  // コンポーネントがマウント(配置)された直後に呼び出されるメソッド => ounting(マウント時)
  useEffect(() => {
    // setCurrentColorId('init')
  }, [])

  // デバッグ
  console.log(currentColorId)
  console.log(flag)

  // console.log(dataset[currentColorId].colorSet)

  // colorSetを変える関数(typescriptの型付けが原因のエラーを回避するため。後で消す) 
  // const changeColor = (currentColorId: string) => {
  //   switch (true) {
  //     case (currentColorId === 'blue_light'):
  //       setColorSet(dataset["blue_light"].colorSet)
  //       break;
  //     case (currentColorId === 'red_light'):
  //       setColorSet(dataset["red_light"].colorSet)
  //       break;
  //     case (currentColorId === 'yellow_light'):
  //       setColorSet(dataset["yellow_light"].colorSet)
  //       break;
  //     default:
  //       setColorSet(dataset["init"].colorSet)
  //   }
  // }

  const setNextColor = (previousColorId: string) => {
    switch (true) {
      case (previousColorId === "blue_light"):
        setCurrentColorId('yellow_light')
        // changeColor(currentColorId)
        break;
      case (previousColorId === "red_light"):
        setCurrentColorId('blue_light')
        // changeColor(currentColorId)
        break;
      case (previousColorId === "yellow_light"):
        setCurrentColorId('red_light')
        // changeColor(currentColorId)
        break;
      default:
        setCurrentColorId('init')
        // changeColor("init")
    }
  }

  // Flagを子要素で変更できるようにするための関数
  const changeFlag = () => {
    setFlag(true)
  }

  // 何回もsetIntervalが実行されている？？？？？
  const setIntervalNext = setInterval(()=>setNextColor(currentColorId), 5000);
  // useCallback使ってみる
  // const setIntervalNext = useCallback(() => setInterval(()=>setNextColor(currentColorId), 5000),[flag])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Traffic Lights</h1>
      </header>
      <div className="signal-wrap">
        <div className="signal_flex">
          <Signal color={dataset[currentColorId].colorSet[0]} />
          <Signal color={dataset[currentColorId].colorSet[1]} />
          <Signal color={dataset[currentColorId].colorSet[2]} />
          {/* <SignalBlue />
          <SignalYellow />
          <SignalRed /> */}
          <Buttons color={currentColorId} next={setNextColor} interval={setIntervalNext} flag={changeFlag}/>
        </div>
      </div>
    </div>
  );
}

export default App;
