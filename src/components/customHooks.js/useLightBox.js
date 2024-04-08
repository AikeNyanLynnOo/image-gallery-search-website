"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import {
  bgOverlay600,
  bgOverlay700,
  bgOverlay800,
  bgOverlay900,
  neutralWhite,
  primaryTeal,
} from "@/lib/theme/colors";

const Lightbox = dynamic(() => import("@/src/components/atoms/LightBox"));
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { ModeContext } from "../ModeWrapper";

export default function useLightbox() {
  const [open, setOpen] = React.useState(false);
  const [interactive, setInteractive] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const fullscreenRef = React.useRef(null);
  const openLightbox = React.useCallback((currentindex) => {
    setOpen(true);
    setInteractive(true);
    setIndex(currentindex);
  }, []);

  const { mode, changeMode } = React.useContext(ModeContext);

  const renderLightbox = React.useCallback(
    (props) =>
      interactive ? (
        <Lightbox
          index={index}
          open={open}
          close={() => setOpen(false)}
          styles={{
            root: { "--yarl__color_backdrop": bgOverlay700 },
            container: {
              backgroundColor: mode === "dark" ? neutralWhite : bgOverlay900,
              width: "90%",
              height: "90%",
              margin: "auto",
              borderRadius: "10px",
            },
          }}
          fullscreen={{ ref: fullscreenRef }}
          on={{
            click: () => fullscreenRef.current?.enter(),
          }}
          plugins={[Download, Fullscreen]}
          {...props}
        />
      ) : null,
    [open, interactive, index, mode]
  );

  return { openLightbox, renderLightbox };
}
