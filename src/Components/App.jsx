import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import { useState, useEffect } from "react";
import Backgroud from "./Backgroud";

function App() {
  const savedTodo = localStorage.getItem("todos");
  const savedThemes = localStorage.getItem("themes");
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState(savedTodo ? JSON.parse(savedTodo) : []);
  const [theme, setTheme] = useState(
    savedThemes ? JSON.parse(savedThemes) : "light"
  );

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
          setTodo={setTodo}
          theme={theme}
          setTheme={setTheme}
        />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
      <div className="layout">
        <Backgroud theme={theme} />
      </div>
      <div className="app-bg"></div>
    </div>
  );
}

export default App;
