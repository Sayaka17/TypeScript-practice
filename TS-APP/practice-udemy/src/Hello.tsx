import React from "react";
import "./App.css";

// 引数の型定義
interface Props {
  hello: string;
}

const Hello: React.FC<Props> = (props) => {
  return (
    <div className="App App-header">
      <h1>{props.hello} Component</h1>
    </div>
  );
};

export default Hello;
