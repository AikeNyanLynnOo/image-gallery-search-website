"use client";

import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { useCallback } from "react";
import { ResponsiveContainer } from "../ResponsiveContainer";
import { bgOverlay300, neutralWhite, primaryTeal } from "@/lib/theme/colors";
import { ModeContext } from "../ModeWrapper";
import { ImageOverlayWithText } from "../atoms/ImageOverlayWithText";
import Image from "next/image";
import ResponsiveGallery from "../ResponsiveGallery";
import {
  formatISOtoDate,
  numberWithCommas,
} from "@/lib/helpers/helperFunctions";
import { CustomTooltip } from "../styledComponents/CustomTooltip";
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
        "sm:px-7": false,
        "md:px-16": false,
        "lg:px-28": false,
        "xl:px-40": false,
        "py-10": true,
        "px-0": true,
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

      <div className="px-0">
        <ResponsiveGallery>
          {collections &&
            collections.length > 0 &&
            collections.map((collection, index) => (
              <ImageOverlayWithText
                linkHref={`/search_results?collection=${collection.id}`}
                key={index}
                imgSrc={collection.cover_photo.urls.regular}
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
