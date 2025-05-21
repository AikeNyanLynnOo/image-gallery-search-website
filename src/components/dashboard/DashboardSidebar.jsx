"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
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

export function DashboardSidebar() {
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
    <aside className="hidden relative w-64 flex-shrink-0 border-r border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 md:flex md:flex-col">
      <Link
        href="/"
        className="flex h-14 fixed top-0 w-64 items-center gap-2 font-semibold text-primary-100 dark:text-primaryDark-100 border-b border-gray-200 dark:border-dark-100 px-4"
      >
        <Image src={"/logo.png"} width={32} height={32} alt="logo" />
        <span>Gallery</span>
      </Link>
      <div className="flex-1 overflow-auto p-3 w-64 fixed top-14">
        <nav className="flex-1 space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === route.href
                  ? "bg-primaryTeal-100/10 text-primaryTeal-100 dark:bg-primaryTeal-100/20"
                  : "text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
              }`}
            >
              <route.icon
                className={`h-5 w-5 ${
                  pathname === route.href ? "text-primaryTeal-100" : ""
                }`}
              />
              <span>{route.title}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-gray-200 dark:border-dark-100 p-3 fixed bottom-0 left-0 w-64">
        <div className="space-y-1">
          <ThemeToggle />
          <Link
            href="/dashboard/images/upload"
            className="flex w-full items-center gap-3 rounded-md bg-primaryTeal-100 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100"
          >
            <Upload className="h-5 w-5" />
            <span>Upload Image</span>
          </Link>
          <Link
            href="/logout"
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 transition-colors hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
