"use client";

import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();
export const ModeWrapper = ({ children }) => {
  const [mode, setMode] = useState("system");

  const changeMode = (mode) => {
    setMode(mode);
  };

  useEffect(() => {
    console.log("checking mode", mode);
    switch (mode) {
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        break;
      case "system":
        (new Date().getHours() > 6 &&
          new Date().getHours() < 20 &&
          document.documentElement.classList.remove("dark")) ||
          document.documentElement.classList.add("dark");
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
