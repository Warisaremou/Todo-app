import React from "react";
import { Check, XLg } from "react-bootstrap-icons";

export default function Todo({ id, text, isCompleted, setTodos }) {
  let handleMarkAsCompleted = () => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      });
    });
  };

  let handleDeleteTodo = () => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div key={id} className="todo py-5 border-b-2 dark:border-text-dark my-todo">
      <div className="px-3 flex justify-between items-center">
        <div className="flex items-center">
          <Check
            data-index={`${id}`}
            className={`check-btn ${isCompleted ? "completed" : ""}`}
            onClick={handleMarkAsCompleted}
          />
          <p className={`todo-content ${isCompleted ? "line-through" : ""}`}>{text}</p>
        </div>
        <div onClick={handleDeleteTodo}>
          <XLg className="clear-btn" />
        </div>
      </div>
    </div>
  );
}
