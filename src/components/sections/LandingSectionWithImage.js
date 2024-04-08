"use client";

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { useCallback } from "react";
import { LandingSectionSearchInput } from "../inputs/LandingSectionSearchInput";
import { ResponsiveContainer } from "../ResponsiveContainer";
import { neutralWhite, primary, primaryDark } from "@/lib/theme/colors";
import ButtonWithIcon from "../atoms/ButtonWithIcon";
import { ModeContext } from "../ModeWrapper";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export const LandingSectionWithImage = ({
  imgSrc,
  topics,
  customImgStyles,
  customStyles,
  children,
  customLayoutStyles,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const calculateSpacing = useCallback((xl, lg, md, sm) => {
    if (xl) {
      //isScreenLargerThan1536
      return 45; // 45%
    } else if (lg) {
      // isScreenLargerThan1200
      return 50; // 50%
    } else if (md) {
      // isScreenLargerThan900
      return 60; // 60%
    } else if (sm) {
      // isScreenLargerThan600
      return 80; // 80%
    } else {
      return 95; // 90%
    }
  }, []);

  const getTitleVariant = useCallback((xl, lg, md, sm) => {
    if (xl) {
      //isScreenLargerThan1536
      return "headline1Semibold";
    } else if (lg) {
      // isScreenLargerThan1200
      return "headline1Semibold";
    } else if (md) {
      // isScreenLargerThan900
      return "headline1Semibold";
    } else if (sm) {
      // isScreenLargerThan600
      return "headline2Semibold";
    } else {
      return "headline2Regular";
    }
  }, []);

  const { mode, changeMode } = useContext(ModeContext);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [source, setSource] = useState("Unsplash");

  const changeSource = (updateVal) => {
    setSource(updateVal);
  };

  const handleChange = (value) => {
    setSearchTerm(value);
  };

  const handleInputFocus = () => {
    setShowCloseIcon(true);
  };

  const handleInputBlur = () => {
    setShowCloseIcon(false);
  };

  const handleClearInput = () => {
    setSearchTerm("");
  };

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.delete("page");
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = () => {
    if (searchTerm.trim().length) {
      router.push(`/search_results?${createQueryString("query", searchTerm)}`);
    }
  };

  return (
    <ResponsiveContainer
      customClasses={{
        // "border-b": true,
        // "shadow-sm": true,
        "sm:px-7": true,
        "md:px-5": true,
        "lg:px-28": false,
        "xl:px-40": false,
        "pb-5": true,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          borderRadius: 8,
          border: `1px solid ${primary}`,
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            position: "absolute",
            left: "50%",
            bottom: "60%",
            width: `${calculateSpacing(xl, lg, md, sm)}%`,
            transform: "translateX(-50%)",
            color: neutralWhite,
          }}
          variant={getTitleVariant(xl, lg, md, sm)}
        >
          Responsive Image Gallery
        </Typography>
        <Image
          src={imgSrc}
          height={100}
          width={1000}
          alt="landing_img"
          style={{
            // border: "1px solid red",
            width: "100%",
            height: "300px",
            objectFit: "cover",

            ...customImgStyles,
          }}
        />

        <LandingSectionSearchInput
          //   minHeight={30}
          inputValue={searchTerm}
          placeholder={"Placeholder"}
          type={"text"}
          textChange={handleChange}
          customInputStyles={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: `${calculateSpacing(xl, lg, md, sm)}%`,
            transform: "translate(-50%,-50%)",
          }}
          //   fullWidth
          handleClearInput={handleClearInput}
          closeIconControl={{
            handleInputFocus: handleInputFocus,
            handleInputBlur: handleInputBlur,
            showCloseIcon: showCloseIcon,
          }}
          source={source}
          changeSource={changeSource}
          handleGo={handleSearch}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            position: "absolute",
            left: "50%",
            top: "57%",
            width: `${calculateSpacing(xl, lg, md, sm)}%`,
            transform: "translateX(-50%)",
          }}
        >
          {topics &&
            topics.length > 0 &&
            topics.slice(0, 10).map((topics, index) => (
              <Link key={index} href={`/search_results?query=${topics.slug}`}>
                <ButtonWithIcon
                  buttonText={topics.title}
                  variant="outlined"
                  customStyles={{
                    "&.MuiButton-outlined": {
                      m: 1,
                      border: "none",
                      color: mode === "dark" ? primaryDark : neutralWhite,
                      px: 3,
                      borderRadius: 10,
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                  textVariant={"btnXsRegular"}
                  icon={"search"}
                  iconPosition={"start"}
                  customIconStyles={{
                    fontSize: 16,
                    color: mode === "dark" ? primaryDark : neutralWhite,
                  }}
                />
              </Link>
            ))}
        </Box>
      </Grid>
    </ResponsiveContainer>
  );
};
