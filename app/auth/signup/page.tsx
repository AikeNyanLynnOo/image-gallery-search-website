"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { InputGroup } from "@/components/inputs/InputGroup";
import { Navbar } from "@/components/home/NavBar";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName: { message: string };
  lastName: { message: string };
  email: { message: string };
  password: { message: string };
  confirmPassword: { message: string };
}

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    firstName: { message: "" },
    lastName: { message: "" },
    email: { message: "" },
    password: { message: "" },
    confirmPassword: { message: "" },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = ({
    type,
    val,
  }: {
    type: keyof FormData;
    val: string;
  }) => {
    setFormData((prev) => ({ ...prev, [type]: val }));
    // Clear error when user starts typing
    if (errors[type].message) {
      setErrors((prev) => ({
        ...prev,
        [type]: { message: "" },
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      firstName: { message: "" },
      lastName: { message: "" },
      email: { message: "" },
      password: { message: "" },
      confirmPassword: { message: "" },
    };

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName.message = "First name is required";
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName.message = "Last name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email.message = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email.message = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password.message = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password.message = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password.message =
        "Password must contain uppercase, lowercase, and number";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword.message = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword.message = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error.message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!acceptTerms) {
      alert("Please accept the terms and conditions");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // On success, redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
      setErrors((prev) => ({
        ...prev,
        email: { message: "Email already exists" },
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutralWhite-100 dark:bg-dark-200">
      <Navbar showAuth={false} />
      <main>
        <AuthLayout
          title="Create your account"
          subtitle="Join Impressa and start sharing your photos"
          showBackButton={false}
        >
          <div className="space-y-6">
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
              Continue with Google
            </button>

            <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-xs sm:text-sm">
              <div className="w-5 h-5 mr-1 sm:mr-3 bg-[#1877F2] rounded-full flex items-center justify-center text-white">
                <span className="text-sm font-bold">f</span>
              </div>
              Continue with Facebook
            </button>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="block sm:flex space-y-4 sm:space-y-0 gap-x-4">
                <div className="flex-1">
                  <InputGroup
                    label="First Name"
                    isRequired
                    inputValue={formData.firstName}
                    placeholder="John"
                    type="text"
                    textChange={(val: any) =>
                      handleChange({ type: "firstName", val })
                    }
                    helperText={errors.firstName.message}
                  />
                </div>

                <div className="flex-1">
                  <InputGroup
                    label="Last Name"
                    isRequired
                    inputValue={formData.lastName}
                    placeholder="Doe"
                    type="text"
                    textChange={(val: any) =>
                      handleChange({ type: "lastName", val })
                    }
                    helperText={errors.lastName.message}
                  />
                </div>
              </div>

              <InputGroup
                label="Email"
                isRequired
                inputValue={formData.email}
                placeholder="johndoe@gmail.com"
                type="email"
                textChange={(val: any) => handleChange({ type: "email", val })}
                helperText={errors.email.message}
              />

              <InputGroup
                label="Password"
                isRequired
                inputValue={formData.password}
                placeholder="Create a strong password"
                type="password"
                textChange={(val: any) =>
                  handleChange({ type: "password", val })
                }
                helperText={errors.password.message}
              />

              <InputGroup
                label="Confirm Password"
                isRequired
                inputValue={formData.confirmPassword}
                placeholder="Confirm your password"
                type="password"
                textChange={(val: any) =>
                  handleChange({ type: "confirmPassword", val })
                }
                helperText={errors.confirmPassword.message}
              />

              <div className="flex items-center">
                <input
                  id="accept-terms"
                  name="accept-terms"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating account...
                  </div>
                ) : (
                  "Create account"
                )}
              </button>
            </form>

            <div className="text-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-medium transition-colors"
                >
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </AuthLayout>
      </main>
    </div>
  );
}
