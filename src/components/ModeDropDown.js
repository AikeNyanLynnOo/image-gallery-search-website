import { Button, Icon, IconButton, Menu, MenuItem } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { ModeContext } from "./ModeWrapper";

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
        {mode === "dark" && <DarkModeOutlinedIcon />}
        {mode === "light" && <LightModeOutlinedIcon />}
        {mode === "system" && <SettingsSuggestOutlinedIcon />}
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
        onChange={(val) => {
          console.log("value>>", val);
        }}
        onClose={() => handleClose()}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => handleClose("dark")}
          sx={{
            backgroundColor: mode === "dark" ? "#F5F5F5" : "#FFFFFF",
          }}
        >
          <DarkModeOutlinedIcon />
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("light")}
          sx={{
            backgroundColor: mode === "light" ? "#F5F5F5" : "#FFFFFF",
          }}
        >
          <LightModeOutlinedIcon />
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("system")}
          sx={{
            backgroundColor: mode === "system" ? "#F5F5F5" : "#FFFFFF",
          }}
        >
          <SettingsSuggestOutlinedIcon />
        </MenuItem>
      </Menu>
    </div>
  );
};
