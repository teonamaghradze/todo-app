import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, lightMode }) => {
  return (
    <div className="todo-container ">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              lightMode={lightMode}
              setTodos={setTodos}
              todos={todos}
              text={todo.text}
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
