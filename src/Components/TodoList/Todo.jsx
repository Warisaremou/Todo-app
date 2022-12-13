import React from "react";
import { Check, XLg } from "react-bootstrap-icons";

export default function Todo({ index, value, isCompleted, updateTodos }) {
  let handleMarkAsCompleted = () => {
    updateTodos((todos) => {
      let newTodos = [...todos];
      newTodos[index].isCompleted = !todos[index].isCompleted;
      return newTodos;
    });
  };

  let handleDeleteTodo = () => {
    updateTodos((todos) => {
      let newTodos = [...todos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  return (
    <div key={index} className="todo py-5 border-b-2 dark:border-text-dark my-todo">
      <div className="px-3 flex justify-between items-center">
        <div className="flex items-center">
          <Check
            data-index={`${index}`}
            className={`check-btn ${isCompleted ? "completed" : null}`}
            onClick={handleMarkAsCompleted}
          />
          <p className={`todo-content ${isCompleted ? "line-through" : null}`}>{value}</p>
        </div>
        <div onClick={handleDeleteTodo}>
          <XLg className="clear-btn" />
        </div>
      </div>
    </div>
  );
}
