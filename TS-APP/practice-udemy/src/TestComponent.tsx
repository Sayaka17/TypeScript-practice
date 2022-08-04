import React, { useState } from "react";

// 引数の型定義
interface Props {
  test: string;
}
// objectの型定義
interface UserData {
  id: number;
  name: string;
}

// GenericsでPropsの型を指定する
const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(45);
  const [user, setUser] = useState<UserData>({ id: 1, name: "piyoko" });
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };
  return (
    <div>
      <h1>{props.test}</h1>
      <h1>{count}</h1>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <h1>{inputData}</h1>
    </div>
  );
};

export default TestComponent;
