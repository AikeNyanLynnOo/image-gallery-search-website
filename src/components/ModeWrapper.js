"use client";

import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();
export const ModeWrapper = ({ children }) => {
  const date = new Date();
  const [mode, setMode] = useState(
    date.getHours() > 6 && date.getHours() < 20 ? "light" : "dark"
  );

  const changeMode = (mode) => {
    setMode(mode);
  };

  useEffect(() => {
    switch (mode) {
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [mode]);

  return (
    <ModeContext.Provider
      value={{
        mode,
        changeMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};
