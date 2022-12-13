import { useState, useEffect } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Background from "./Background";

function App() {
  const Todos = JSON.parse(localStorage.getItem("todos")) || [];
  const Theme = localStorage.getItem("theme") || "light";

  const [todos, setTodos] = useState(Todos);
  const [theme, setTheme] = useState(Theme);

  useEffect(() => {
    theme === "light"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="font-josefin relative">
      <div className="max-w-screen-md mx-auto pt-5 px-5 md:px-14">
        <Header setTodos={setTodos} theme={theme} setTheme={setTheme} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <div className="layout">
        <Background theme={theme} />
      </div>
      <div className="app-bg"></div>
    </div>
  );
}

export default App;
