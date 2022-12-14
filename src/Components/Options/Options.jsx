import React from "react";

function Options({ todo, setTodo }) {
  const clearAllTodo = () => {
    setTodo([]);
  };

  return (
    <div className="text-light-gray text-lg p-5 flex justify-between relative">
      <span>{`${todo.length} items left`}</span>
      <div className="main-options">
        <button className="text-active-option">All</button>
        <button className="px-5 options">Active</button>
        <button className="options">Completed</button>
      </div>
      <button className="options" onClick={clearAllTodo}>
        Clear All
      </button>
    </div>
  );
}

export default Options;
