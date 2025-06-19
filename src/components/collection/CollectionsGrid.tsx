"use client";

import {
  getCollectionsDataRequest,
  setKeyword,
  setPage,
  setImageCount,
  setDateCreated,
} from "@/lib/features/collection/collectionSlice";
import { setSortBy } from "@/lib/features/explore/exploreSlice";
import {
  ArrowUpDown,
  ChevronRight,
  Eye,
  Heart,
  ImageIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function CollectionsGrid() {
  const dispatch = useDispatch();
  const { filterOptions, collections, pagination, loading, filters } =
    useSelector((state: any) => state.collection);
  const { imageCount, dateCreated, sortBy, keyword } = filters || {};
  const { currentPage, limit, hasNextPage } = pagination || {};

  const [showFilters, setShowFilters] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  // Mock collections data
  const mockCollections = [
    {
      id: 1,
      title: "Mountain Landscapes",
      description: "Majestic mountain ranges and peaks from around the world",
      imageCount: 42,
      coverImage: "/placeholder.svg?height=300&width=500&text=Mountains",
      curator: "Alex Johnson",
      curatorAvatar: "/placeholder.svg?height=100&width=100&text=AJ",
      likes: 1245,
      views: 18720,
      gradient: "from-blue-500/90 to-purple-600/90",
    },
    {
      id: 2,
      title: "Ocean & Beaches",
      description: "Serene ocean views and beautiful beaches",
      imageCount: 36,
      coverImage: "/placeholder.svg?height=300&width=500&text=Ocean",
      curator: "Sarah Williams",
      curatorAvatar: "/placeholder.svg?height=100&width=100&text=SW",
      likes: 892,
      views: 12450,
      gradient: "from-teal-500/90 to-blue-600/90",
    },
    {
      id: 3,
      title: "Urban Cityscapes",
      description: "Modern architecture and urban environments",
      imageCount: 54,
      coverImage: "/placeholder.svg?height=300&width=500&text=Cityscapes",
      curator: "David Chen",
      curatorAvatar: "/placeholder.svg?height=100&width=100&text=DC",
      likes: 756,
      views: 9870,
      gradient: "from-orange-500/90 to-red-600/90",
    },
    {
      id: 4,
      title: "Wildlife Photography",
      description: "Amazing animals in their natural habitats",
      imageCount: 28,
      coverImage: "/placeholder.svg?height=300&width=500&text=Wildlife",
      curator: "Emily Rodriguez",
      curatorAvatar: "/placeholder.svg?height=100&width=100&text=ER",
      likes: 2150,
      views: 34210,
      gradient: "from-green-500/90 to-emerald-600/90",
    },
    {
      id: 5,
      title: "Abstract Art",
      description: "Creative abstract compositions and digital art",
      imageCount: 32,
      coverImage: "/placeholder.svg?height=300&width=500&text=Abstract",
      curator: "Michael Taylor",
      curatorAvatar: "/placeholder.svg?height=100&width=100&text=MT",
      likes: 678,
      views: 9820,
      gradient: "from-purple-500/90 to-pink-600/90",
    },
    {
      id: 6,
      title: "Minimalist Design",
      description: "Clean, simple, and minimal compositions",
      imageCount: 24,
      coverImage: "/placeholder.svg?height=300&width=500&text=Minimalist",
      curator: "Jessica Brown",
      curatorAvatar: "/placeholder.svg?height=100&width=100&text=JB",
      likes: 1432,
      views: 21560,
      gradient: "from-gray-700/90 to-gray-900/90",
    },
  ];

  // Load collections when page changes

  const loadMore = () => {
    if (loading && !loading.isPending && hasNextPage) {
      dispatch(
        getCollectionsDataRequest({
          page: currentPage + 1,
          limit: limit || 10,
          dateCreate: dateCreated || "",
          sortBy: sortBy || "",
          imageCount: imageCount === "all" ? "" : imageCount,
          keyword: keyword || "",
        })
      );
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  return (
    <section>
      {/* Filters and sorting */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h2 className="text-2xl font-bold text-primary-100 dark:text-primaryDark-100">
          All Collections
        </h2>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100"
          >
            <SlidersHorizontalIcon className="h-4 w-4" />
            <span>{showFilters ? "Hide Filters" : "Filters"}</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100"
            >
              <ArrowUpDown className="h-4 w-4" />
              <span>
                {sortBy === "likes"
                  ? "Likes"
                  : sortBy === "views"
                    ? "Views"
                    : sortBy === "downloads"
                      ? "Downloads"
                      : "Sort"}
              </span>
            </button>

            {filterDropdownOpen && (
              <div className="absolute right-0 mt-1 w-48 rounded-md bg-neutralWhite-100 dark:bg-dark-100 shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-1 z-50">
                {filterOptions &&
                  filterOptions.sortBy &&
                  filterOptions.sortBy.map((option: any, index: number) => (
                    <button
                      key={index}
                      className={`flex w-full items-center px-3 py-2 text-left text-sm rounded-md ${
                        sortBy === option.value
                          ? "bg-primaryTeal-100/10 text-primaryTeal-100"
                          : "text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
                      }`}
                      onClick={() => {
                        dispatch(setSortBy(option.value));
                        setFilterDropdownOpen(false);
                      }}
                    >
                      {option.name}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expanded filters */}
      {showFilters && (
        <div className="rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/30 p-4 sm:p-6 mb-8 animate-in fade-in-50 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100">
                Keyword
              </label>
              <input
                type="text"
                placeholder="Search collections..."
                onChange={(e: any) =>
                  dispatch(setKeyword(((e && e.target.value) || "").trim()))
                }
                className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100">
                Image Count
              </label>
              <select
                className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
                value={imageCount}
                onChange={e => dispatch(setImageCount(e.target.value))}
              >
                <option value="all">Any</option>
                {filterOptions &&
                  filterOptions.imageCount &&
                  filterOptions.imageCount.map((option: any, idx: number) => (
                    <option key={idx} value={option.value}>
                      {option.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100">
                Date Created
              </label>
              <select
                className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
                value={dateCreated}
                onChange={e => dispatch(setDateCreated(e.target.value))}
              >
                <option value={"all"}>Any Time</option>
                {filterOptions &&
                  filterOptions.dateCreated &&
                  filterOptions.dateCreated.map((option: any, idx: number) => (
                    <option key={idx} value={option.value}>
                      {option.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="inline-flex items-center justify-center rounded-lg bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100">
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Collections grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection:any) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.id}`}
            className="group overflow-hidden rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-md hover:shadow-xl transition-all duration-500 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100"
          >
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={collection.coverImage || "/placeholder.svg"}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-90 group-hover:opacity-95 transition-opacity`}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 h-8 w-8 overflow-hidden rounded-full border-2 border-white/30">
                      <img
                        src={collection.curatorAvatar || "/placeholder.svg"}
                        alt={collection.curator}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-white/90 text-sm">
                      <p>Curated by {collection.curator}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-4 line-clamp-2">
                    {collection.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <ImageIcon className="h-4 w-4" />
                        <span>{collection.imageCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{formatNumber(collection.views)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{formatNumber(collection.likes)}</span>
                      </div>
                    </div>

                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <ChevronRight className="h-5 w-5 text-white transform group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load more button */}
      <div className="mt-12 text-center">
        {hasNextPage ? (
          <button
            onClick={loadMore}
            disabled={loading}
            className="inline-flex items-center justify-center rounded-lg bg-primaryTeal-100 px-6 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100 hover:shadow-lg hover:shadow-primaryTeal-100/20 disabled:opacity-70"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              "Load More Collections"
            )}
          </button>
        ) : (
          <p className="text-primary-100/70 dark:text-primaryDark-100/70">
            You&apos;ve reached the end of the collections
          </p>
        )}
      </div>
    </section>
  );
}
