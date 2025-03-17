import React, { createContext, useContext, useState } from "react";
import "./ThemeSettings.css";
//import "bootstrap/dist/css/bootstrap.min.css";

// Create a context to manage theme
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? "dark-mode" : "light-mode"}>{children}</div>
    </ThemeContext.Provider>
  );
};
