"use client";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import { useCallback } from "react";
import { ResponsiveContainer } from "../ResponsiveContainer";
import { neutralWhite, primary, primaryDark } from "@/lib/theme/colors";
import ButtonWithIcon from "../atoms/ButtonWithIcon";
import { ModeContext } from "../ModeWrapper";
import { ImageOverlayWithText } from "../atoms/ImageOverlayWithText";
import { ScrollTabs } from "../ScrollTabs";

export const TopicsSection = ({
  topics,
  imgSrc,
  customImgStyles,
  customStyles,
  children,
  customLayoutStyles,
}) => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const getTitleVariant = useCallback((xl, lg, md, sm) => {
    if (xl) {
      // isScreenLargerThan1536
      return "headline2Regular";
    } else if (lg) {
      // isScreenLargerThan1200
      return "headline2Regular";
    } else if (md) {
      // isScreenLargerThan900
      return "headline2Regular";
    } else if (sm) {
      // isScreenLargerThan600
      return "headline3Regular";
    } else {
      return "headline3Regular";
    }
  }, []);

  const { mode, changeMode } = useContext(ModeContext);

  return (
    <ResponsiveContainer
      customClasses={{
        "sm:px-7": true,
        "md:px-5": true,
        "lg:px-28": false,
        "xl:px-40": false,
        "py-12": true,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          mb: 10,
        }}
      >
        <Typography
          component={"h2"}
          variant={getTitleVariant(xl, lg, md, sm)}
          textAlign={"center"}
        >
          Choose any topics you want to browse
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ScrollTabs tabs={topics} />
      </Grid>
    </ResponsiveContainer>
  );
};
