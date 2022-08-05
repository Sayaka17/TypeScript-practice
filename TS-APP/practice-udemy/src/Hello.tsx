import React from "react";
import "./App.css";

// 引数の型定義
interface Props {
  hello: string;
}

const Hello: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <h1 className="App-header">{props.hello}</h1>
    </div>
  );
};

export default Hello;
