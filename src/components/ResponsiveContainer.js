import { clsx } from "clsx";
import { useMemo } from "react";

export const ResponsiveContainer = ({ children, customClasses, scrollRef }) => {
  const containerCLasses = useMemo(() => {
    return clsx({
      relative: true,
      "z-1": true,
      "dark:bg-gray-900": true,
      "text-black-100": true,
      "bg-white": true,
      "px-4": true,
      "dark:text-white": true,
      "sm:px-7": true,
      "md:px-16": true,
      "lg:px-28": true,
      "xl:px-40": true,
      ...customClasses,
    });
  }, [customClasses]);
  return <div className={containerCLasses}>{children}</div>;
};
