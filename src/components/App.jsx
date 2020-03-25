import React from "react";
import List from "./List";
import "./App.css";

const INITIAL_STATE = [
  {
    text: "Buy milk",
    id: 1
  },
  {
    text: "Clean room",
    id: 2
  },
  {
    text: "Prepare presentation",
    id: 3
  },
  {
    text: "Practice piano",
    id: 4
  }
];

export default function App() {
  console.log("Render App");

  // Application state
  const [todos, setTodos] = React.useState(INITIAL_STATE);
  const [inputValue, setInputValue] = React.useState("");

  // State update functions
  const handleChange = React.useCallback(ev => {
    setInputValue(ev.target.value);
  }, []);

  const handleAdd = React.useCallback(() => {
    setTodos([...todos, { text: inputValue, id: Date.now() }]);
    setInputValue("");
  }, [inputValue, todos]);

  const handleItemCheck = itemId => {
    setTodos(todos.filter(item => item.id !== itemId));
  };

  return (
    <div className="App">
      <h1>What TODO?</h1>
      <input onChange={handleChange} value={inputValue} />
      <button onClick={handleAdd}>Add</button>
      <List todos={todos} onCheck={handleItemCheck} />
    </div>
  );
}
