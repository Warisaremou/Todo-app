import { useState, useEffect, createContext } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Background from "./Background";

// Get the todos from local storage
const Todos = JSON.parse(localStorage.getItem("todos")) || [];

// Get the theme from local storage
const Theme = localStorage.getItem("theme") || "light";

// Create a context for the theme
export const ThemeContext = createContext(Theme);

// Create a context for the todos
export const TodosContext = createContext(Todos);

function App() {
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
    <>
      <ThemeContext.Provider value={theme}>
        <div className="font-josefin relative">
          <div className="max-w-screen-md mx-auto pt-5 px-5 md:px-14">
            <TodosContext.Provider value={todos}>
              <Header setTodos={setTodos} setTheme={setTheme} />
              <TodoList setTodos={setTodos} />
            </TodosContext.Provider>
          </div>
          <div className="layout">
            <Background />
          </div>
          <div className="app-bg"></div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
