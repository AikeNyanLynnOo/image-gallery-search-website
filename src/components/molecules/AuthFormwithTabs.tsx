"use client";

import { updateError } from "@/lib/features/auth/authSlice";
import { primaryTeal } from "@/lib/theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { InputGroup } from "../inputs/InputGroup";

export const AuthFormWithTabs = ({
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
}: any) => {
  // redux
  const { error } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const handleChange = ({ type, val }: any) => {
    dispatch(
      updateError({
        error: {
          general: {
            message: null,
          },
        },
      })
    );
    switch (type) {
      case "first_name":
        {
          setFirstName(val);
          dispatch(
            updateError({
              error: {
                firstName: {
                  message: null,
                },
              },
            })
          );
        }
        break;
      case "last_name":
        {
          setLastName(val);
          dispatch(
            updateError({
              error: {
                lastName: {
                  message: null,
                },
              },
            })
          );
        }
        break;
      case "email":
        {
          setEmail(val);
          dispatch(
            updateError({
              error: {
                email: {
                  message: null,
                },
              },
            })
          );
        }
        break;
      case "password":
        {
          setPassword(val);
          dispatch(
            updateError({
              error: {
                password: {
                  message: null,
                },
              },
            })
          );
        }
        break;
      default:
    }
  };

  return (
    <div className="sm:min-w-[450px] mb-3 mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-6 leading">
        <button
          onClick={() => setActive("signup")}
          className={`text-lg flex-1 font-medium px-4 py-2 ${
            active === "signup"
              ? "text-gray-800 dark:text-gray-100 border-b-2 border-secondaryTeal-100"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Sign up
        </button>
        <button
          onClick={() => setActive("login")}
          className={`text-lg flex-1 font-medium px-4 py-2 ${
            active === "login"
              ? "text-gray-800 dark:text-gray-100 border-b-2 border-secondaryTeal-100"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Log in
        </button>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Social Login Buttons */}
        <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-xs sm:text-sm">
          <div className="w-6 h-6 mr-1 sm:mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
          </div>
          {active === "signup" ? "Sign up with Google" : "Continue with Google"}
        </button>

        <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-xs sm:text-sm">
          <div className="w-5 h-5 mr-1 sm:mr-3 bg-[#1877F2] rounded-full flex items-center justify-center text-white">
            <span className="text-sm font-bold">f</span>
          </div>
          Continue with Facebook
        </button>

        {/* Divider */}
        <div className="flex items-center">
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
          <span className="px-4 text-gray-500 dark:text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
        </div>

        {/* Form Fields */}
        {active === "signup" ? (
          <>
            <div className="block sm:flex space-y-4 sm:space-y-0 gap-x-4">
              <div className="flex-1">
                <InputGroup
                  label="Frist Name"
                  isRequired
                  inputValue={firstName}
                  placeholder={"John"}
                  type={"text"}
                  textChange={(val: any) =>
                    handleChange({
                      type: "first_name",
                      val,
                    })
                  }
                  customInputStyles={{
                    flex: 1,
                    height: 40,
                    minWidth: 200,
                    border: `0.5px solid ${primaryTeal}`,
                    borderRadius: 2,
                  }}
                  helperText={error.firstName.message || ""}
                />
              </div>

              <div className="flex-1">
                <InputGroup
                  label="Last Name"
                  isRequired
                  inputValue={lastName}
                  placeholder={"Doe"}
                  type={"text"}
                  textChange={(val: any) =>
                    handleChange({
                      type: "last_name",
                      val,
                    })
                  }
                  customInputStyles={{
                    flex: 1,
                    height: 40,
                    minWidth: 200,
                    border: `0.5px solid ${primaryTeal}`,
                    borderRadius: 2,
                  }}
                  helperText={error.lastName.message || ""}
                />
              </div>
            </div>

            <div className="space-y-2">
              <InputGroup
                label="Email"
                isRequired
                inputValue={email}
                placeholder={"johndoe@gmail.com"}
                type={"email"}
                textChange={(val: any) =>
                  handleChange({
                    type: "email",
                    val,
                  })
                }
                customInputStyles={{
                  flex: 1,
                  height: 40,
                  minWidth: 200,
                  border: `0.5px solid ${primaryTeal}`,
                  borderRadius: 2,
                }}
                helperText={error.email.message || ""}
              />
            </div>
          </>
        ) : (
          <div className="space-y-2">
            <InputGroup
              label="Email"
              isRequired
              inputValue={email}
              placeholder={"johndoe@gmail.com"}
              type={"text"}
              textChange={(val: any) =>
                handleChange({
                  type: "email",
                  val,
                })
              }
              customInputStyles={{
                flex: 1,
                height: 40,
                minWidth: 200,
                border: `0.5px solid ${primaryTeal}`,
                borderRadius: 2,
              }}
              helperText={error.email.message || ""}
            />
          </div>
        )}

        <div className="space-y-2">
          <InputGroup
            label="Password"
            isRequired
            inputValue={password}
            placeholder={"Enter password"}
            type={"password"}
            textChange={(val: any) =>
              handleChange({
                type: "password",
                val,
              })
            }
            customInputStyles={{
              flex: 1,
              height: 40,
              minWidth: 200,
              border: `0.5px solid ${primaryTeal}`,
              borderRadius: 2,
            }}
            helperText={error.password.message || ""}
          />
        </div>
      </div>
    </div>
  );
};
