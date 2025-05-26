import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";

export function PopularCollections() {
  const { popularCollections } = useSelector((state: any) => state.home);
  // Mock collections data
  // const collections = [
  //   {
  //     id: 1,
  //     title: "Nature",
  //     description: "Beautiful landscapes and natural wonders",
  //     imageCount: 124,
  //     coverImage: "/placeholder.svg",
  //     backgroundStyle: "bg-gradient-to-br from-green-500/90 to-emerald-600/90",
  //   },
  //   {
  //     id: 2,
  //     title: "Architecture",
  //     description: "Modern and classic architectural designs",
  //     imageCount: 86,
  //     coverImage: "/placeholder.svg",
  //     backgroundStyle: "bg-gradient-to-br from-blue-500/90 to-purple-600/90",
  //   },
  //   {
  //     id: 3,
  //     title: "Travel",
  //     description: "Inspiring destinations from around the world",
  //     imageCount: 152,
  //     coverImage: "/placeholder.svg",
  //     backgroundStyle: "bg-gradient-to-br from-orange-500/90 to-red-600/90",
  //   },
  //   {
  //     id: 4,
  //     title: "Minimalism",
  //     description: "Clean, simple, and minimal compositions",
  //     imageCount: 78,
  //     coverImage: "/placeholder.svg",
  //     backgroundStyle: "bg-gradient-to-br from-gray-700/90 to-gray-900/90",
  //   },
  // ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primaryTeal-100/5 dark:bg-primaryTeal-100/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondaryTeal-100/5 dark:bg-secondaryTeal-100/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 text-sm font-medium mb-4">
              Curated Collections
            </span>
            <h2 className="text-4xl font-bold text-primary-100 dark:text-primaryDark-100 mb-4">
              Popular Collections
            </h2>
            <p className="text-lg text-primary-100/70 dark:text-primaryDark-100/70 max-w-2xl">
              Explore curated collections of stunning images organized by theme,
              style, and subject.
            </p>
          </div>
          <Link
            href="/collections"
            className="inline-flex items-center text-primaryTeal-100 hover:text-secondaryTeal-100 font-medium mt-6 md:mt-0 group"
          >
            View all collections
            <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {popularCollections &&
            popularCollections.map((collection: any, index: number) => (
              <Link
                key={index}
                href={`/collections/${collection._id}`}
                className="group overflow-hidden rounded-xl border border-gray-200 dark:border-dark-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:translate-y-[-5px]"
              >
                <div className="relative">
                  <Image
                    src={
                      (collection.coverImage && collection.coverImage.url) ||
                      "/placeholder.svg"
                    }
                    alt={
                      (collection.coverImage && collection.coverImage.title) ||
                      ""
                    }
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={500}
                    height={500}
                  />
                  <div
                    className={`absolute inset-0 ${collection.backgroundStyle || ""} opacity-90 group-hover:opacity-95 transition-opacity`}
                  >
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      {/* Creator Info at Top */}
                      <div className="flex items-center space-x-3">
                        <img
                          src={
                            collection.user.profile.avatar || "/placeholder.svg"
                          }
                          alt={collection.user.profile.displayName || ""}
                          className="w-10 h-10 rounded-full border-2 border-white/30 object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-1">
                            <span className="text-white font-medium text-sm truncate">
                              {collection.user.profile.displayName ||
                                `${collection.user.profile.firstName} ${collection.user.profile.lastName}`}
                            </span>
                          </div>
                          <span className="text-white/80 text-xs">
                            {collection.user.profile.bio || ""}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-white drop-shadow-sm mb-2">
                          {collection.name}
                        </h3>
                        <p className="text-lg text-white/90 drop-shadow-sm mb-4">
                          {collection.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-white/80 text-sm font-medium">
                            {collection.totalImages} images
                          </span>
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                            <ArrowRight className="h-5 w-5 text-white transform group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
