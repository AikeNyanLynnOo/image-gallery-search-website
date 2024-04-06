import {
  neutralWhite,
  primary,
  primaryTeal,
  secondaryTeal,
} from "@/lib/theme/colors";
import { Box, Button, Icon, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const SomethingWentWrong = ({
  text,
  isReload,
  buttonVariant,
  handleBtnClick,
  children,
  imgSrc,
}) => {
  const router = useRouter();
  const defaultHandleClick = () => {
    if (handleBtnClick) {
      handleBtnClick();
      return;
    }
    if (isReload) {
      // console.log("refreshing");
      router.refresh();
      return;
    }
    router.back();
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
      }}
    >
      <Image
        src={imgSrc || "/something_went_wrong.png"} // here will be not_found_404, not_found_500, etc.
        width={100}
        height={100}
        alt="Pic of Something Went Wrong"
        style={{
          margin: "0 auto",
        }}
      />
      {/* <Box sx={{ position: "relative" }}>
      </Box> */}

      <Typography
        component={"p"}
        variant="body1Regular"
        sx={{
          py: 6,
        }}
      >
        {text || "Something Went Wrong!"}
      </Typography>
      <Button
        variant={buttonVariant || "outlined"}
        size="small"
        sx={{
          justifyContent: "flex-start",
          padding: "12px 20px",
          fontWeight: "bold",
          backgroundColor: primaryTeal,
          // borderColor: primary,
          "&:hover": {
            backgroundColor: secondaryTeal,
            // borderColor: primary,
          },
        }}
        startIcon={
          <Icon
            style={{
              color: neutralWhite,
            }}
          >
            {isReload ? "refresh" : "home"}
          </Icon>
        }
        onClick={handleBtnClick || defaultHandleClick}
      >
        <Typography
          variant="btnSRegular"
          sx={{
            color: neutralWhite,
          }}
        >
          {isReload ? "Refresh" : "Back"}
        </Typography>
      </Button>
      {children}
    </Box>
  );
};
