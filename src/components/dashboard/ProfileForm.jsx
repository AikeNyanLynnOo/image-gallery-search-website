"use client"

import { useState } from "react"
import { Trash2, Upload } from "lucide-react"

export function ProfileForm() {
  // Mock user data
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    displayName: "johndoe",
    bio: "Photographer and digital artist passionate about landscapes and abstract art.",
    location: "San Francisco, CA",
    website: "johndoe.com",
    avatar: "/placeholder.svg?height=100&width=100",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Profile updated:", user)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleAvatarUpload = () => {
    // Handle avatar upload
    console.log("Avatar upload clicked")
  }

  const handleAvatarDelete = () => {
    // Handle avatar deletion
    console.log("Avatar delete clicked")
    setUser((prev) => ({ ...prev, avatar: "" }))
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm">
      <div className="border-b border-gray-200 dark:border-dark-100 p-4">
        <h2 className="font-semibold text-primary-100 dark:text-primaryDark-100">Profile Information</h2>
        <p className="mt-1 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
          Update your profile information and how others see you on the platform.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6 p-4">
          <div className="space-y-2">
            <label htmlFor="avatar" className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100">
              Profile Picture
            </label>
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-gray-100 dark:bg-dark-100">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.displayName}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={handleAvatarUpload}
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-1.5 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100 focus:outline-none focus:ring-2 focus:ring-primaryTeal-100 focus:ring-offset-2 dark:focus:ring-offset-dark-200"
                >
                  <Upload className="h-4 w-4" />
                  Change
                </button>
                {user.avatar && (
                  <button
                    type="button"
                    onClick={handleAvatarDelete}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-1.5 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-red-500 hover:text-red-500 dark:hover:border-red-500 dark:hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-dark-200"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="displayName"
              className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100"
            >
              Display Name
            </label>
            <input
              id="displayName"
              name="displayName"
              value={user.displayName}
              onChange={handleChange}
              className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="bio" className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={user.bio}
              onChange={handleChange}
              rows={4}
              className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="location" className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100">
              Location
            </label>
            <input
              id="location"
              name="location"
              value={user.location}
              onChange={handleChange}
              className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="website" className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100">
              Website
            </label>
            <input
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              placeholder="yourwebsite.com"
              className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
            />
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-secondaryTeal-100 focus:outline-none focus:ring-2 focus:ring-primaryTeal-100 focus:ring-offset-2 dark:focus:ring-offset-dark-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
