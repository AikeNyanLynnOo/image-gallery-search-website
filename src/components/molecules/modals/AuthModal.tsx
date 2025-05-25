import {
  loginRequest,
  resetAuthState,
  signupRequest,
} from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthFormWithTabs } from "../AuthFormwithTabs";
import { Modal, ModalContent, ModalFooter } from "./CustomModal";

export default function AuthModal({
  open,
  setOpen,
  active,
  setActive,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
}: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, isLoginSuccess, isSignupSuccess, error } = useSelector(
    (state: any) => state.auth
  );

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const handleClose = () => {
    console.log("closing");
    dispatch(resetAuthState(null));
    resetForm();
    setOpen(false);
  };
  const resendVerifyEmail = () => {
    // dispatch
    // send verify email again request
  };

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

  //   start useEffects
  useEffect(() => {
    console.log("Is login success>>", isLoginSuccess);
    if (isLoginSuccess) {
      router.push("/dashboard");
      dispatch(resetAuthState(null));
    }
  }, [isLoginSuccess, router]);

  return (
    <Modal
      isOpen={open}
      onClose={handleClose}
      title={
        (active === "signup" && "Sign up to upload images") ||
        "Login to view you images"
      }
      size="lg"
    >
      <ModalContent>
        {(!isSignupSuccess && (
          <AuthFormWithTabs
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
              Confirmation Email is sent to your email. Please check your inbox
              including the spam folder.
            </p>
            <button onClick={resendVerifyEmail}>Resend Email</button>
          </div>
        )}
      </ModalContent>

      {!isSignupSuccess && (
        <ModalFooter
          showFooterDivider={false}
          className="sticky bottom-0 bg-neutralWhite-100 dark:bg-dark-200"
        >
          <div className="flex flex-col gap-y-2 w-full">
            <button
              onClick={handleSubmit}
              className="rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100 hover:shadow-lg hover:shadow-primaryTeal-100/20 dark:hover:shadow-primaryTeal-100/10 w-full"
            >
              {active === "signup"
                ? (loading.isPending && "Joining...") || "Join"
                : (loading.isPending && "Logging in...") || "Log in"}
            </button>
            {active === "login" && (
              <div className="text-center">
                <a
                  href="auth/forgot-password"
                  className="text-secondaryTeal-100 hover:underline text-sm"
                >
                  Forgot password?
                </a>
              </div>
            )}
          </div>
        </ModalFooter>
      )}
    </Modal>
  );
}
