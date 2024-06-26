import { neutralWhite } from "@/lib/theme/colors";
import { Tab, Tabs, Typography, tabsClasses } from "@mui/material";
import { ImageOverlayWithText } from "./atoms/ImageOverlayWithText";
import { numberWithCommas } from "@/lib/helpers/helperFunctions";

export const ScrollTabs = ({ tabs }) => {
  return (
    <Tabs
      value={0}
      variant="scrollable"
      scrollButtons
      sx={{
        [`& .${tabsClasses.scrollButtons}`]: {
          "&.Mui-disabled": { opacity: 0.5 },
        },
        ".MuiTabs-indicator": {
          display: "none",
        },
        "& .MuiTab-root": {
          textTransform: "capitalize",
          borderRadius: "10px",
          backgroundColor: neutralWhite,
          mr: 3,
          p: 0,
        },
      }}
    >
      {tabs.map((topics, index) => (
        <Tab
          key={index}
          label={
            <ImageOverlayWithText
              linkHref={`/search_results?query=${topics.slug}`}
              text={topics.title}
              imgSrc={topics.cover_photo.urls.regular}
              textVariant={"btnMMedium"}
              customClasses={{
                "h-auto": false,
                "h-20": true,
                group: true,
              }}
            >
              <div className="bounce-in-top text-center h-full w-full hidden group-hover:flex items-center text-white bg-overlay-800 justify-center absolute top-0 bottom-0 z-0">
                <Typography
                  variant={"subheadline3Regular"}
                  className="text-focus-in"
                >
                  {numberWithCommas(topics.total_photos)} Photos
                </Typography>
              </div>
            </ImageOverlayWithText>
          }
        />
      ))}
    </Tabs>
  );
};
