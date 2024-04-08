import { Button, Icon, IconButton, Menu, MenuItem } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ModeContext } from "../ModeWrapper";
import { neutralWhite, primaryBgDark, primaryDark } from "@/lib/theme/colors";

export const ModeDropDown = ({ customClasses }) => {
  const { mode, changeMode } = useContext(ModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (mode) => {
    setAnchorEl(null);
    if (!mode) {
      return;
    }
    changeMode(mode);
  };
  return (
    <div>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {mode === "dark" && (
          <DarkModeOutlinedIcon
            sx={{
              color: primaryDark,
            }}
          />
        )}
        {mode === "light" && <LightModeOutlinedIcon />}
      </IconButton>
      <Menu
        id="mode-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiMenu-paper": {
            marginLeft: -2.2,
          },
        }}
        open={open}
        onChange={(val) => {}} // for next version
        onClose={() => handleClose()}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => handleClose("dark")}
          sx={{
            backgroundColor: mode === "dark" ? primaryBgDark : neutralWhite,
          }}
        >
          <DarkModeOutlinedIcon />
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("light")}
          sx={{
            backgroundColor: mode === "light" ? primaryBgDark : neutralWhite,
          }}
        >
          <LightModeOutlinedIcon />
        </MenuItem>
      </Menu>
    </div>
  );
};
