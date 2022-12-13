import React, { useContext } from "react";
import { TodosContext } from "../App";

function Form({ setTodos }) {
  const todos = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputVal = e.target[0].value;

    if (inputVal !== "") {
      setTodos([...todos, { id: todos.length, text: inputVal, isCompleted: false }]);
    } else alert("Please enter a todo");

    e.target[0].value = "";
  };

  return (
    <form onSubmit={handleSubmit} method="POST" action="#">
      <input className="todo-input" type="text" placeholder="Create a new todo..." />
    </form>
  );
}

export default Form;
