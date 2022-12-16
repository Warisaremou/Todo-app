import Form from "./Form";
import ThemeSwitcher from "./ThemeSwitcher";

function Header({ setTodos, setTheme }) {
  return (
    <div className="py-5">
      <div className="text-2xl md:text-4xl text-white flex justify-between mb-9 items-center">
        <h3 className="font-extrabold tracking-widest">TODO</h3>
        <ThemeSwitcher setTheme={setTheme} />
      </div>
      <Form setTodos={setTodos} />
    </div>
  );
}

export default Header;
