import { Check } from "react-bootstrap-icons";
import { XLg } from "react-bootstrap-icons";
import Options from "../Options/Options";
import { useState } from "react";

function TodoList({ todo, setTodo }) {
  const [completedTodo, setCompletedTodo] = useState([]);

  // Mark as completed function
  const markAsCompleted = (id) => {
    const newTodo = todo.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTodo(newTodo);
  };

  // Delete todo function
  const deleteTodo = (id) => {
    const newTodo = todo.filter((task) => task.id !== id);
    setTodo(newTodo);
  };

  return (
    <div className="bg-white dark:bg-input-dark rounded-lg shadow-lg shadow-light-shadow dark:shadow-dark-shadow">
      {todo.map((myTodo) => (
        <div key={myTodo.id} className="todo py-5 border-b-2 dark:border-text-dark my-todo">
          <div className="px-3 flex justify-between items-center">
            <div
              className="flex items-center"
              title="Completed"
              onClick={() => markAsCompleted(myTodo.id)}
            >
              <Check className={`check-btn ${myTodo.completed && "completed"}`} />
              <p
                className={`todo-content ${
                  myTodo.completed && "line-through text-white dark:text-dark-gray"
                }`}
              >
                {myTodo.text.charAt(0).toUpperCase() + myTodo.text.slice(1)}
              </p>
            </div>
            <div onClick={() => deleteTodo(myTodo.id)} title="Delete">
              <XLg className="clear-btn" />
            </div>
          </div>
        </div>
      ))}
      <Options todo={todo} setTodo={setTodo} />
      {/* <p>Completed Tod : {completedTodo}</p> */}
    </div>
  );
}

export default TodoList;
