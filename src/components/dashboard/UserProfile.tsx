import Link from "next/link"
import { Edit, MapPin, Globe } from "lucide-react"

export function UserProfile() {
  // Mock user data
  const user = {
    firstName: "John",
    lastName: "Doe",
    displayName: "johndoe",
    bio: "Photographer and digital artist passionate about landscapes and abstract art.",
    location: "San Francisco, CA",
    website: "johndoe.com",
    avatar: "/placeholder.svg?height=100&width=100",
  }

  return (
    <div className="col-span-2 overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm md:col-span-1">
      <div className="flex flex-row items-center gap-4 p-4 pb-2">
        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-100 dark:bg-dark-100">
          <img src={user.avatar || "/placeholder.svg"} alt={user.displayName} className="h-full w-full object-cover" />
        </div>
        <div className="grid gap-0.5">
          <h3 className="text-lg font-semibold text-primary-100 dark:text-primaryDark-100">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-sm text-primary-100/70 dark:text-primaryDark-100/70">@{user.displayName}</p>
        </div>
      </div>
      <div className="p-4 pb-2">
        <div className="grid gap-4">
          <p className="text-sm text-primary-100 dark:text-primaryDark-100">{user.bio}</p>
          <div className="grid gap-2">
            {user.location && (
              <div className="flex items-center gap-2 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
                <MapPin className="h-4 w-4" />
                <span>{user.location}</span>
              </div>
            )}
            {user.website && (
              <div className="flex items-center gap-2 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
                <Globe className="h-4 w-4" />
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primaryTeal-100 hover:underline"
                >
                  {user.website}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <Link
          href="/dashboard/profile"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-4 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100 focus:outline-none focus:ring-2 focus:ring-primaryTeal-100 focus:ring-offset-2 dark:focus:ring-offset-dark-200"
        >
          <Edit className="h-4 w-4" />
          Edit Profile
        </Link>
      </div>
    </div>
  )
}
