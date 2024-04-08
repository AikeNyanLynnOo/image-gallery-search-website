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

export const OrderByDropDown = ({ orderBy, changeOrderBy, customClasses }) => {
  const { mode, changeMode } = useContext(ModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (orderBy) => {
    setAnchorEl(null);
    if (!orderBy) {
      return;
    }
    changeOrderBy(orderBy);
  };
  return (
    <div>
      <ButtonWithIcon
        handleClick={handleClick}
        buttonText={orderBy}
        variant="outlined"
        customStyles={{
          "&.MuiButton-outlined": {
            border: `0.5px solid ${primaryTeal}`,
            color: primary,
            px: 3,
            height: 40,
            minWidth: 100,
            borderRadius: 7,
            backgroundColor: neutralWhite,
          },
        }}
        textVariant={"btnXsRegular"}
        icon={"expand_more"}
        iconPosition={"end"}
        customIconStyles={{
          fontSize: 18,
          color: primary,
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
            minWidth: 100,
            textAlign: "center",
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
          onClick={() => handleClose("relevant")}
          sx={{
            py: 2,
            backgroundColor:
              orderBy === "relevant" ? primaryBgDark : neutralWhite,
          }}
        >
          <Typography variant="btnXsRegular">Relevant</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("latest")}
          sx={{
            py: 2,
            backgroundColor:
              orderBy === "relevant" ? primaryBgDark : neutralWhite,
          }}
        >
          <Typography variant="btnXsRegular">Latest</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
