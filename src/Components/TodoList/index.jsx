import Todo from "./Todo";
import Options from "./Options";

function TodoList({ todos, setTodos }) {
  return (
    <div className="bg-white dark:bg-input-dark rounded-lg shadow-lg shadow-light-shadow dark:shadow-dark-shadow">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} {...todo} updateTodos={setTodos} />
      ))}
      <Options length={todos.length} clearAllTodos={setTodos} />
    </div>
  );
}

export default TodoList;
