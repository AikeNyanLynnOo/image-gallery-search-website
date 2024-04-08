"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const Lightbox = dynamic(() => import("@/src/components/atoms/LightBox"));

export default function useLightbox() {
  const [open, setOpen] = React.useState(false);
  const [interactive, setInteractive] = React.useState(false);

  const openLightbox = React.useCallback(() => {
    setOpen(true);
    setInteractive(true);
  }, []);

  const renderLightbox = React.useCallback(
    (props) =>
      interactive ? (
        <Lightbox open={open} close={() => setOpen(false)} {...props} />
      ) : null,
    [open, interactive]
  );

  return { openLightbox, renderLightbox };
}
