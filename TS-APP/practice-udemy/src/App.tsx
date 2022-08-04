import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";
import TestComponent from "./TestComponent";

// jsonのデータ型推定してくれるので非常に便利です！！
type USERS = typeof Data;

const name = "hello";
// name = "hello 2"; //定数を書き換えるとエラー

let nameChange = "hello";
nameChange = "hello 2"; //letだと再代入してもエラーにならない

let userName = "sayaka"; //型推論してくれる

let userName2: string = "Hello"; //アノテーション、型定義
let dummyNum: number = 2;
let bool: boolean = true;

let array1: boolean[] = [true, false, true];
let array2 = [0, 1, 2, true, false, "hello"];

// objectの型定義
interface Name {
  first: string;
  last: string | number | null;
}

let fullname: Name = {
  first: "taro",
  last: 1,
};

// 関数定義
const func1 = (x: number, y: number) => {
  return x + y;
};

// Intersection Types 複数のタイプを結合する
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};
//結合！できる！
type USER = PROFILE & LOGIN;
const userA: USER = {
  age: 20,
  city: "tokyo",
  username: "ddd_ddd",
  password: "dfsdfsd",
};

//Union Types
let value: boolean | number;
value = true;
value = 10;
// value = 'h' //error

let arrayUni: (number | string)[];
arrayUni = [1, 2, 3, "ddd"]; // numberとstringを配列の要素に入れれる。

// Literal Types リテラルの中にある値しか代入できない
let company: "Facebook" | "google" | "amazon" | 12;
company = 12;
company = "Facebook";

let numnum: 123 | 334;
numnum = 334;

// Typeof 宣言済みの変数の型と同じ型定義ができる。"Hi"はstringなのでmsg2はstringしか代入できない
// データセットを定義するときによく使う
let msg: string = "Hi";
let msg2: typeof msg;

let animal = { cat: "smallcat" };
let newAnimal: typeof animal;
newAnimal = { cat: "big cat" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";
key = "secondary";

//typeof keyof の組み合わせた使い方
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";
keySports = "baseball";

// enum(列挙型) 自動で連番を付けてくれる
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性
const comps = "test";
let comp2: string = comps;

let comp3: string = "test";
// let comp4: "test" = comp3; //エラー

// 関数の型の互換性
let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

// funcComp1 = funcComp2; エラー

// Generics ジェネリックス T:データ型 、属性を変数Tに入れて定義できる。使うときに型を入れる
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = {
  item: "hello",
};
// defaultの型を定義できる　<T=string>
interface GEN1<T = string> {
  item: T;
}
// Genericsはstringかnumberしか指定できなくなる。extendsをつけると制限できる
interface GEN2<T extends string | number> {
  item: T;
}
const gen3: GEN2<number> = {
  item: 11,
};
//Genericsを関数に適用 props:引数
function funcGen<T>(props: T) {
  return { item: props };
}
const gen4 = funcGen<string | null>("test");

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen5 = funcGen1<null>(null);

// 引数の定義
interface Props {
  price: number;
}
// 引数のpriceプロパティを返してくれる
function funcGen2<T extends Props>(props: T) {
  return { value: props.price };
}
const gen7 = funcGen2({ price: 10 });

// アロー関数で書いてみる
const funcGen3 = <T extends Props>(props: T) => {
  return { value: props.price };
};

// debug
console.log(func1(2, 3));

// React.FC: ReactのFunction Component。関数コンポーネントのこと
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent test="Hello From Typescript" />
      </header>
    </div>
  );
};

export default App;
