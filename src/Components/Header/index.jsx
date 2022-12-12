import { BrightnessLowFill, MoonFill } from "react-bootstrap-icons";

function Header({ inputValue, setInputValue, setTodo, theme, setTheme }) {
  function keyPressed(e) {
    if (e.keyCode === 13) {
      if (inputValue === "") {
        alert("Please enter a todo");
      } else {
        setTodo((currentInput) => [...currentInput, inputValue]);
        setInputValue("");
      }
      // console.log(inputValue)
    }
  }

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="py-5">
      <div className="text-2xl md:text-4xl text-white flex justify-between mb-9 items-center">
        <h3 className="font-extrabold tracking-widest">TODO</h3>
        <div onClick={handleThemeSwitch}>
          {theme === "light" ? (
            <BrightnessLowFill className="cursor-pointer text-3xl toogle-btn" />
          ) : (
            <MoonFill className="cursor-pointer md:text-3xl toogle-btn" />
          )}
        </div>
      </div>
      <input
        type="text"
        value={inputValue}
        className="todo-input"
        placeholder="Create a new todo..."
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={keyPressed}
      />
    </div>
  );
}

export default Header;
