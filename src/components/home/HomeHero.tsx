import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useAuth } from "@/lib/hooks/useAuth";
import { AutocompleteSearch } from "./AutoCompleteSearch";

export function HomeHero() {
  const { heroImages } = useSelector((state: any) => state.home);
  const { isAuthenticated } = useAuth();
  return (
    <section className="relative overflow-y-visible pt-20 pb-32 sm:pt-24 sm:pb-40">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primaryTeal-100/5 via-primaryTeal-100/3 to-transparent dark:from-primaryTeal-100/10 dark:via-primaryTeal-100/5 dark:to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primaryTeal-100/10 dark:bg-primaryTeal-100/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondaryTeal-100/10 dark:bg-secondaryTeal-100/5 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-primary-100 dark:text-primaryDark-100 mb-8 leading-tight">
              Discover and share{" "}
              <span className="text-primaryTeal-100">stunning</span> images
            </h1>
            <p className="text-xl text-primary-100/70 dark:text-primaryDark-100/70 mb-10 leading-relaxed">
              Impressa is the perfect place for photographers and visual
              creators to find inspiration, share their work, and grow their
              audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Dont show join button if already authenticated */}
              {!isAuthenticated && (
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-lg bg-primaryTeal-100 px-6 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-secondaryTeal-100 hover:shadow-primaryTeal-100/20 dark:hover:shadow-primaryTeal-100/10 hover:translate-y-[-2px]"
                >
                  Join Impressa
                </Link>
              )}

              <Link
                href="/explore"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primaryTeal-100 bg-transparent px-6 py-4 text-base font-medium text-primaryTeal-100 shadow-sm transition-all hover:bg-primaryTeal-100/5 dark:hover:bg-primaryTeal-100/10 hover:shadow-lg hover:shadow-primaryTeal-100/10 dark:hover:shadow-primaryTeal-100/5 hover:translate-y-[-2px]"
              >
                Explore Images
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="mt-12 relative max-w-md">
              {/* <div className="absolute inset-0 bg-primaryTeal-100/5 dark:bg-primaryTeal-100/10 rounded-xl blur"></div>
              <div className="relative bg-neutralWhite-100/80 dark:bg-dark-100/80 backdrop-blur-md rounded-xl border border-gray-200/50 dark:border-dark-100/50 shadow-xl">
                <div className="flex items-center p-4">
                  <Search className="h-5 w-5 text-primary-100/40 dark:text-primaryDark-100/40 mr-3" />
                  <input
                    type="text"
                    placeholder="Search for stunning images..."
                    className="w-full bg-transparent text-primary-100 dark:text-primaryDark-100 placeholder-primary-100/40 dark:placeholder-primaryDark-100/40 focus:outline-none"
                  />
                </div>
                <div className="px-4 pb-4 flex flex-wrap gap-2">
                  {topics &&
                    topics.length > 0 &&
                    topics.map((topic: any, index: number) => (
                      <Link
                        key={index}
                        href={`/explore?topic=${topic._id}`}
                        className="inline-flex rounded-full px-3 py-1 text-xs font-medium bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 hover:bg-primaryTeal-100/20 dark:hover:bg-primaryTeal-100/30 transition-colors"
                      >
                        {topic.name}
                      </Link>
                    ))}
                </div>
              </div> */}
              <AutocompleteSearch />
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primaryTeal-100/20 to-secondaryTeal-100/20 rounded-2xl blur-3xl opacity-30 dark:opacity-20"></div>
            <div className="relative grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
              <div className="col-span-7 row-span-4 overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src={
                    (heroImages && heroImages[0] && heroImages[0].url) ||
                    "/placeholder.svg"
                  }
                  alt={
                    (heroImages && heroImages[0] && heroImages[0].title) ||
                    "stunning hero"
                  }
                  className="w-full h-full object-cover"
                  width={400}
                  height={500}
                />
              </div>
              <div className="col-span-5 row-span-3 col-start-8 overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src={
                    (heroImages && heroImages[1] && heroImages[1].url) ||
                    "/placeholder.svg"
                  }
                  alt={
                    (heroImages && heroImages[1] && heroImages[1].title) ||
                    "stunning hero"
                  }
                  className="w-full h-full object-cover"
                  width={400}
                  height={500}
                />
              </div>
              <div className="col-span-5 row-span-3 col-start-8 row-start-4 overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src={
                    (heroImages && heroImages[2] && heroImages[2].url) ||
                    "/placeholder.svg"
                  }
                  alt={
                    (heroImages && heroImages[2] && heroImages[2].title) ||
                    "stunning hero"
                  }
                  className="w-full h-full object-cover"
                  width={400}
                  height={500}
                />
              </div>
              <div className="col-span-7 row-span-2 row-start-5 overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src={
                    (heroImages && heroImages[3] && heroImages[3].url) ||
                    "/placeholder.svg"
                  }
                  alt={
                    (heroImages && heroImages[3] && heroImages[3].title) ||
                    "stunning hero"
                  }
                  className="w-full h-full object-cover"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
