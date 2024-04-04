"use client";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { clsx } from "clsx";
import { SwitchBtn } from "./SwitchBtn";
import { NavItem } from "./atoms/NavItemComponent";
import { Icon, Typography } from "@mui/material";
import { ModeContext } from "./ModeWrapper";
import Image from "next/image";
import { ModeDropDown } from "./ModeDropDown";
import { ResponsiveContainer } from "./ResponsiveContainer";
// import { CustomLogo } from "../atoms/CustomLogo";

export const NavBar = ({
  children,
  customNavClasses,
  customMenuIconClasses,
}) => {
  const { mode, changeMode } = useContext(ModeContext);

  const handleSwitch = () => {
    changeMode("dark");
  };

  const navClasses = useMemo(() => {
    return clsx({
      "text-ownBlack-100": true,
      flex: true,
      "h-16": true,
      relative: true,
      "bg-transparent": true,
      "items-center": true,
      "justify-between": true,
      ...customNavClasses,
    });
  }, [customNavClasses]);

  return (
    <ResponsiveContainer
      customClasses={{
        "border-b": true,
        "shadow-sm": true,
      }}
    >
      <nav className={navClasses}>
        <Typography>Gallery</Typography>

        <div className="flex items-center h-full w-fit absolute left-1/2 top-0 -translate-x-1/2">
          <NavItem
            link={{
              href: "/",
            }}
          >
            <Image src={"/logo.png"} width={32} height={32} alt="logo" />
          </NavItem>
        </div>
        <div className="flex gap-x-5 items-center">
          <ModeDropDown />
        </div>
      </nav>
    </ResponsiveContainer>
  );
};
