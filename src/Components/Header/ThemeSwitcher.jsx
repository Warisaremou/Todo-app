import React, { useContext } from "react";
import { BrightnessLowFill, MoonFill } from "react-bootstrap-icons";
import { ThemeContext } from "../App";

function ThemeSwitcher({ setTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <MoonFill className="cursor-pointer md:text-3xl toogle-btn" />
      ) : (
        <BrightnessLowFill className="cursor-pointer text-3xl toogle-btn" />
      )}
    </div>
  );
}

export default ThemeSwitcher;
