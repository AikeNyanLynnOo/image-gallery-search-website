import {
  Button,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Fragment, useContext, useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { ModeContext } from "./ModeWrapper";
import {
  neutralWhite,
  primary,
  primaryBgDark,
  primaryDark,
  primaryTeal,
} from "@/lib/theme/colors";
import ButtonWithIcon from "./atoms/ButtonWithIcon";

export const SourceDropDown = ({ source, changeSource, customClasses }) => {
  const { mode, changeMode } = useContext(ModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (source) => {
    setAnchorEl(null);
    if (!source) {
      return;
    }
    changeSource(source);
  };
  return (
    <div>
      {/* <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      ></IconButton> */}

      <ButtonWithIcon
        handleClick={handleClick}
        buttonText={source}
        variant="outlined"
        customStyles={{
          "&.MuiButton-outlined": {
            border: `0.5px solid ${mode === "dark" ? primaryDark : primary}`,
            color: neutralWhite,
            px: 3,
            height: 48,
            minWidth: 110,
            ml: 0.5,
            borderRadius: 9,
            backgroundColor: primaryTeal,
          },
        }}
        textVariant={"btnSMedium"}
        // icon={"file_upload_outlined"}
        icon={"expand_more"}
        iconPosition={"end"}
        customIconStyles={{
          fontSize: 18,
          color: neutralWhite,
        }}
      />

      <Menu
        id="mode-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiMenu-paper": {
            mt: 0.6,
            minWidth: 110,
            textAlign: "center",
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
          onClick={() => handleClose("Unsplash")}
          sx={{
            py: 2,
            justifyContent: "center",
            backgroundColor:
              source === "Unsplash" ? primaryBgDark : neutralWhite,
          }}
        >
          <Typography variant="btnSRegular">Unsplash</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("Uploads")}
          sx={{
            py: 2,
            justifyContent: "center",
            backgroundColor:
              source === "Uploads" ? primaryBgDark : neutralWhite,
          }}
        >
          <Typography variant="btnSRegular">Uploads</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
