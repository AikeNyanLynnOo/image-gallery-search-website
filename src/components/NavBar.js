"use client";
import { useContext, useMemo } from "react";
import { clsx } from "clsx";
import { NavItem } from "./atoms/NavItemComponent";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { ModeContext } from "./ModeWrapper";
import Image from "next/image";
import { ModeDropDown } from "./dropdowns/ModeDropDown";
import { ResponsiveContainer } from "./ResponsiveContainer";
import ButtonWithIcon from "./atoms/ButtonWithIcon";
import { neutralWhite, primaryTeal } from "@/lib/theme/colors";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { BorderColor } from "@mui/icons-material";

export const NavBar = ({
  children,
  customNavClasses,
  customMenuIconClasses,
}) => {
  const { mode, changeMode } = useContext(ModeContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navClasses = useMemo(() => {
    return clsx({
      "text-ownBlack-100": true,
      flex: true,
      "h-16": true,
      sticky: true,
      "top-0": true,
      "bg-transparent": true,
      "items-center": true,
      "justify-end": true,
      "sm:justify-between": true,
      ...customNavClasses,
    });
  }, [customNavClasses]);

  return (
    <ResponsiveContainer
      customClasses={{
        "sm:px-7": true,
        "md:px-5": true,
        "lg:px-28": false,
        "xl:px-40": false,
        sticky: true,
        "top-0": true,
        "z-20": true,
      }}
    >
      <nav className={navClasses}>
        <Link href={"/"} className="hidden sm:block">
          <Typography
            variant="subheadline2Regular"
            sx={{
              fontWeight: 700,
            }}
          >
            Gallery
          </Typography>
        </Link>

        <div className="flex items-center h-full w-fit absolute left-5 sm:left-1/2 top-0 -translate-x-1/2">
          <NavItem
            link={{
              href: "/",
            }}
          >
            <Image src={"/logo.png"} width={32} height={32} alt="logo" />
          </NavItem>
        </div>
        <div className="flex gap-x-5 items-center">
          <ModeDropDown />
          <ButtonWithIcon
            handleClick={handleClickOpen}
            buttonText={"Sign in"}
            variant="outlined"
            customStyles={{
              "&.MuiButton-outlined": {
                // border: "none",
                color: primaryTeal,
                borderColor: primaryTeal,
                px: 5,
                py: 2,
                borderRadius: 10,
                // backgroundColor: primaryTeal,
              },
            }}
            textVariant={"btnSMedium"}
            // icon={"file_upload_outlined"}
            icon={"person"}
            iconPosition={"start"}
            customIconStyles={{
              fontSize: 16,
              color: primaryTeal,
            }}
          />
          {/* <ButtonWithIcon
            handleClick={handleClickOpen}
            buttonText={"Upload"}
            variant="outlined"
            customStyles={{
              "&.MuiButton-outlined": {
                border: "none",
                color: neutralWhite,
                px: 5,
                py: 2,
                borderRadius: 10,
                backgroundColor: primaryTeal,
              },
            }}
            textVariant={"btnSMedium"}
            // icon={"file_upload_outlined"}
            icon={"add_photo_alternate_outlined"}
            iconPosition={"start"}
            customIconStyles={{
              fontSize: 16,
              color: neutralWhite,
            }}
          /> */}
        </div>
      </nav>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, py: 3, borderBottom: "1px solid #DDDDDD" }}
          id="customized-dialog-title"
        >
          Upcoming feature
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Typography>
            This feature is under development. We&apos;ll be right back.
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            px: 3,
          }}
        >
          <Button
            variant="contained"
            autoFocus
            onClick={handleClose}
            sx={{
              backgroundColor: primaryTeal,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: primaryTeal,
              },
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </ResponsiveContainer>
  );
};
