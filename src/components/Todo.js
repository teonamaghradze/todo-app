import React from "react";
import "./Todo.styles.css";

const Todo = ({ text, todos, setTodos, todo, lightMode }) => {
  const deleteHandle = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandle = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={`todo ${lightMode ? "todo-dark" : "todo-light"}`}>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div className="delete-check-btns">
        <button onClick={completeHandle} className="btn complete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
            <polyline
              points="172 104 113.3 160 84 132"
              fill="none"
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></polyline>
          </svg>
        </button>
        <button onClick={deleteHandle} className="btn delete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            fill="gray"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z"
              opacity="0.2"
            ></path>
            <line
              x1="216"
              y1="56"
              x2="40"
              y2="56"
              fill="none"
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="104"
              y1="104"
              x2="104"
              y2="168"
              fill="none"
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="152"
              y1="104"
              x2="152"
              y2="168"
              fill="none"
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <path
              d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
              fill="none"
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <path
              d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
              fill="none"
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Todo;
