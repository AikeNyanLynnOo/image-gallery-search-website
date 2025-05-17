import {
  neutralWhite,
  primary,
  primaryBgDark,
  primaryTeal,
} from "@/lib/theme/colors";
import { Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import ButtonWithIcon from "../atoms/ButtonWithIcon";

export const UploadedWithinDropDown = ({
  uploadedWithin,
  changeUploadedWithin,
  customClasses,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (uploadedWithin) => {
    setAnchorEl(null);
    if (!uploadedWithin) {
      return;
    }
    changeUploadedWithin(uploadedWithin);
  };
  return (
    <div>
      <ButtonWithIcon
        handleClick={handleClick}
        buttonText={uploadedWithin || "Uploaded Within"}
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
          onClick={() => handleClose("today")}
          sx={{
            py: 2,
            backgroundColor:
              uploadedWithin === "today" ? primaryBgDark : neutralWhite,
          }}
        >
          <Typography variant="btnXsRegular">Today</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("3days")}
          sx={{
            py: 2,
            backgroundColor:
              uploadedWithin === "3days" ? primaryBgDark : neutralWhite,
          }}
        >
          <Typography variant="btnXsRegular">Within 3 days</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("week")}
          sx={{
            py: 2,
            backgroundColor:
              uploadedWithin === "week" ? primaryBgDark : neutralWhite,
          }}
        >
          <Typography variant="btnXsRegular">Within this week</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("month")}
          sx={{
            py: 2,
            backgroundColor:
              uploadedWithin === "month" ? primaryBgDark : neutralWhite,
          }}
        >
          <Typography variant="btnXsRegular">Within this month</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
