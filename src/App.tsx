import React from "react";
import "./App.css";
import { Todo } from "./Todo";

const items = [
  {
    id: "1",
    content: "감바스 만들 재료 사기",
    completed: false,
  },
  {
    id: "2",
    content: "리액트 공부하기",
    completed: true,
  },
  {
    id: "3",
    content: "옷 정리하기",
    completed: false,
  },
];

function App() {
  return (
    <div className="App">
      <Todo items={items} />
    </div>
  );
}

export default App;
