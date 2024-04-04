"use client";

import { useEffect, useMemo, useRef } from "react";
import { clsx } from "clsx";
import { darkIcon, lightIcon } from "../assets/svgs";

export const SwitchBtn = () => {
  const switchRef = useRef(null);

  const toggleTheme = () => {
    // switchTheme();
  };
  //   useEffect(() => {
  //     if (!isLight) {
  //       //   setTimeout(() => {
  //       switchRef.current.innerHTML = darkIcon;
  //       //   }, 0);
  //     } else {
  //       //   setTimeout(() => {
  //       switchRef.current.innerHTML = lightIcon;
  //       //   }, 0);
  //     }
  //   }, [isLight]);

  const btnClasses = useMemo(() => {
    return clsx(
      "flex",
      "h-6",
      "w-12",
      "items-center",
      "rounded-full",
      "bg-white",
      "transition",
      "duration-300",
      "focus:outline-none"
    );
  }, []);

  //   const divInsideBtnClasses = useMemo(() => {
  //     return clsx(
  //       "relative",
  //       "h-8",
  //       "w-8",
  //       "transform",
  //       "rounded-full",
  //       "p-1",
  //       "transition",
  //       "duration-500",
  //       [
  //         {
  //           "bg-ownMint-200": isLight,
  //         },
  //         { "bg-ownBlack-100": !isLight },
  //         {
  //           "translate-x-4": !isLight,
  //         },
  //       ]
  //     );
  //   }, [isLight]);

  return (
    <button
      className={btnClasses}
      onClick={toggleTheme}
      style={{
        boxShadow:
          "inset rgba(0, 0, 0, 0.2) 0px 0px 4px 0px, rgba(0, 0, 0, .3) 0px 3px 1px -2px",
      }}
    >
      <div ref={switchRef}></div>
    </button>
  );
};
