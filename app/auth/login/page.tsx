"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { InputGroup } from "@/components/inputs/InputGroup";
import { Navbar } from "@/components/home/NavBar";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: { message: string };
  password: { message: string };
}

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    email: { message: "" },
    password: { message: "" },
  });
  const [isLoading, setIsLoading] = useState(false);

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
      email: { message: "" },
      password: { message: "" },
    };

    // Email validation
    if (!formData.email) {
      newErrors.email.message = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email.message = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password.message = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password.message = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return !newErrors.email.message && !newErrors.password.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // On success, redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setErrors((prev) => ({
        ...prev,
        email: { message: "Invalid email or password" },
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
          title="Welcome back"
          subtitle="Sign in to your Impressa account"
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
              Sign up with Google
            </button>

            <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-xs sm:text-sm">
              <div className="w-5 h-5 mr-1 sm:mr-3 bg-[#1877F2] rounded-full flex items-center justify-center text-white">
                <span className="text-sm font-bold">f</span>
              </div>
              Sign in with Facebook
            </button>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Enter your password"
                type="password"
                textChange={(val: any) =>
                  handleChange({ type: "password", val })
                }
                helperText={errors.password.message}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            <div className="text-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-medium transition-colors"
                >
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </AuthLayout>
      </main>
    </div>
  );
}
