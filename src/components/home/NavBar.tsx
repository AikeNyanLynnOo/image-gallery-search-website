"use client";

import {
  BookOpen,
  Grid,
  ImageIcon,
  LogOut,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import { ModeContext } from "../ModeWrapper";
import { ThemeToggleDropdown } from "../atoms/ThemeToggleDropdown";
import { ThemeToggleMobile } from "../atoms/ThemeToggleMobile";
import Image from "next/image";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   IconButton,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
import ButtonWithIcon from "../atoms/ButtonWithIcon";
import { useDispatch, useSelector } from "react-redux";

import { neutralWhite, primaryTeal } from "@/lib/theme/colors";
import {
  loginRequest,
  resetAuthState,
  signupRequest,
} from "@/lib/features/auth/authSlice";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
} from "../molecules/modals/CustomModal";
import { AuthFormWithTabs } from "../molecules/AuthFormwithTabs";
import AuthModal from "../molecules/modals/AuthModal";
export function Navbar({ showAuth = true }: any) {
  // redux
  const dispatch = useDispatch();
  const { loading, isLoginSuccess, isSignupSuccess, error } = useSelector(
    (state: any) => state.auth
  );
  const { mode, changeMode } = useContext(ModeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("signup");

  // form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = (active: any) => {
    dispatch(resetAuthState(null));
    setActive(active);
    setOpen(true);
  };

  // Simulate authenticated state - in a real app, this would come from your auth system
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // Only close if clicking outside the dropdown elements
      const target = event.target;
      const themeButton = document.getElementById("theme-dropdown-button");
      const userButton = document.getElementById("user-dropdown-button");
      const mobileUserButton = document.getElementById(
        "mobile-user-dropdown-button"
      );
      const themeDropdown = document.getElementById("theme-dropdown");
      const userDropdown = document.getElementById("user-dropdown");
      const mobileUserDropdown = document.getElementById(
        "mobile-user-dropdown"
      );

      if (
        themeButton &&
        !themeButton.contains(target) &&
        themeDropdown &&
        !themeDropdown.contains(target)
      ) {
        setThemeDropdownOpen(false);
      }

      if (
        userButton &&
        !userButton.contains(target) &&
        userDropdown &&
        !userDropdown.contains(target) &&
        mobileUserButton &&
        !mobileUserButton.contains(target) &&
        mobileUserDropdown &&
        !mobileUserDropdown.contains(target)
      ) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-neutralWhite-100/90 dark:bg-dark-200/90 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-dark-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-primary-100 dark:text-primaryDark-100"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-primaryTeal-100 dark:bg-neutral-200 rounded-full blur-md opacity-10 dark:opacity-60 animate-pulse" />
              <Image
                src={"/logo.png"}
                className="h-8 w-8"
                width={32}
                height={32}
                alt="logo"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">Impressa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/explore"
              className="text-primary-100/80 dark:text-primaryDark-100/80 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primaryTeal-100 after:transition-all hover:after:w-full"
            >
              Explore
            </Link>
            <Link
              href="/collections"
              className="text-primary-100/80 dark:text-primaryDark-100/80 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primaryTeal-100 after:transition-all hover:after:w-full"
            >
              Collections
            </Link>
            <Link
              href="/topics"
              className="text-primary-100/80 dark:text-primaryDark-100/80 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primaryTeal-100 after:transition-all hover:after:w-full"
            >
              Topics
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Dropdown */}
            <ThemeToggleDropdown
              themeDropdownOpen={themeDropdownOpen}
              setThemeDropdownOpen={setThemeDropdownOpen}
              setUserDropdownOpen={setUserDropdownOpen}
            />

            {/* Authentication State - Desktop */}
            {showAuth && (
              <div className="hidden md:block">
                {isAuthenticated ? (
                  <div className="relative">
                    <button
                      id="user-dropdown-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setUserDropdownOpen(!userDropdownOpen);
                        setThemeDropdownOpen(false);
                      }}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-primaryTeal-100/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-primaryTeal-100" />
                      </div>
                      <span>John Doe</span>
                    </button>
                    {userDropdownOpen && (
                      <div
                        id="user-dropdown"
                        className="absolute right-0 mt-1 w-48 rounded-md bg-neutralWhite-100 dark:bg-dark-100 shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-1 z-50"
                      >
                        <Link
                          href="/dashboard"
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <Grid className="h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>
                        <Link
                          href="/dashboard/profile"
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                        <Link
                          href="/dashboard/images"
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <BookOpen className="h-4 w-4" />
                          <span>My Library</span>
                        </Link>
                        <div className="my-1 border-t border-gray-200 dark:border-dark-100"></div>
                        <button
                          onClick={() => {
                            setIsAuthenticated(false);
                            setUserDropdownOpen(false);
                          }}
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md text-red-500 hover:bg-gray-100 dark:hover:bg-dark-200"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleClickOpen("login")}
                      className="rounded-md px-4 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
                    >
                      Log in
                    </button>
                    <button
                      onClick={() => handleClickOpen("signup")}
                      className="rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100 hover:shadow-lg hover:shadow-primaryTeal-100/20 dark:hover:shadow-primaryTeal-100/10"
                    >
                      Sign up
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Authentication State - Mobile */}
            {isAuthenticated && showAuth && (
              <div className="md:hidden relative">
                <button
                  id="mobile-user-dropdown-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setUserDropdownOpen(!userDropdownOpen);
                  }}
                  className="flex items-center justify-center rounded-md p-2 text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100"
                >
                  <div className="w-8 h-8 rounded-full bg-primaryTeal-100/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-primaryTeal-100" />
                  </div>
                </button>
                {userDropdownOpen && (
                  <div
                    id="mobile-user-dropdown"
                    className="absolute right-0 mt-1 w-48 rounded-md bg-neutralWhite-100 dark:bg-dark-100 shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-1 z-50"
                  >
                    <Link
                      href="/dashboard"
                      className="flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <Grid className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      href="/dashboard/profile"
                      className="flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      href="/dashboard/images"
                      className="flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>My Library</span>
                    </Link>
                    <div className="my-1 border-t border-gray-200 dark:border-dark-100"></div>
                    <button
                      onClick={() => {
                        setIsAuthenticated(false);
                        setUserDropdownOpen(false);
                      }}
                      className="flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md text-red-500 hover:bg-gray-100 dark:hover:bg-dark-200"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 md:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden absolute left-0 right-0 bg-neutralWhite-100 dark:bg-dark-100 bg-neutralWhite-100/90 dark:bg-dark-200/90 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-dark-100/50`}
        >
          <div className="space-y-1 px-4 pb-5 pt-2">
            <Link
              href="/explore"
              className="block rounded-md px-3 py-2 text-base font-medium text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/collections"
              className="block rounded-md px-3 py-2 text-base font-medium text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              href="/topics"
              className="block rounded-md px-3 py-2 text-base font-medium text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Topics
            </Link>

            {/* Theme toggle for mobile */}
            <div className="pt-2 pb-1">
              <div className="flex rounded-md px-3 py-2">
                <ThemeToggleMobile />
              </div>
            </div>

            {/* Authentication for mobile - only show login/signup if not authenticated */}
            {!isAuthenticated && showAuth && (
              <div className="pt-4 pb-1 border-t border-gray-200 dark:border-dark-100">
                <Link
                  href="/login"
                  className="block w-full rounded-md px-3 py-2 text-center text-base font-medium text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="mt-2 block w-full rounded-md bg-primaryTeal-100 px-3 py-2 text-center text-base font-medium text-white shadow-sm transition-colors hover:bg-secondaryTeal-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* auth modal */}

      <AuthModal
        open={open}
        setOpen={setOpen}
        active={active}
        setActive={setActive}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </header>
  );
}
