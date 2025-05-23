"use client";

import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext<any>(null);
export const ModeWrapper = ({ children }: any) => {
  const date = new Date();
  const [mode, setMode] = useState(
    date.getHours() > 6 && date.getHours() < 20 ? "light" : "dark"
  );

  const changeMode = (mode: string) => {
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
