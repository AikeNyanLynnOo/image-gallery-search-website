"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TopicsHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primaryTeal-100/10 via-transparent to-secondaryTeal-100/5 dark:from-primaryTeal-100/20 dark:via-transparent dark:to-secondaryTeal-100/10"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full border-8 border-primaryTeal-100/5 dark:border-primaryTeal-100/10 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full border-8 border-secondaryTeal-100/5 dark:border-secondaryTeal-100/10 animate-[spin_40s_linear_infinite_reverse]"></div>
        <div className="absolute top-1/3 right-1/5 w-40 h-40 rounded-full border-4 border-primaryTeal-100/10 dark:border-primaryTeal-100/20 animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 rounded-full bg-secondaryTeal-100/10 dark:bg-secondaryTeal-100/20 blur-xl"></div>

      {/* Content */}
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 relative">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 text-sm font-medium">
              Explore Topics
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-primaryTeal-100/0 via-primaryTeal-100/30 to-primaryTeal-100/0 blur-sm opacity-50 animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary-100 dark:text-primaryDark-100 mb-6 tracking-tight">
            Discover Images by{" "}
            <span className="text-primaryTeal-100">Topic</span>
          </h1>

          <p className="text-lg text-primary-100/70 dark:text-primaryDark-100/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Browse our curated topics to find exactly what you're looking for.
            From landscapes to abstract art, we've organized the best images by
            subject.
          </p>

          {/* Search bar with modern styling */}
          <form
            onSubmit={handleSearch}
            className="relative max-w-2xl mx-auto mb-10 group"
          >
            <div className="absolute inset-0 -m-1 bg-gradient-to-r from-primaryTeal-100/30 via-secondaryTeal-100/30 to-primaryTeal-100/30 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
              <Search className="h-5 w-5 text-primaryTeal-100" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for topics..."
              className="w-full py-4 pl-12 pr-4 rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100/90 dark:bg-dark-100/90 backdrop-blur-md text-primary-100 dark:text-primaryDark-100 placeholder-primary-100/40 dark:placeholder-primaryDark-100/40 shadow-lg focus:outline-none focus:ring-2 focus:ring-primaryTeal-100 transition-all relative z-0"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100 hover:shadow-lg hover:shadow-primaryTeal-100/20 dark:hover:shadow-primaryTeal-100/10 z-10"
            >
              Search
            </button>
          </form>

          {/* Popular topics */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="text-sm text-primary-100/60 dark:text-primaryDark-100/60 mr-2">
              Popular:
            </span>
            <Link
              href="#nature"
              className="px-3 py-1 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 text-sm font-medium hover:bg-primaryTeal-100/20 dark:hover:bg-primaryTeal-100/30 transition-colors"
            >
              Nature
            </Link>
            <Link
              href="#architecture"
              className="px-3 py-1 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 text-sm font-medium hover:bg-primaryTeal-100/20 dark:hover:bg-primaryTeal-100/30 transition-colors"
            >
              Architecture
            </Link>
            <Link
              href="#travel"
              className="px-3 py-1 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 text-sm font-medium hover:bg-primaryTeal-100/20 dark:hover:bg-primaryTeal-100/30 transition-colors"
            >
              Travel
            </Link>
            <Link
              href="#portrait"
              className="px-3 py-1 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 text-sm font-medium hover:bg-primaryTeal-100/20 dark:hover:bg-primaryTeal-100/30 transition-colors"
            >
              Portrait
            </Link>
            <Link
              href="#minimalism"
              className="px-3 py-1 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 text-sm font-medium hover:bg-primaryTeal-100/20 dark:hover:bg-primaryTeal-100/30 transition-colors"
            >
              Minimalism
            </Link>
          </div>

          {/* Browse all link */}
          <Link
            href="#showcase"
            className="inline-flex items-center text-primaryTeal-100 hover:text-secondaryTeal-100 font-medium group"
          >
            Explore all topics
            <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
