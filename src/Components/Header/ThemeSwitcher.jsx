import { BrightnessLowFill, MoonFill } from "react-bootstrap-icons";

function ThemeSwitcher({ theme, switchTheme }) {
  const handleSwitchTheme = () => {
    switchTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={handleSwitchTheme}>
      {theme === "light" ? (
        <BrightnessLowFill className="cursor-pointer text-3xl toogle-btn" />
      ) : (
        <MoonFill className="cursor-pointer md:text-3xl toogle-btn" />
      )}
    </div>
  );
}

export default ThemeSwitcher;
