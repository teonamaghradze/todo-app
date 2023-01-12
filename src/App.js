import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [lightMode, setLightMode] = useState(true);

  //useEffect
  useEffect(() => {
    filterHandle();
  }, [todos, status]);
  //

  const clickHandler = () => {
    setLightMode(!lightMode);
  };

  const filterHandle = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className={`whole ${lightMode ? "darkmode" : "lightmodee"}`}>
      <div className="center-wrapper">
        <Header clickHandler={clickHandler} src={lightMode ? sun : moon} />
        <div className="main">
          <Form
            lightMode={lightMode}
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            setStatus={setStatus}
          />

          <TodoList
            lightMode={lightMode}
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
