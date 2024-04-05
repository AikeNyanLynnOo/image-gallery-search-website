import { neutralWhite } from "@/lib/theme/colors";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

export const ImageOverlayWithText = ({
  children,
  text,
  textVariant,
  imgSrc,
  customImgStyles,
  customTextStyles,
  customStyles,
  customClasses,
}) => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const getTitleVariant = useCallback((xl, lg, md, sm) => {
    if (xl) {
      //isScreenLargerThan1536
      return "subheadline1Regular";
    } else if (lg) {
      // isScreenLargerThan1200
      return "subheadline1Regular";
    } else if (md) {
      // isScreenLargerThan900
      return "subheadline1Regular";
    } else if (sm) {
      // isScreenLargerThan600
      return "subheadline2Regular";
    } else {
      return "subheadline2Regular";
    }
  }, []);

  const router = useRouter();
  const imageOverlayClasses = useMemo(() => {
    return clsx({
      "select-none": true,
      relative: true,
      "rounded-lg": true,
      "overflow-hidden": true,
      "h-20": true,
      "w-48": true,
      "shadow-sm": true,
      ...customClasses,
    });
  }, [customClasses]);
  return (
    <Link
      href={"/search_results"} // add slugs for collection/search result
      style={{
        ...customStyles,
      }}
    >
      <div className={imageOverlayClasses}>
        <Image
          src={imgSrc}
          height={1000}
          width={1000}
          alt="landing_img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            ...customImgStyles,
          }}
        />
        <Typography
          sx={{
            width: "100%",
            height: "100%",
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            color: neutralWhite,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
          variant={getTitleVariant(xl, lg, md, sm)}
        >
          {text}
        </Typography>

        {children}
      </div>
    </Link>
  );
};
