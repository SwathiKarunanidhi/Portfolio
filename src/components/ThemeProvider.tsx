import React, { createContext, useEffect, useState } from "react";
import { Theme, ThemeContextType } from "./types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme ? savedTheme : "light";
  };
  const [theme, setTheme] = useState<Theme>(getInitialTheme());
  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
  };

  //Initial Render will set the theme based on localStorage
  useEffect(() => {
    const savedTheme = getInitialTheme();
    if (savedTheme) setTheme(() => savedTheme);
  }, []);

  //Subsequent theme changes will update body class and localStorage
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
