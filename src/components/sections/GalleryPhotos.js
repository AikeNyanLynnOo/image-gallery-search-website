"use client";

import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { ResponsiveContainer } from "../ResponsiveContainer";
import {
  bgDark100,
  bgOverlay300,
  neutralWhite,
  primary,
  primaryDark,
  primaryTeal,
} from "@/lib/theme/colors";
import { ModeContext } from "../ModeWrapper";
import { ImageOverlayWithText } from "../atoms/ImageOverlayWithText";
import Image from "next/image";
import ResponsiveGallery from "../ResponsiveGallery";
import {
  formatISOtoDate,
  numberWithCommas,
  paramsToObject,
  prepareSlides,
  sleep,
} from "@/lib/helpers/helperFunctions";
import { CustomTooltip } from "../styledComponents/CustomTooltip";
import { CustomLoading } from "../customComponents/CustomLoading";
import { CustomTypography } from "../customComponents/CustomTypography";
import ButtonWithIcon from "../atoms/ButtonWithIcon";
import { CustomChip } from "../customComponents/CustomChip";
import { OrderByDropDown } from "../dropdowns/OrderByDropDown";
import { LandingSectionSearchInput } from "../inputs/LandingSectionSearchInput";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  getPhotosRequest,
  getPhotosSuccess,
  resetPhoto,
} from "@/lib/features/photo/photoSlice";
import useLightbox from "../customHooks.js/useLightBox";

export const GalleryPhotos = ({
  totalCount,
  totalPagesCount,
  results,
  customStyles,
  children,
  customPhotoCardStyles,
}) => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const refer = searchParams.get("refer");

  // redux
  const { page, photos, total, total_pages, isSuccess, loading, error } =
    useSelector((state) => state.photo);

  const [orderBy, setOrderBy] = useState(
    searchParams.get("order_by") || "relevant"
  );

  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");
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

  const getTitleVariant = useCallback((xl, lg, md, sm) => {
    if (xl) {
      //isScreenLargerThan1536
      return "headline4Regular";
    } else if (lg) {
      // isScreenLargerThan1200
      return "headline4Regular";
    } else if (md) {
      // isScreenLargerThan900
      return "headline4Regular";
    } else if (sm) {
      // isScreenLargerThan600
      return "headline5Regular";
    } else {
      return "headline5Regular";
    }
  }, []);

  const { mode, changeMode } = useContext(ModeContext);

  const fetchData = ({ restart, collection }) => {
    const params = {
      query: searchTerm,
      per_page: 10,
      collection: collection || "",
      order_by: orderBy,
    };

    console.log("Searching...", JSON.stringify(params));
    dispatch(
      getPhotosRequest({
        params,
        ENV: {
          API_URL: process.env.NEXT_PUBLIC_API_URL,
          ACCESS_ID: process.env.NEXT_PUBLIC_ACCESS_ID,
        },
        restart,
      })
    );
  };

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.delete("collection");
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const handleSearch = async () => {
    if (searchTerm.trim().length) {
      router.push(`/search_results?${createQueryString("query", searchTerm)}`);
      fetchData({ restart: true });
    }
  };

  const changeOrderBy = (updateVal) => {
    setOrderBy(updateVal);
    if (searchTerm.trim().length) {
      router.push(
        `/search_results?${createQueryString("order_by", updateVal)}`
      );
      fetchData({ restart: true });
    }
  };

  const handleScroll = useCallback((e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight =
      e.target.documentElement.scrollTop + window.innerHeight;
    if (currentHeight + 1 >= scrollHeight) {
      fetchData({ restart: false });
    }
  }, []);

  // useEffects

  //   useEffect(() => {
  //     console.log("Setting>>>", {
  //       total: totalCount,
  //       totalPages: totalPagesCount,
  //       photos: results,
  //     });
  //     dispatch(
  //       getPhotosSuccess({
  //         total: totalCount,
  //         totalPages: totalPagesCount,
  //         photos: results,
  //         page: 1,
  //       })
  //     );
  //   }, [totalCount, totalPagesCount, results]);

  useEffect(() => {
    fetchData({ restart: true, collection: searchParams.get("collection") });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { openLightbox, renderLightbox } = useLightbox();
  return (
    <ResponsiveContainer
      customClasses={{
        // "border-b": true,
        // "shadow-sm": true,
        "sm:px-7": false,
        "md:px-16": false,
        "lg:px-28": false,
        "xl:px-40": false,
        "py-10": true,
        "px-0": true,
      }}
    >
      <Grid
        container
        sx={{
          px: 1,
          py: 3,
          mb: 5,
          position: "sticky",
          top: 64,
          zIndex: 20,
          //   backgroundColor: mode === "dark" ? bgDark100 : neutralWhite,
          backgroundColor: "inherit",
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          md={5}
          lg={7}
          sx={{
            mb: 5,
          }}
        >
          <Typography
            component={"h2"}
            variant={getTitleVariant(xl, lg, md, sm)}
          >
            <span className="font-semibold">{numberWithCommas(total)}</span>{" "}
            results found
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          lg={5}
          sx={{
            display: "flex",
          }}
          justifyContent={{
            xs: "start",
            sm: "end",
          }}
          columnGap={{
            xs: 1,
            sm: 3,
          }}
        >
          <LandingSectionSearchInput
            inputValue={searchTerm}
            placeholder={"Placeholder"}
            type={"text"}
            textChange={handleChange}
            customInputStyles={{
              flex: 1,
              height: 40,
              minWidth: 100,
              border: `0.5px solid ${primaryTeal}`,
              "& .MuiInputAdornment-positionEnd": {
                mr: 0.3,
              },
            }}
            customStartAdornmentStyles={{
              height: 38,
              ml: 0.2,
              minWidth: 50,
              width: 90,
            }}
            dropDownTextVariant="btnXsRegular"
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

          <OrderByDropDown orderBy={orderBy} changeOrderBy={changeOrderBy} />
        </Grid>
      </Grid>

      <div className="px-0 min-h-screen">
        <ResponsiveGallery>
          {photos &&
            photos.length > 0 &&
            photos.map((photo, index) => (
              <ImageOverlayWithText
                handleClick={openLightbox}
                handle
                key={index}
                imgSrc={photo.urls.regular}
                customClasses={{
                  "w-full": true,
                  "h-56": true,
                  "rounded-xl": true,
                  group: true,
                }}
                customImgStyles={{
                  maxHeight: "500px",
                  minHeight: "350px",
                  width: "100%",
                }}
                customImgClasses="hover:scale-125 transform transition ease-in-out delay-150 hover:-translate-y-1 duration-1000"
              >
                <CustomTypography
                  wrapperStyles={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                  sx={{
                    p: 2,
                    textAlign: "right",
                    backgroundColor: bgOverlay300,
                  }}
                  customClasses={{
                    "text-primary-100": false,
                    "text-neutralWhite-100": true,
                  }}
                  variant={"btnXsSemibold"}
                >
                  Updated : {formatISOtoDate(photo.updated_at, "/")}
                </CustomTypography>

                <Box
                  sx={{
                    display: "flex",
                    width: "auto",
                    maxWidth: "80%",
                    flexWrap: "wrap",
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    p: 2,
                  }}
                >
                  {photo.tags &&
                    photo.tags.length > 0 &&
                    photo.tags.map((tag, index) => {
                      if (tag.title.length < 2) {
                        return;
                      }
                      return (
                        <CustomChip
                          key={index}
                          customClasses={{
                            "leading-6": true,
                            "py-1": true,
                            "px-3": true,
                            "my-1": true,
                          }}
                        >
                          <Typography
                            variant="btnXsRegular"
                            sx={{
                              color: neutralWhite,
                            }}
                          >
                            {tag.title}
                          </Typography>
                        </CustomChip>
                      );
                    })}
                </Box>

                <div
                  style={{
                    position: "absolute",
                    right: 10,
                    bottom: 10,
                    zIndex: 10,
                  }}
                >
                  <CustomTooltip
                    arrow
                    title={
                      <div className="text-right">
                        <CustomTypography
                          component="p"
                          variant="btnXsMedium"
                          sx={{
                            textTransform: "capitalize",
                            textAlign: "center",
                          }}
                        >
                          {photo.user.username || ""}
                        </CustomTypography>
                        <Divider
                          sx={{
                            backgroundColor: primaryTeal,
                            my: 2,
                          }}
                        />
                        <CustomTypography
                          component="p"
                          variant="btnXsRegular"
                          sx={{
                            mb: 1,
                            textTransform: "capitalize",
                          }}
                        >
                          {numberWithCommas(photo.user.total_photos) || ""}{" "}
                          photos
                        </CustomTypography>
                        <CustomTypography
                          component="p"
                          variant="btnXsRegular"
                          sx={{
                            mb: 1,
                            textTransform: "capitalize",
                          }}
                        >
                          {numberWithCommas(photo.user.total_likes) || ""} likes
                        </CustomTypography>
                      </div>
                    }
                    placement="top-end"
                    sx={{
                      zIndex: 10,
                    }}
                  >
                    <div>
                      <Image
                        src={photo.user.profile_image.medium}
                        alt="user"
                        height={50}
                        width={50}
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          objectFit: "contain",
                          border: `1px solid ${primaryTeal}`,
                        }}
                      />
                    </div>
                  </CustomTooltip>
                </div>

                <div className="slide-in-top h-full w-full hidden group-hover:flex text-white bg-overlay-500 items-center justify-center absolute top-0 bottom-0 z-0">
                  <Typography
                    variant={"subheadline2Regular"}
                    className="tracking-in-expand"
                  >
                    {numberWithCommas(photo.likes)} Likes
                  </Typography>
                </div>
              </ImageOverlayWithText>
            ))}
        </ResponsiveGallery>

        {/* light box */}
        {renderLightbox({ slides: prepareSlides() })}
      </div>
    </ResponsiveContainer>
  );
};
