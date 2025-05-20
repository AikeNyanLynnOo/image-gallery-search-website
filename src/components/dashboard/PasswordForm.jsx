"use client"

import { useState } from "react"

export function PasswordForm() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password change
    console.log("Password change submitted")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setPasswords((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm">
      <div className="border-b border-gray-200 dark:border-dark-100 p-4">
        <h2 className="font-semibold text-primary-100 dark:text-primaryDark-100">Change Password</h2>
        <p className="mt-1 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
          Update your password to keep your account secure.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100"
            >
              Current Password
            </label>
            <input
              id="currentPassword"
              name="currentPassword"
              type="password"
              value={passwords.currentPassword}
              onChange={handleChange}
              className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100"
            >
              New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              value={passwords.newPassword}
              onChange={handleChange}
              className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100"
            >
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={passwords.confirmPassword}
              onChange={handleChange}
              className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
            />
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-secondaryTeal-100 focus:outline-none focus:ring-2 focus:ring-primaryTeal-100 focus:ring-offset-2 dark:focus:ring-offset-dark-200"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  )
}
