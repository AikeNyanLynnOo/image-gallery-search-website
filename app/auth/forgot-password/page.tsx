"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { InputGroup } from "@/components/inputs/InputGroup";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/home/NavBar";

interface FormData {
  email: string;
}

interface FormErrors {
  email: { message: string };
}

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    email: { message: "" },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    };

    // Email validation
    if (!formData.email) {
      newErrors.email.message = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email.message = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return !newErrors.email.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Password reset failed:", error);
      setErrors((prev) => ({
        ...prev,
        email: { message: "Email not found. Please check your email address." },
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Show success message or update UI
    } catch (error) {
      console.error("Resend failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="We've sent password reset instructions to your email"
        showBackButton={false}
      >
        <div className="text-center space-y-6">
          <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We&apos;ve sent a password reset link to:
            </p>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              {formData.email}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Didn&apos;t receive the email? Check your spam folder or try again.
            </p>

            <button
              onClick={handleResend}
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2"></div>
                  Resending...
                </div>
              ) : (
                "Resend email"
              )}
            </button>

            <Link
              href="/auth/login"
              className="inline-flex items-center text-sm text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to sign in
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <div className="min-h-screen bg-neutralWhite-100 dark:bg-dark-200">
      <Navbar showAuth={false} />
      <main>
        <AuthLayout
          title="Forgot your password?"
          subtitle="Enter your email address and we'll send you a link to reset your password"
          showBackButton={false}
        >
          <div className="space-y-6">
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

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  "Send reset link"
                )}
              </button>
            </form>

            <div className="text-center">
              <Link
                href="/auth/login"
                className="inline-flex items-center text-sm text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to sign in
              </Link>
            </div>
          </div>
        </AuthLayout>
      </main>
    </div>
  );
}
