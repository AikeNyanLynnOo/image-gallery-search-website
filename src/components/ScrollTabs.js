import { neutralWhite } from "@/lib/theme/colors";
import { Tab, Tabs, tabsClasses } from "@mui/material";
import { ImageOverlayWithText } from "./atoms/ImageOverlayWithText";

export const ScrollTabs = ({ tabs }) => {
  return (
    <Tabs
      variant="scrollable"
      scrollButtons
      sx={{
        [`& .${tabsClasses.scrollButtons}`]: {
          "&.Mui-disabled": { opacity: 0.5 },
        },
        // backgroundColor : "blue",
        ".MuiTabs-indicator": {
          display: "none",
        },
        "& .MuiTab-root": {
          textTransform: "capitalize",
          // color: "#ffffff",
          borderRadius: "10px",
          backgroundColor: neutralWhite,
          // color: neutral[10],
          // border: `1px solid ${neutral[10]}`,
          // mr: 6,
          mr: 3,
          p: 0,
        },
      }}
    >
      {tabs.map((topics, index) => (
        <Tab
          key={index}
          label={
            <ImageOverlayWithText text={topics.text} imgSrc={topics.imgSrc} />
          }
        />
      ))}
    </Tabs>
  );
};
