import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import { useState } from "react";
import mobileBg from "../Images/bg-mobile-light.jpg"
import desktopBg from "../Images/bg-desktop-light.jpg"
import MatchMediaWrapper from "../js/MatchMediaWrapper";

function App() {

  const mobileBackground = (<img src={mobileBg} alt="mobile-bg" className="absolute top-0 left-0 right-0 -z-10 w-full" />)
  const desktopBackground = (<img src={desktopBg} alt="Desktop-bg" className="absolute top-0 left-0 right-0 -z-10 w-full" />)

  const [inputValue, setInputValue] = useState('')
  const [todo, setTodo] = useState([])

  return (
    <div className="font-caudex relative">
      <div className="max-w-screen-md mx-auto pt-5 px-5 md:px-  14">
        <Header inputValue={inputValue} setInputValue={setInputValue} setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
      <div className="layout">
        <MatchMediaWrapper mobileBackground={mobileBackground} desktopBackground={desktopBackground} />
      </div>
    </div>
  );
}

export default App;
