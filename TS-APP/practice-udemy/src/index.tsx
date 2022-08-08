import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./Hello";
import TestComponent from "./TestComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <div className="App ul-header App-link">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/hello">Hello</a>
        </li>
        <li>
          <a href="/test">Test Component</a>
        </li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/hello" element={<Hello hello="Hello" />} />
      <Route path="/test" element={<TestComponent test="Test Component" />} />
      <Route
        path="/*"
        element={
          <div className="App App-header">
            <p>404 Not Found</p>
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
