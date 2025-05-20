"use client";

import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ModeContext } from "../ModeWrapper";

export function ThemeToggle() {
  const { mode, changeMode } = useContext(ModeContext);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    changeMode(newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 transition-colors hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
      aria-label={
        mode === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      {mode === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span>{mode === "light" ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
}
