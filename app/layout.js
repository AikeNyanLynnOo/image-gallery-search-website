"use client";

import "./globals.css";
import { createContext, useMemo, useState } from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ModeWrapper } from "@/src/components/ModeWrapper";
import { typoSystem } from "@/lib/theme/typoSystem";

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  StyleSheet: "https://fonts.googleapis.com/icon?family=Material+Icons",
};

export default function RootLayout({ children }) {
  const theme = useMemo(
    () =>
      createTheme({
        spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
        components: {
          MuiDivider: {
            styleOverrides: {
              root: {
                color: "#c3c7cdff",
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                height: "24px",
              },
              label: {
                //
              },
              avatar: {
                width: "18px",
                height: "18px",
              },
              sizeCustom: {
                fontSize: "24px",
              },
            },
          },
          MuiMenu: {
            styleOverrides: {
              list: {
                borderRadius: "4px",
              },
            },
          },
          MuiList: {
            styleOverrides: {
              root: {
                borderRadius: "4px",
                padding: 0,
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                "&:hover": {
                  background: "transparent",
                },
              },
            },
          },
          MuiListItemText: {
            styleOverrides: {
              root: {
                //
              },
            },
          },
          MuiListItemIcon: {
            styleOverrides: {
              root: {
                minWidth: "initial",
                margin: 0,
              },
            },
          },
          MuiMenuItem: {
            styleOverrides: {
              root: {
                minWidth: "initial",
                margin: 0,
                fontSize: 12,
                color: "#707987ff",
              },
            },
          },

          MuiIcon: {
            styleOverrides: {
              root: {
                fontSize: 16,
                color: "#707987ff",
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: "#707987ff",
              },
            },
          },
        },
        shape: {
          borderRadius: 4,
        },
        typography: {
          ...typoSystem,
          button: {
            fontSize: "0.875rem", // set font size for button variant
            fontWeight: "600",
            lineHeight: "18px",
            textTransform: "capitalize",
            "&.MuiButton-sizeSmall": {
              fontSize: "0.75rem",
              lineHeight: "16px",
            },
            "&.MuiButton-sizeLarge": {
              fontSize: "1rem",
              lineHeight: "20px",
            },
          },
        },
      }),
    []
  );

  return (
    <html lang="en">
      <body>
        <ModeWrapper>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </StyledEngineProvider>
        </ModeWrapper>
      </body>
    </html>
  );
}