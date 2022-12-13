import React, { useContext } from "react";
import { TodosContext } from "../App";

function Options({ setTodos }) {
  const todos = useContext(TodosContext);

  const handleClick = () => setTodos([]);

  return (
    <div className="text-light-gray text-lg p-5 flex justify-between relative">
      {todos.length > 1 ? <span>{`${todos.length} items left`}</span> : <span>{`${todos.length} item left`}</span>}
      <div className="main-options">
        <button className="text-active-option">All</button>
        <button className="px-5 options">Active</button>
        <button className="options">Completed</button>
      </div>
      <button className="options" onClick={handleClick}>
        Clear All
      </button>
    </div>
  );
}

export default Options;
