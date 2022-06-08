import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        {`Make ${isLight ? "dark" : "Light"}`}
        {/* {theme === "light" ? "Dark" : "light"} */}
      </button>
    </div>
  );
};

export default Navbar;
