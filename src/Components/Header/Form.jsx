import React from "react";

function Form({ addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;

    if (inputValue !== "") {
      addTodo((todos) => [...todos, { value: inputValue, isCompleted: false }]);
      e.target[0].value = "";
    } else {
      alert("Please enter a todo");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="todo-input" type="text" placeholder="Create a new todo..." />
    </form>
  );
}

export default Form;
