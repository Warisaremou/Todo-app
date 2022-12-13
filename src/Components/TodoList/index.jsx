import React, { useContext } from "react";
import { TodosContext } from "../App";
import Todo from "./Todo";
import Options from "./Options";

function TodoList({ setTodos }) {
  const todos = useContext(TodosContext);

  return (
    <div className="bg-white dark:bg-input-dark rounded-lg shadow-lg shadow-light-shadow dark:shadow-dark-shadow">
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} setTodos={setTodos} />
      ))}
      <Options setTodos={setTodos} />
    </div>
  );
}

export default TodoList;
