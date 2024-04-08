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
import { ModeContext } from "../ModeWrapper";
import {
  neutralWhite,
  primary,
  primaryBgDark,
  primaryDark,
  primaryTeal,
} from "@/lib/theme/colors";
import ButtonWithIcon from "../atoms/ButtonWithIcon";

export const SourceDropDown = ({
  source,
  dropDownTextVariant,
  changeSource,
  customClasses,
  customStyles,
}) => {
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
            ...customStyles,
          },
        }}
        textVariant={dropDownTextVariant || "btnSMedium"}
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
            minWidth: (customStyles && customStyles.width) || 110,
            textAlign: "center",
            width: (customStyles && customStyles.width) || "auto",
          },
        }}
        open={open}
        onChange={(val) => {}} // for later version
        onClose={() => handleClose()}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => handleClose("Unsplash")}
          sx={{
            py: 2,
            backgroundColor:
              source === "Unsplash" ? primaryBgDark : neutralWhite,
          }}
        >
          <Typography variant={dropDownTextVariant || "btnSRegular"}>
            Unsplash
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("Uploads")}
          sx={{
            py: 2,
            backgroundColor:
              source === "Uploads" ? primaryBgDark : neutralWhite,
          }}
        >
          <Typography variant={dropDownTextVariant || "btnSRegular"}>
            Uploads
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
