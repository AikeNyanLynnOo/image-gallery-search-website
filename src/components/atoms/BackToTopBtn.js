"use client";

import { clsx } from "clsx";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export const BackToTopBtn = ({ customClasses }) => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollFunction = useCallback(() => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, []);
  const backToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  }, [scrollFunction]);

  const btnCLasses = useMemo(() => {
    return clsx({
      fixed: true,
      "z-20": true,
      "bottom-5": true,
      "end-5": true,
      hidden: !showBtn ? true : false,
      "rounded-full": true,
      "bg-primaryTeal-100": true,
      "p-3": true,
      "text-xs": true,
      "font-medium": true,
      uppercase: true,
      "leading-tight": true,
      "text-white": true,
      "shadow-md": true,
      transition: true,
      "duration-150": true,
      "ease-in-out": true,
      "hover:bg-primaryTeal-200": true,
      "hover:shadow-lg": true,
      "focus:bg-primaryTeal-200": true,
      "focus:shadow-lg": true,
      "focus:outline-none": true,
      "focus:ring-0": true,
      "active:bg-primaryTeal-200": true,
      ...customClasses,
    });
  }, [customClasses, showBtn]);

  return (
    <button onClick={backToTop} type="button" className={btnCLasses}>
      <span className="[&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </span>
    </button>
  );
};
