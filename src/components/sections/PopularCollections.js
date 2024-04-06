"use client";

import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useCallback } from "react";
import { ResponsiveContainer } from "../ResponsiveContainer";
import {
  bgOverlay300,
  neutralWhite,
  primary,
  primaryDark,
  primaryTeal,
} from "@/lib/theme/colors";
import { ModeContext } from "../ModeWrapper";
import { ImageOverlayWithText } from "../atoms/ImageOverlayWithText";
import Image from "next/image";
// import { ResponsiveGallery } from "../ResponsiveGallery";
import ResponsiveGallery from "../ResponsiveGallery";
import {
  formatISOtoDate,
  numberWithCommas,
} from "@/lib/helpers/helperFunctions";
import { CustomTooltip } from "../styledComponents/CustomTooltip";
import { CustomLoading } from "../customComponents/CustomLoading";
import { CustomTypography } from "../customComponents/CustomTypography";

export const PopularCollections = ({
  collections,
  customStyles,
  children,
  customCollectionCardStyles,
}) => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const getTitleVariant = useCallback((xl, lg, md, sm) => {
    if (xl) {
      //isScreenLargerThan1536
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
        // "border-b": true,
        // "shadow-sm": true,
        "sm:px-7": true,
        "md:px-5": true,
        "lg:px-28": false,
        "xl:px-40": false,
        "py-10": true,
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
          Suggested collections for you
        </Typography>
      </Grid>
      {/* <Grid container> */}
      {/* {[
          {
            text: "Wallpapers",
            imgSrc: "/section_imgs/landing.jpeg",
          },
          {
            text: "Wallpapers",
            imgSrc: "/section_imgs/landing.jpeg",
          },
          {
            text: "Wallpapers",
            imgSrc: "/section_imgs/landing.jpeg",
          },
          {
            text: "Wallpapers",
            imgSrc: "/section_imgs/landing.jpeg",
          },
          {
            text: "Wallpapers",
            imgSrc: "/section_imgs/landing.jpeg",
          },
          {
            text: "Wallpapers",
            imgSrc: "/section_imgs/landing.jpeg",
          },
        ].map((collection, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              my: 2,
              px: 3,
            }}
          >
            <ImageOverlayWithText
              key={index}
              imgSrc={collection.imgSrc}
              customClasses={{
                "w-full": true,
                "h-56": true,
                "rounded-xl": true,
                group: true,
              }}
              customImgStyles={{
                zIndex: "0",
              }}
            >
              <Typography
                sx={{
                  width: "50%",
                  height: "auto",
                  p: 2,
                  position: "absolute",
                  left: 5,
                  top: 5,
                  color: neutralWhite,
                }}
                variant={"btnXsMedium"}
              >
                10,000 Photos
              </Typography>
              <Typography
                sx={{
                  width: "50%",
                  height: "auto",
                  p: 2,
                  position: "absolute",
                  right: 5,
                  textAlign: "right",
                  top: 5,
                  color: neutralWhite,
                }}
                variant={"btnXsSemibold"}
              >
                Updated : 05/04/2024
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  height: "auto",
                  p: 2,
                  position: "absolute",
                  left: 5,
                  bottom: 5,
                  color: neutralWhite,
                }}
                variant={"btnSRegular"}
              >
                I like a man with a beard.
              </Typography>
              <Image
                src={"/vercel.svg"}
                alt="user"
                height={50}
                width={50}
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  objectFit: "contain",
                  position: "absolute",
                  right: 10,
                  bottom: 10,
                  border: `1px solid ${primaryTeal}`,
                }}
              />

              <div className="slide-in-top h-full w-full hidden group-hover:flex text-white bg-overlay-500 items-center justify-center absolute top-0 bottom-0">
                <Typography
                  variant={"subheadline2Regular"}
                  className="tracking-in-expand"
                >
                  100 Likes
                </Typography>
              </div>
            </ImageOverlayWithText>
          </Grid>
        ))} */}
      {/* </Grid> */}

      <div className="px-0 lg:px-3">
        <ResponsiveGallery>
          {collections &&
            collections.length > 0 &&
            collections.map((collection, index) => (
              <ImageOverlayWithText
                key={index}
                imgSrc={collection.cover_photo.urls.regular}
                customClasses={{
                  "w-full": true,
                  "h-56": true,
                  "rounded-xl": true,
                  group: true,
                }}
                customImgStyles={{
                  zIndex: "0",
                  maxHeight: "500px",
                  minHeight: "350px",
                  width: "100%",
                }}
              >
                {/* <Typography
                sx={{
                  width: "50%",
                  height: "auto",
                  p: 2,
                  position: "absolute",
                  left: 5,
                  top: 5,
                  color: neutralWhite,
                }}
                variant={"btnXsMedium"}
              >
                
              </Typography> */}
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
                  Updated : {formatISOtoDate(collection.last_collected_at, "/")}
                </CustomTypography>
                <Typography
                  sx={{
                    width: "auto",
                    maxWidth: "80%",
                    height: "auto",
                    p: 2,
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    color: neutralWhite,
                    backgroundColor: bgOverlay300,
                  }}
                  variant={"btnSRegular"}
                >
                  {collection.title}
                </Typography>

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
                          {collection.user.username || ""}
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
                          {collection.user.total_collections || ""} collections
                        </CustomTypography>
                        <CustomTypography
                          component="p"
                          variant="btnXsRegular"
                          sx={{
                            mb: 1,
                            textTransform: "capitalize",
                          }}
                        >
                          {numberWithCommas(collection.user.total_likes) || ""}{" "}
                          likes
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
                        src={collection.user.profile_image.medium}
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
                    {numberWithCommas(collection.total_photos)} Photos
                  </Typography>
                </div>
              </ImageOverlayWithText>
            ))}
        </ResponsiveGallery>
      </div>
    </ResponsiveContainer>
  );
};
