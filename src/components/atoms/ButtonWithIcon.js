import { Button, Icon, Typography } from "@mui/material";

export default function ButtonWithIcon({
  icon,
  iconPosition,
  handleClick,
  buttonText,
  backgroundColor,
  variant,
  textVariant,
  customStyles,
  customIconStyles,
}) {
  return (
    <Button
      onClick={handleClick}
      variant={variant || "contained"}
      sx={{
        backgroundColor,
        display: "flex",
        px: 0,
        alignItems: "center",
        "&:hover": {
          background: "none",
        },
        ...customStyles,
      }}
    >
      {iconPosition === "start" && (
        <Icon
          style={{
            marginRight: "4px",
            ...customIconStyles,
          }}
        >
          {icon}
        </Icon>
      )}
      <Typography variant={textVariant || "btnSSemibold"}>
        {buttonText}
      </Typography>
      {iconPosition === "end" && (
        <Icon
          style={{
            marginLeft: "4px",
            ...customIconStyles,
          }}
        >
          {icon}
        </Icon>
      )}
    </Button>
  );
}
