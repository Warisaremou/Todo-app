import { Check } from "react-bootstrap-icons";
import { XLg } from "react-bootstrap-icons";
import Options from "../Options/Options";
import { useState } from "react";

function TodoList({ todo, setTodo }) {
  const [isCompleted, setIsCompleted] = useState(false);
  // const [completedTodo, setCompletedTodo] = useState([])

  function markAsCompleted(e) {
    const dataIndex = e.target.dataset.index;
    console.log(dataIndex);
    if (dataIndex === "1") {
      isCompleted ? setIsCompleted(false) : setIsCompleted(true);
    }
  }

  function deleteTodo(index) {
    setTodo((currentTodo) => {
      return currentTodo.filter((_, i) => i !== index);
    });
  }

  return (
    <div className="bg-white dark:bg-input-dark rounded-lg shadow-lg shadow-light-shadow dark:shadow-dark-shadow">
      {todo.map((myTodo, index) => (
        <div
          key={index}
          className="todo py-5 border-b-2 dark:border-text-dark my-todo"
        >
          <div className="px-3 flex justify-between items-center">
            <div className="flex items-center">
              <Check
                data-index={`${index}`}
                className={`check-btn ${isCompleted ? "completed" : null}`}
                onClick={markAsCompleted}
              />
              <p
                className={`todo-content ${
                  isCompleted ? "line-through" : null
                }`}
              >
                {myTodo.charAt(0).toUpperCase() + myTodo.slice(1)}
              </p>
            </div>
            <div onClick={() => deleteTodo(index)}>
              <XLg className="clear-btn" />
            </div>
          </div>
        </div>
      ))}
      <Options todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default TodoList;
