"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  User,
  Settings,
  Grid,
  Bookmark,
  ImageIcon,
  FolderKanban,
  Hash,
  Upload,
  LogOut,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Grid,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      title: "Collections",
      href: "/dashboard/collections",
      icon: FolderKanban,
    },
    {
      title: "Topics",
      href: "/dashboard/topics",
      icon: Hash,
    },
    {
      title: "Images",
      href: "/dashboard/images",
      icon: ImageIcon,
    },
    {
      title: "Favorites",
      href: "/dashboard/favorites",
      icon: Bookmark,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="flex h-14 items-center border-b border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 px-4 md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="rounded-md p-2 text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 md:hidden"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </button>
      <Link
        href="/"
        className="ml-2 flex items-center gap-2 font-semibold text-primary-100 dark:text-primaryDark-100"
      >
        <Image src={"/logo.png"} width={32} height={32} alt="logo" />
        <span>Gallery</span>
      </Link>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-overlay-500">
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-neutralWhite-100 dark:bg-dark-200 p-0 sm:max-w-sm">
            <div className="flex h-14 items-center border-b border-gray-200 dark:border-dark-100 px-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 font-semibold text-primary-100 dark:text-primaryDark-100"
                onClick={() => setOpen(false)}
              >
                <ImageIcon className="h-6 w-6 text-primaryTeal-100" />
                <span>ImageHub</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto rounded-md p-2 text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="flex flex-col gap-1 p-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === route.href
                      ? "bg-primaryTeal-100/10 text-primaryTeal-100 dark:bg-primaryTeal-100/20"
                      : "text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <route.icon
                    className={`h-5 w-5 ${
                      pathname === route.href ? "text-primaryTeal-100" : ""
                    }`}
                  />
                  <span>{route.title}</span>
                </Link>
              ))}
              <div className="mt-4 border-t border-gray-200 dark:border-dark-100 pt-4">
                <div onClick={() => setOpen(false)}>
                  <ThemeToggle />
                </div>
                <Link
                  href="/dashboard/images"
                  className="flex w-full items-center gap-3 rounded-md bg-primaryTeal-100 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100"
                  onClick={() => setOpen(false)}
                >
                  <Upload className="h-5 w-5" />
                  <span>Upload Image</span>
                </Link>
                <Link
                  href="/logout"
                  className="mt-2 flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 transition-colors hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
                  onClick={() => setOpen(false)}
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
