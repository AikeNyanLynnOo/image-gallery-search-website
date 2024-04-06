"use client";

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import { neutralWhite, primary } from "@/lib/theme/colors";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { ModeContext } from "../ModeWrapper";
import { ResponsiveContainer } from "../ResponsiveContainer";
import { CustomTypography } from "../customComponents/CustomTypography";
import { ListContainer } from "../atoms/ListContainer";

export const Footer = ({ customStyles }) => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const { mode, changeMode } = useContext(ModeContext);

  return (
    <ResponsiveContainer
      customClasses={{
        // "border": true,
        // "shadow-sm": true,
        "sm:px-7": false,
        "md:px-16": false,
        "lg:px-28": false,
        "xl:px-40": false,
        "px-2": true,
        "py-12": true,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            rowGap: 4,
            p: 4,
          }}
        >
          <Box
            display={{
              display: "flex",
              columnGap: 8,
              alignItems: "center",
            }}
          >
            <Image
              src="/logo.png"
              height={56}
              width={56}
              alt="logo_at_footer"
            />
            <CustomTypography
              variant="subheadline1Semibold"
              customClasses={{
                "text-primary-100": false,
              }}
            >
              Gallery
            </CustomTypography>
          </Box>

          <CustomTypography
            variant="btnXsRegular"
            customClasses={{
              "text-primary-100": false,
            }}
          >
            We server over 5 Million of high quality stock images shared by our
            talented community.
          </CustomTypography>
          <div className="flex items-center">
            {[
              {
                Icon: ({ classes }) => <FacebookIcon className={classes} />,
                link: "",
              },
              {
                Icon: ({ classes }) => <InstagramIcon className={classes} />,
                link: "",
              },
              {
                Icon: ({ classes }) => <PinterestIcon className={classes} />,
                link: "",
              },
              {
                Icon: ({ classes }) => <XIcon className={classes} />,
                link: "",
              },
            ].map(({ Icon, link }, index) => (
              <Link key={index} href={link}>
                <Icon classes="text-primaryDark-100 dark:text-white text-2xl hover:text-primaryTeal-100 hover:dark:text-primaryTeal-100 hover:shadow-xl mr-2" />
              </Link>
            ))}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            rowGap: 4,
            p: 4,
          }}
        >
          <CustomTypography
            variant="subheadline3Regular"
            customClasses={{
              "text-primary-100": false,
            }}
          >
            Community
          </CustomTypography>
          <ListContainer
            listItems={["Blog", "Collections", "Forum", "Creators", "Studios"]}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            rowGap: 4,
            p: 4,
          }}
        >
          <CustomTypography
            variant="subheadline3Regular"
            customClasses={{
              "text-primary-100": false,
            }}
          >
            Learn More
          </CustomTypography>
          <ListContainer
            listItems={[
              "About us",
              "FAQ",
              "License Policy",
              "Privacy Policy",
              "Terms of Service",
              "API",
            ]}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            rowGap: 4,
            p: 4,
          }}
        >
          <CustomTypography
            variant="subheadline3Regular"
            customClasses={{
              "text-primary-100": false,
            }}
          >
            Discover
          </CustomTypography>
          <ListContainer
            listItems={[
              "Editor's Choice",
              "Popular Images",
              "Popular Searches",
              "Trending",
            ]}
          />
        </Grid>
      </Grid>
    </ResponsiveContainer>
  );
};
