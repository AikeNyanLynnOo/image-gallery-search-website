import { primaryTeal } from "@/lib/theme/colors";
import { Typography } from "@mui/material";
import { clsx } from "clsx";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { BeatLoader } from "react-spinners";

export const CustomImageWithErrorHandle = (props) => {
  const { customStyles, customClasses, ...propsForImg } = props;
  const [imageError, setImageError] = useState(false);
  const [isImgLoading, setIsImgLoading] = useState(false);

  //   useEffect(() => {
  //     setIsImgHovered((prev) => {
  //       console.log("Index here>>", props.index);
  //       if (!props.index && typeof props.index !== "number") {
  //         return isHovered;
  //       }
  //       return isHovered === props.index;
  //     });
  //   }, [props.index, isHovered]);

  useEffect(() => {
    setIsImgLoading(true);
  }, [propsForImg.src]);

  useEffect(() => {
    setImageError(false);
  }, [propsForImg.src]);
  
  const wrapperClasses = useMemo(() => {
    return clsx({
      relative: true,
      ...customClasses,
    });
  }, [customClasses]);
  return (
    <div
      className={wrapperClasses}
      style={{
        ...customStyles,
      }}
    >
      {isImgLoading && (
        <p className="z-10 absolute top-0 bottom-0 h-full w-full flex justify-center items-center backdrop-blur-md">
          <BeatLoader color={primaryTeal} size={8} />
        </p>
      )}

      <Image
        {...propsForImg}
        onLoadingComplete={(img) => {
          setIsImgLoading(false);
        }}
        placeholder="blur"
        blurDataURL={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8eOtWPQAIjwMmbBCS2AAAAABJRU5ErkJggg=="
        }
        alt="img"
        onError={(e) => {
          setImageError(true);
        }}
      />
    </div>
  );
};
