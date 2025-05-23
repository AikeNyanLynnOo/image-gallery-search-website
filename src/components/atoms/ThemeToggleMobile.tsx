import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { ModeContext } from "../ModeWrapper";

export const ThemeToggleMobile = () => {
  const { mode, changeMode } = useContext(ModeContext);
  const toggleTheme = (newTheme: string) => {
    const newMode = mode === "light" ? "dark" : "light";
    changeMode(newMode);
  };
  return (
    <button
      onClick={() => toggleTheme(mode === "light" ? "dark" : "light")}
      className="flex items-center gap-2 text-base font-medium text-primary-100 dark:text-primaryDark-100"
    >
      {mode === "light" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span>{mode === "light" ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
};
