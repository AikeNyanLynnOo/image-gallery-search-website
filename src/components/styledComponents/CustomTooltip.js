import { Tooltip, styled, tooltipClasses } from "@mui/material";
import { useContext } from "react";
import { ModeContext } from "../ModeWrapper";
import {
  bgOverlay800,
  neutralWhite,
  primary,
  primaryBgDark,
  primaryDark,
} from "@/lib/theme/colors";

export const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => {
  const { mode, changeMode } = useContext(ModeContext);

  return {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: mode === "light" ? neutralWhite : bgOverlay800,
      padding: 10,
      borderRadius: "8px",
    },
    "& .MuiTooltip-arrow": {
      color: mode === "light" ? neutralWhite : bgOverlay800,
    },
  };
});
