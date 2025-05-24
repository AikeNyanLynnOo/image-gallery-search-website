import { FolderKanban, Hash, ImageIcon, Bookmark } from "lucide-react";
import Link from "next/link";

export function UserStats() {
  // Mock stats data
  const stats = [
    {
      title: "Collections",
      value: 12,
      icon: FolderKanban,
      href: "/dashboard/collections",
    },
    {
      title: "Topics",
      value: 8,
      icon: Hash,
      href: "/dashboard/topics",
    },
    {
      title: "Images",
      value: 47,
      icon: ImageIcon,
      href: "/dashboard/images",
    },
    {
      title: "Favorites",
      value: 23,
      icon: Bookmark,
      href: "/dashboard/favorites",
    },
  ];

  return (
    <div className="col-span-2 overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm md:col-span-1">
      <div className="border-b border-gray-200 dark:border-dark-100 p-4">
        <h2 className="font-semibold text-primary-100 dark:text-primaryDark-100">
          Stats
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <Link
              key={stat.title}
              href={stat.href}
              className="flex flex-col items-center gap-1 rounded-lg border border-gray-200 dark:border-dark-100 p-3 transition-colors hover:border-primaryTeal-100 hover:bg-primaryTeal-100/5 dark:hover:bg-primaryTeal-100/10"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100">
                <stat.icon className="h-4 w-4" />
              </div>
              <div className="text-xl font-semibold text-primary-100 dark:text-primaryDark-100">
                {stat.value}
              </div>
              <div className="text-xs text-primary-100/70 dark:text-primaryDark-100/70">
                {stat.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
