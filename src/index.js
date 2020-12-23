import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "Hi how are you", likesCount: 12 },
  { id: 1, message: "It is my first post", likesCount: 11 },
];

let dialogs = [
  { id: 1, name: "Albert" },
  { id: 2, name: "Viktoria" },
  { id: 3, name: "Viktor" },
  { id: 4, name: "Tatyana" },
  { id: 5, name: "Evgeniy" },
  { id: 6, name: "Kurul" },
];
let messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "What about your development?" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
  { id: 6, message: "Yo" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
