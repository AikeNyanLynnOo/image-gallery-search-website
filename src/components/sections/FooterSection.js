"use client";

import { Box, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { ResponsiveContainer } from "../ResponsiveContainer";
import { CustomTypography } from "../customComponents/CustomTypography";
import { ListContainer } from "../atoms/ListContainer";

export const Footer = ({ customStyles }) => {
  return (
    <ResponsiveContainer
      customClasses={{
        // "shadow-sm": true,
        "sm:px-7": false,
        "md:px-16": false,
        "lg:px-28": false,
        "xl:px-40": false,
        "px-0": true,
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
            rowGap: 4,
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
              height={40}
              width={40}
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
              "md:pr-5": true,
              "pr-0": true,
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
          xs={6}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 4,
            py: 6,
            px: 0,
          }}
        //   textAlign={{
        //     xs: "center",
        //     md: "left",
        //   }}
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
          xs={6}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 4,
            py: 6,
            px: 0,
          }}
        //   textAlign={{
        //     xs: "center",
        //     md: "left",
        //   }}
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
          xs={6}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 4,
            py: 6,
            px: 0,
          }}
        //   textAlign={{
        //     xs: "center",
        //     md: "left",
        //   }}
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
