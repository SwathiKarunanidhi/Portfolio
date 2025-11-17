import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme) return theme;
  else throw new Error("useTheme must be used within a ThemeProvider");
};
