import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  //   const themes = {
  //     dark: {
  //       color: "white",
  //       background: "black",
  //     },
  //     light: {
  //       color: "black",
  //     },
  //   };

  const [theme, setTheme] = useState("light");
  //   const data = themes;

  const toggleTheme = () => {
    // setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  //   const value = [{ theme, data }, toggleTheme];

  return (
    <ThemeContext.Provider
      value={{ theme, isLight: theme === "light", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
