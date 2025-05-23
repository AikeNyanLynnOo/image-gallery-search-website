"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

export function ExploreHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primaryTeal-100/10 via-primaryTeal-100/5 to-transparent dark:from-primaryTeal-100/20 dark:via-primaryTeal-100/10 dark:to-transparent"></div>
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primaryTeal-100/10 dark:bg-primaryTeal-100/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondaryTeal-100/10 dark:bg-secondaryTeal-100/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-100 dark:text-primaryDark-100 mb-6">
            Explore <span className="text-primaryTeal-100">Stunning</span>{" "}
            Photography
          </h1>
          <p className="text-lg text-primary-100/70 dark:text-primaryDark-100/70 mb-10 max-w-2xl mx-auto">
            Discover breathtaking images from talented photographers around the
            world. Find inspiration for your next project or simply enjoy the
            beauty.
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <form
              onSubmit={handleSearch}
              className="relative flex items-center"
            >
              <div className="absolute left-4 z-10">
                <Search className="h-5 w-5 text-primaryTeal-100" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for images, collections, or topics..."
                className="w-full py-4 pl-12 pr-24 rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100/90 dark:bg-dark-100/90 backdrop-blur-md text-primary-100 dark:text-primaryDark-100 placeholder-primary-100/40 dark:placeholder-primaryDark-100/40 shadow-lg focus:outline-none focus:ring-2 focus:ring-primaryTeal-100 transition-all"
              />
              <button
                type="submit"
                className="absolute right-3 rounded-lg bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100 hover:shadow-lg hover:shadow-primaryTeal-100/20 dark:hover:shadow-primaryTeal-100/10"
              >
                Search
              </button>
            </form>
          </div>

          {/* Popular search terms */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="text-sm text-primary-100/60 dark:text-primaryDark-100/60 mr-2">
              Popular:
            </span>
            <a
              href="#nature"
              className="text-sm text-primaryTeal-100 hover:text-secondaryTeal-100 hover:underline transition-colors"
            >
              Nature
            </a>
            <span className="text-primary-100/30 dark:text-primaryDark-100/30">
              •
            </span>
            <a
              href="#architecture"
              className="text-sm text-primaryTeal-100 hover:text-secondaryTeal-100 hover:underline transition-colors"
            >
              Architecture
            </a>
            <span className="text-primary-100/30 dark:text-primaryDark-100/30">
              •
            </span>
            <a
              href="#travel"
              className="text-sm text-primaryTeal-100 hover:text-secondaryTeal-100 hover:underline transition-colors"
            >
              Travel
            </a>
            <span className="text-primary-100/30 dark:text-primaryDark-100/30">
              •
            </span>
            <a
              href="#portrait"
              className="text-sm text-primaryTeal-100 hover:text-secondaryTeal-100 hover:underline transition-colors"
            >
              Portrait
            </a>
            <span className="text-primary-100/30 dark:text-primaryDark-100/30">
              •
            </span>
            <a
              href="#minimalism"
              className="text-sm text-primaryTeal-100 hover:text-secondaryTeal-100 hover:underline transition-colors"
            >
              Minimalism
            </a>
          </div>

          {/* Browse all link */}
          <a
            href="#browse-all"
            className="inline-flex items-center text-primaryTeal-100 hover:text-secondaryTeal-100 font-medium group"
          >
            Browse all categories
            <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
