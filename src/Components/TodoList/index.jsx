import { useState } from "react";
import { Check, XLg } from "react-bootstrap-icons";
import Options from "./Options";

function TodoList({ todo, setTodo }) {
  const [isCompleted, setIsCompleted] = useState(false);
  // const [completedTodo, setCompletedTodo] = useState([])

  function markAsCompleted(e, index) {
    const dataIndex = e.currentTarget.dataset.index;
    console.log(dataIndex, index);
    console.log(e);
    if (dataIndex == index) {
      // if (e.currentTarget.classList.contains("completed")) {
      //   console.log("yes");
      //   e.currentTarget.classList.add('completed')
      // } else {
      //   console.log("no");
      // }
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
        <div key={index} data-index={index} className="todo py-5 border-b-2 dark:border-text-dark my-todo">
          <div className="px-3 flex justify-between items-center">
            <div className="flex items-center">
              <Check
                data-index={`${index}`}
                className={`check-btn ${isCompleted ? "completed" : null}`}
                onClick={(e) => markAsCompleted(e, index)}
              />
              <p className={`todo-content ${isCompleted ? "line-through" : null}`}>
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
