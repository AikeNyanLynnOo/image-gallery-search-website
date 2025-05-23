export function RecentActivity() {
  // Mock activity data
  const activities = [
    {
      id: 1,
      type: "upload",
      title: "Mountain Sunset",
      timestamp: "2 hours ago",
      image: "/placeholder.svg?height=60&width=80",
    },
    {
      id: 2,
      type: "favorite",
      title: "Ocean Waves",
      timestamp: "Yesterday",
      image: "/placeholder.svg?height=60&width=80",
    },
    {
      id: 3,
      type: "collection",
      title: "Created 'Nature' collection",
      timestamp: "2 days ago",
    },
    {
      id: 4,
      type: "topic",
      title: "Created 'Landscapes' topic",
      timestamp: "3 days ago",
    },
  ]

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm">
      <div className="border-b border-gray-200 dark:border-dark-100 p-4">
        <h2 className="font-semibold text-primary-100 dark:text-primaryDark-100">Recent Activity</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              {activity.image ? (
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="h-12 w-16 rounded-md object-cover"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primaryTeal-100/20 dark:bg-primaryTeal-100/30 text-sm font-medium text-primaryTeal-100">
                    JD
                  </div>
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm font-medium text-primary-100 dark:text-primaryDark-100">{activity.title}</p>
                <p className="text-xs text-primary-100/70 dark:text-primaryDark-100/70">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
