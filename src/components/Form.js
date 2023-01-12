import React from "react";
import "./Form.styles.css";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  lightMode,
}) => {
  const inputTextHandle = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandle = (e) => {
    e.preventDefault();

    if (inputText === "" || inputText.trim() === "") {
      return;
    }

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandle = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div className="form-flex ">
        <input
          value={inputText}
          onChange={inputTextHandle}
          type="text"
          className={`todo-input ${
            lightMode ? "form-light-mode" : "form-dark-mode"
          }`}

          // className="todo-input form-light-mode"
        />
        <button onClick={submitTodoHandle} className="todo-btn" type="submit">
          <svg
            className="plus-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
      </div>

      <div className="select">
        <select onChange={statusHandle} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
