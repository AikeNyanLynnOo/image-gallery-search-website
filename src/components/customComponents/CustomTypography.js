import { Typography } from "@mui/material";
import { clsx } from "clsx";
import { useMemo } from "react";
export const CustomTypography = (props) => {
  const { customClasses, wrapperStyles, children, ...typoProps } = props;
  const typoClasses = useMemo(() => {
    return clsx({
      "select-none": true,
      "text-primary-100": true,
      "dark:text-neutralWhite-100": true,
      ...customClasses,
    });
  }, [customClasses]);
  return (
    <div
      className={typoClasses}
      style={{
        ...wrapperStyles,
      }}
    >
      <Typography {...typoProps}>{children}</Typography>
    </div>
  );
};
