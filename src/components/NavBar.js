"use client";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { clsx } from "clsx";
import { NavItem } from "./atoms/NavItemComponent";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ModeContext } from "./ModeWrapper";
import Image from "next/image";
import { ModeDropDown } from "./dropdowns/ModeDropDown";
import { ResponsiveContainer } from "./ResponsiveContainer";
import ButtonWithIcon from "./atoms/ButtonWithIcon";
import { neutralWhite, primaryTeal } from "@/lib/theme/colors";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { BorderColor } from "@mui/icons-material";
import { AuthModal } from "./molecules/authModal";
import { useDispatch, useSelector } from "react-redux";
import {
  loginRequest,
  resetAuthState,
  signupRequest,
  updateError,
  updateSuccess,
} from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";

export const NavBar = ({
  children,
  customNavClasses,
  customMenuIconClasses,
}) => {
  const router = useRouter();
  // redux
  const { loading, isLoginSuccess, isSignupSuccess, error } = useSelector(
    (state) => state.auth
  );

  console.log("ERROR>>", error);

  const dispatch = useDispatch();
  const { mode, changeMode } = useContext(ModeContext);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("signup");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = (active) => {
    dispatch(resetAuthState());
    setActive(active);
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(resetAuthState());
    setOpen(false);
  };

  const navClasses = useMemo(() => {
    return clsx({
      "text-ownBlack-100": true,
      flex: true,
      "h-16": true,
      sticky: true,
      "top-0": true,
      "bg-transparent": true,
      "items-center": true,
      "justify-end": true,
      "sm:justify-between": true,
      ...customNavClasses,
    });
  }, [customNavClasses]);

  const handleSubmit = useCallback(() => {
    if (active === "signup") {
      dispatch(
        signupRequest({
          firstName,
          lastName,
          email,
          password,
        })
      );
      return;
    }
    dispatch(
      loginRequest({
        email,
        password,
      })
    );
  }, [dispatch, active, email, password, firstName, lastName]);

  const resendVerifyEmail = () => {
    // dispatch
    // send verify email again request
  };

  // useEffects

  useEffect(() => {
    console.log("is login success>>", isLoginSuccess);
    console.log("is signup success>>", isLoginSuccess);
    if (isLoginSuccess || isSignupSuccess) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
    if (isLoginSuccess) {
      router.push("/user");
    }
  }, [isLoginSuccess, isSignupSuccess]);

  return (
    <ResponsiveContainer
      customClasses={{
        "sm:px-7": true,
        "md:px-5": true,
        "lg:px-28": false,
        "xl:px-40": false,
        sticky: true,
        "top-0": true,
        "z-20": true,
      }}
    >
      <nav className={navClasses}>
        <Link href={"/"} className="hidden sm:block">
          <Typography
            variant="subheadline2Regular"
            sx={{
              fontWeight: 700,
            }}
          >
            Gallery
          </Typography>
        </Link>

        <div className="flex items-center h-full w-fit absolute left-5 sm:left-1/2 top-0 -translate-x-1/2">
          <NavItem
            link={{
              href: "/",
            }}
          >
            <Image src={"/logo.png"} width={32} height={32} alt="logo" />
          </NavItem>
        </div>
        <div className="flex gap-x-2 items-center">
          <ModeDropDown />
          <ButtonWithIcon
            handleClick={() => handleClickOpen("login")}
            buttonText={"Log in"}
            variant="outlined"
            customStyles={{
              ml: 1,
              "&.MuiButton-outlined": {
                color: primaryTeal,
                borderColor: primaryTeal,
                px: 5,
                py: 2,
                borderRadius: 10,
              },
            }}
            textVariant={"btnSMedium"}
            icon={"person"}
            iconPosition={"start"}
            customIconStyles={{
              fontSize: 16,
              color: primaryTeal,
            }}
          />

          <ButtonWithIcon
            handleClick={() => handleClickOpen("signup")}
            buttonText={"Join"}
            variant="outlined"
            customStyles={{
              "&.MuiButton-outlined": {
                border: "none",
                color: neutralWhite,
                px: 5,
                py: 2,
                borderRadius: 10,
                backgroundColor: primaryTeal,
              },
            }}
            textVariant={"btnSMedium"}
            icon={"person_outlined"}
            iconPosition={"start"}
            customIconStyles={{
              fontSize: 16,
              color: neutralWhite,
            }}
          />
        </div>
      </nav>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={fullScreen}
      >
        {!isSignupSuccess && (
          <DialogTitle
            sx={{ m: 0, py: 3, borderBottom: "1px solid #DDDDDD" }}
            id="customized-dialog-title"
          >
            {(active === "signup" && "Sign up to upload images") ||
              "Login to view you images"}
          </DialogTitle>
        )}

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {(!isSignupSuccess && (
            <AuthModal
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
          )) || (
            <div className="text-center">
              <p className="mb-4 text-base">
                Confirmation Email is sent to your email. Please check your
                inbox including the spam folder.
              </p>
              <ButtonWithIcon
                handleClick={resendVerifyEmail}
                buttonText={"Resend Email"}
                variant="outlined"
                customStyles={{
                  mx: "auto",
                  "&.MuiButton-outlined": {
                    color: primaryTeal,
                    borderColor: primaryTeal,
                    px: 5,
                    py: 2,
                    borderRadius: 10,
                  },
                }}
                textVariant={"btnSMedium"}
              />
            </div>
          )}
        </DialogContent>
        {!isSignupSuccess && (
          <DialogActions
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
              px: 6,
              pb: 6,
              pt: 3,
            }}
          >
            {/* Submit Button */}
            <ButtonWithIcon
              handleClick={handleSubmit}
              buttonText={
                active === "signup"
                  ? (loading.isPending && "Joining...") || "Join"
                  : (loading.isPending && "Logging in...") || "Log in"
              }
              variant="outlined"
              customStyles={{
                width: "100%",
                "&.MuiButton-outlined": {
                  border: "none",
                  color: neutralWhite,
                  px: 5,
                  py: 2,
                  borderRadius: 10,
                  backgroundColor: primaryTeal,
                },
              }}
              textVariant={"btnSMedium"}
            />

            {/* Forgot Password Link (only for login) */}
            {active === "login" && (
              <div className="text-center">
                <a
                  href="#"
                  className="text-secondaryTeal-100 hover:underline text-sm"
                >
                  Forgot password?
                </a>
              </div>
            )}
          </DialogActions>
        )}
      </Dialog>
    </ResponsiveContainer>
  );
};
