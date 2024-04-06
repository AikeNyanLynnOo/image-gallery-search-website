import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { CustomTypography } from "../customComponents/CustomTypography";
export const ListContainer = ({ listItems, customStyles }) => {
  return (
    <Box>
      {listItems &&
        listItems.length > 0 &&
        listItems.map((item, index) => (
          <Link key={index} href="/">
            <CustomTypography
              variant="btnXsRegular"
              customClasses={{
                "text-primary-100": false,
              }}
            >
              {item}
            </CustomTypography>
          </Link>
        ))}
    </Box>
  );
};
