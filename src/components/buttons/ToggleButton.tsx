import { PiSunDimFill, PiSunDimLight } from "react-icons/pi";
import { useTheme } from "../../hooks/useTheme";
export const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`icon-toggle`} onClick={toggleTheme}>
      {theme === "light" ? <PiSunDimFill /> : <PiSunDimLight />}
    </div>
  );
};
