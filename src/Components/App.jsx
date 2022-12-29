import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import { useState, useEffect } from "react";
import Background from "./Background";

function App() {
  const savedTodo = localStorage.getItem("todos");
  const savedThemes = localStorage.getItem("themes");
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState(savedTodo ? JSON.parse(savedTodo) : []);
  const [theme, setTheme] = useState(savedThemes ? JSON.parse(savedThemes) : "light");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("themes", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className="font-josefin relative">
      <div className="max-w-screen-md mx-auto pt-5 px-5 md:px-14">
        <Header
          inputValue={inputValue}
          setInputValue={setInputValue}
          todo={todo}
          setTodo={setTodo}
          theme={theme}
          setTheme={setTheme}
        />
        {todo.length > 0 && <TodoList todo={todo} setTodo={setTodo} />}
        {
          (todo.length <= 0 && (
            <p className="text-center text-gray-200 dark:text-gray-400 text-2xl md:text-4xl font-bold">No todos yet</p>
          ))
        }
      </div>
      <div className="layout">
        <Background theme={theme} />
      </div>
      <div className="app-bg"></div>
    </div>
  );
}

export default App;
