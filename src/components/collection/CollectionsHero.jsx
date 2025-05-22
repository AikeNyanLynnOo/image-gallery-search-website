"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CollectionsHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primaryTeal-100/10 via-transparent to-secondaryTeal-100/5 dark:from-primaryTeal-100/20 dark:via-transparent dark:to-secondaryTeal-100/10"></div>
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primaryTeal-100/10 dark:bg-primaryTeal-100/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondaryTeal-100/10 dark:bg-secondaryTeal-100/5 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 left-1/4 w-20 h-20 rounded-full border-4 border-primaryTeal-100/20 dark:border-primaryTeal-100/10"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full border-4 border-secondaryTeal-100/20 dark:border-secondaryTeal-100/10"></div>
      <div className="absolute bottom-10 left-1/3 w-16 h-16 rounded-full border-4 border-primaryTeal-100/20 dark:border-primaryTeal-100/10"></div>

      {/* Content */}
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 relative">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 text-sm font-medium">
              Curated Collections
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-primaryTeal-100/0 via-primaryTeal-100/30 to-primaryTeal-100/0 blur-sm opacity-50 animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary-100 dark:text-primaryDark-100 mb-6 tracking-tight">
            Discover Inspiring{" "}
            <span className="text-primaryTeal-100">Collections</span>
          </h1>

          <p className="text-lg text-primary-100/70 dark:text-primaryDark-100/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore curated collections of stunning images organized by theme,
            style, and subject. Find inspiration for your next project or create
            your own collection.
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
              placeholder="Search for collections..."
              className="w-full py-4 pl-12 pr-4 rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100/90 dark:bg-dark-100/90 backdrop-blur-md text-primary-100 dark:text-primaryDark-100 placeholder-primary-100/40 dark:placeholder-primaryDark-100/40 shadow-lg focus:outline-none focus:ring-2 focus:ring-primaryTeal-100 transition-all relative z-0"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100 hover:shadow-lg hover:shadow-primaryTeal-100/20 dark:hover:shadow-primaryTeal-100/10 z-10"
            >
              Search
            </button>
          </form>

          {/* Create collection button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard/collections"
              className="inline-flex items-center justify-center rounded-lg bg-primaryTeal-100 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-secondaryTeal-100 hover:shadow-primaryTeal-100/20 dark:hover:shadow-primaryTeal-100/10 hover:translate-y-[-2px]"
            >
              Create Collection
            </Link>
            <Link
              href="#featured"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primaryTeal-100 bg-transparent px-6 py-3 text-base font-medium text-primaryTeal-100 shadow-sm transition-all hover:bg-primaryTeal-100/5 dark:hover:bg-primaryTeal-100/10 hover:shadow-lg hover:shadow-primaryTeal-100/10 dark:hover:shadow-primaryTeal-100/5 hover:translate-y-[-2px]"
            >
              Explore Featured
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
