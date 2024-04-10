import Image from "next/image";
import { Typography } from "@mui/material";
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox";
import { CustomImageWithErrorHandle } from "./CustomImageWithErrorHandle";
import { CustomTooltip } from "../styledComponents/CustomTooltip";
import { CustomTypography } from "./CustomTypography";
import { Divider } from "@mui/material";
import { bgOverlay300, bgOverlay600, primaryTeal } from "@/lib/theme/colors";
import { numberWithCommas } from "@/lib/helpers/helperFunctions";
import { neutral } from "tailwindcss/colors";

function isNextJsImage(slide) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

export const CustomLightBoxSlide = ({ slide, offset, rect }) => {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width)
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height)
      )
    : rect.height;

  return (
    <CustomImageWithErrorHandle
      fill
      alt=""
      src={slide}
      loading="eager"
      draggable={false}
      placeholder={slide.blurDataURL ? "blur" : undefined}
      customStyles={{
        width: "80%",
        height: "100%",
      }}
      style={{
        objectFit: "cover",
        borderRadius: "9px",
        overflow: "hidden",
        border: `1px solid ${primaryTeal}`,
      }}
      customImgClasses="rounded-lg overflow-hidden"
      loaderSize={15}
      sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      onClick={
        offset === 0 ? () => click?.({ index: currentIndex }) : undefined
      }
    >
      <div
        style={{
          position: "absolute",
          left: 10,
          top: 10,
          display: "flex",
          columnGap: 10,
          alignItems: "center",
        }}
      >
        <Image
          src={slide.orginalData.user.profile_image.medium}
          alt="user"
          height={50}
          width={50}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "contain",
            border: `1px solid ${primaryTeal}`,
          }}
        />
        <CustomTypography
          component="p"
          variant="subheadline3Regular"
          sx={{
            textTransform: "capitalize",
            textAlign: "center",
          }}
          wrapperStyles={{
            backgroundColor: bgOverlay300,
          }}
          customClasses={{
            "px-3": true,
            "py-2": true,
            "rounded-md": true,
            "text-primary-100": false,
            "dark:text-neutralWhite-100": false,
            "text-white": true,
          }}
        >
          {slide.orginalData.user.username || ""}
        </CustomTypography>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 10,
          transform: "translate(-50%,-50%)",
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <CustomTypography
          component="p"
          variant="btnSSemibold"
          sx={{
            textTransform: "capitalize",
            textAlign: "center",
          }}
          wrapperStyles={{
            backgroundColor: bgOverlay600,
          }}
          customClasses={{
            "px-2": true,
            "py-1": true,
            "rounded-md": true,
            "text-primary-100": false,
            "dark:text-neutralWhite-100": false,
            "text-white": true,
          }}
        >
          Likes:{" "}
          <Typography variant="btnSRegular">
            {numberWithCommas(slide.orginalData.likes) || 0}
          </Typography>
        </CustomTypography>
        {slide.orginalData.views && (
          <CustomTypography
            component="p"
            variant="btnSSemibold"
            sx={{
              textTransform: "capitalize",
              textAlign: "center",
            }}
            wrapperStyles={{
              backgroundColor: bgOverlay600,
            }}
            customClasses={{
              "px-2": true,
              "py-1": true,
              "rounded-md": true,
              "text-primary-100": false,
              "dark:text-neutralWhite-100": false,
              "text-white": true,
            }}
          >
            Views:{" "}
            <Typography variant="btnSRegular">
              {numberWithCommas(slide.orginalData.views) || 0}
            </Typography>
          </CustomTypography>
        )}
        {slide.orginalData.downloads && (
          <CustomTypography
            component="p"
            variant="btnSSemibold"
            sx={{
              textTransform: "capitalize",
              textAlign: "center",
            }}
            wrapperStyles={{
              backgroundColor: bgOverlay600,
            }}
            customClasses={{
              "px-2": true,
              "py-1": true,
              "rounded-md": true,
              "text-primary-100": false,
              "dark:text-neutralWhite-100": false,
              "text-white": true,
            }}
          >
            Downloads:{" "}
            <Typography variant="btnSRegular">
              {numberWithCommas(slide.orginalData.downloads) || 0}
            </Typography>
          </CustomTypography>
        )}
      </div>
    </CustomImageWithErrorHandle>
  );
};
