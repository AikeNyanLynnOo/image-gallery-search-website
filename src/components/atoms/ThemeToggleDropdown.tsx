import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ModeContext } from "../ModeWrapper";

export const ThemeToggleDropdown = ({
  themeDropdownOpen,
  setThemeDropdownOpen,
  setUserDropdownOpen,
}: any) => {
  const { mode, changeMode } = useContext(ModeContext);
  const toggleTheme = (newTheme: string) => {
    const newMode = mode === "light" ? "dark" : "light";
    changeMode(newMode);
    setThemeDropdownOpen(false);
  };
  return (
    <div className="hidden md:block relative">
      <button
        id="theme-dropdown-button"
        onClick={(e) => {
          e.stopPropagation();
          setThemeDropdownOpen(!themeDropdownOpen);
          setUserDropdownOpen(false);
        }}
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
      >
        {mode === "light" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
        <span>{mode === "light" ? "Light" : "Dark"}</span>
      </button>
      {themeDropdownOpen && (
        <div
          id="theme-dropdown"
          className="absolute right-0 mt-1 w-40 rounded-md bg-neutralWhite-100 dark:bg-dark-100 shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-1 z-50"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme("light");
            }}
            className={`flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md ${
              mode === "light"
                ? "bg-primaryTeal-100/10 text-primaryTeal-100"
                : "text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
            }`}
          >
            <Sun className="h-4 w-4" />
            <span>Light</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme("dark");
            }}
            className={`flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md ${
              mode === "dark"
                ? "bg-primaryTeal-100/10 text-primaryTeal-100"
                : "text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
            }`}
          >
            <Moon className="h-4 w-4" />
            <span>Dark</span>
          </button>
        </div>
      )}
    </div>
  );
};
