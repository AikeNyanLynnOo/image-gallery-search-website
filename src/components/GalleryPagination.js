"use client";

import {
  neutralWhite,
  primary,
  primaryBgDark,
  primaryDark,
  primaryTeal,
  secondaryTeal,
} from "@/lib/theme/colors";
import { Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { typoSystem } from "@/lib/theme/typoSystem";
import { useContext } from "react";
import { ModeContext } from "./ModeWrapper";

export const GalleryPagination = ({ totalPages }) => {
  const searchParams = useSearchParams();

  const { mode, changeMode } = useContext(ModeContext);

  return (
    <div className="py-12 dark:bg-dark-100 bg-white w-full flex items-center justify-center">
      <Pagination
        page={parseInt(searchParams.get("page")) || 1}
        count={totalPages || 10}
        shape="rounded"
        renderItem={(item) => {
          if (item.page && item.page >= 1 && item.page <= totalPages) {
            return (
              <Link href={`?page=${item.page}`}>
                <PaginationItem
                  {...item}
                  sx={{
                    ...typoSystem.btnSRegular,

                    "&.MuiPaginationItem-root": {
                      color: mode === "light" ? primary : neutralWhite,
                    },
                    "&.MuiPaginationItem-root:hover": {
                      backgroundColor: secondaryTeal,
                      color: mode === "light" ? primary : neutralWhite,
                    },
                    "&.Mui-selected": {
                      backgroundColor: primaryTeal,
                      color: mode === "light" ? primary : neutralWhite,
                    },
                    "&.MuiPaginationItem-root.Mui-selected": {
                      color: neutralWhite,
                    },
                  }}
                />
              </Link>
            );
          }
          return (
            <PaginationItem
              {...item}
              sx={{
                ...typoSystem.btnSRegular,

                "&.MuiPaginationItem-root": {
                  color: mode === "light" ? primary : neutralWhite,
                },
                "&.MuiPaginationItem-root:hover": {
                  backgroundColor: secondaryTeal,
                  color: mode === "light" ? primary : neutralWhite,
                },
                "&.Mui-selected": {
                  backgroundColor: primaryTeal,
                  color: mode === "light" ? primary : neutralWhite,
                },
                "&.MuiPaginationItem-root.Mui-selected": {
                  color: neutralWhite,
                },
              }}
            />
          );
        }}
      />
    </div>
  );
};
