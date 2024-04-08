import { clsx } from "clsx";
import { useMemo } from "react";

export const CustomChip = ({
  children,
  customClasses,
  label,
  customStyles,
  href,
}) => {
  const chipClasses = useMemo(() => {
    return clsx({
      "cursor-pointer": href,
      "hover:underline": href,
      "select-none": true,
      "text-white": true,
      "dark:text-gray-50": true,
      "bg-primaryTeal-100": true,
      "rounded-full": true,
      "text-sm": true,
      "px-1": true,
      flex: true,
      "items-center": true,
      "mr-1": true,
      ...customClasses,
    });
  }, [customClasses, href]);
  return (
    <span
      className={chipClasses}
      style={{
        ...customStyles,
      }}
    >
      {label}
      {children}
    </span>
  );
};
