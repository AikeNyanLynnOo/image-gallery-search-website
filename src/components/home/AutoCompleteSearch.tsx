"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  Image,
  Users,
  Folder,
  Hash,
  Clock,
  TrendingUp,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { searchHomePageRequest } from "@/lib/features/home/homeSlice";
import Link from "next/link";

interface SearchResult {
  id: string;
  type: "image" | "collection" | "topic" | "user";
  title: string;
  subtitle?: string;
  thumbnail?: string;
  avatar?: string;
}

const recentSearches = ["Nature", "Architecture", "Portrait", "Landscape"];
const popularTags = [
  "Nature",
  "Architecture",
  "Travel",
  "Minimalism",
  "Street",
  "Portrait",
];

export function AutocompleteSearch({
  showPopularTags = true,
  showResultsCount = true,
  className,
}: {
  showPopularTags?: boolean;
  showResultsCount?: boolean;
  className?: string;
}) {
  const { topics } = useSelector((state: any) => state.home);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const { searchResults, loading } = useSelector((state: any) => state.home);

  console.log("Search results>>", searchResults);
  console.log("Loading>>", loading);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(() => {
      dispatch(searchHomePageRequest({ query: query.trim() }));
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    const totalItems = query ? searchResults.length : recentSearches.length;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < totalItems - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          if (query) {
            handleResultClick(searchResults[selectedIndex]);
          } else {
            handleSearch(recentSearches[selectedIndex]);
          }
        } else if (query) {
          handleSearch(query);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery(result.title);
    setIsOpen(false);
    setSelectedIndex(-1);

    // Navigate based on result type
    switch (result.type) {
      case "image":
        router.push(`/image/${result.id}`);
        break;
      case "collection":
        router.push(`/collection/${result.id}`);
        break;
      case "topic":
        router.push(`/topic/${result.id}`);
        break;
      case "user":
        router.push(`/user/${result.id}`);
        break;
    }
  };

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    setIsOpen(false);
    setSelectedIndex(-1);
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    handleSearch(tag);
  };

  const clearSearch = () => {
    setQuery("");
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case "image":
        return <Image className="h-4 w-4" />;
      case "collection":
        return <Folder className="h-4 w-4" />;
      case "topic":
        return <Hash className="h-4 w-4" />;
      case "user":
        return <Users className="h-4 w-4" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-primaryTeal-100/5 dark:bg-primaryTeal-100/10 rounded-xl blur"></div>

      {/* Search container */}
      <div className="relative z-20 bg-neutralWhite-100/80 dark:bg-dark-100/80 backdrop-blur-md rounded-xl border border-gray-200/50 dark:border-dark-100/50 shadow-lg">
        {/* Search input */}
        <div className="flex items-center px-4 py-3">
          <Search className="h-5 w-5 text-primaryTeal-100 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.trim() && setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search images, collections, topics, or users..."
            className="w-full flex-1 bg-transparent text-primary-100 dark:text-primaryDark-100 placeholder-primary-100/50 dark:placeholder-primaryDark-100/50 focus:outline-none"
          />
          {showResultsCount &&
            query &&
            searchResults &&
            searchResults.length > 0 && (
              <span className="text-xs line-clamp-1 w-fit mr-1 text-black dark:text-neutralWhite-100">
                {searchResults.length} Result
                {(searchResults.length > 1 && "s") || ""}
              </span>
            )}
          {query && (
            <button
              onClick={clearSearch}
              className="ml-2 text-primary-100/50 dark:text-primaryDark-100/50 hover:text-primary-100 dark:hover:text-primaryDark-100"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        {/* Popular tags (when not searching) */}
        {!query && showPopularTags && (
          <div className="px-4 pb-4 flex flex-wrap gap-2">
            {topics &&
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
        )}

        {/* Results dropdown */}
        {isOpen && (
          <div className="absolute w-full z-20 top-full left-0 right-0 mt-2 bg-neutralWhite-100 dark:bg-dark-100 rounded-xl border border-gray-200/50 dark:border-dark-100/50 shadow-lg">
            {query ? (
              <>
                {loading.isPending ? (
                  <div className="p-4 text-center text-primary-100/70 dark:text-primaryDark-100/70">
                    Searching...
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="max-h-[200px] overflow-y-auto overflow-x-hidden">
                    {searchResults.map(
                      (result: SearchResult, index: number) => (
                        <button
                          key={result.id}
                          onClick={() => handleResultClick(result)}
                          className={`w-full flex gap-x-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-dark-200 ${
                            index === selectedIndex
                              ? "bg-gray-100 dark:bg-dark-200"
                              : ""
                          }`}
                        >
                          <div className="flex-none">
                            {result.avatar ? (
                              <img
                                src={result.avatar}
                                alt={result.title}
                                className="h-10 w-10 rounded-full"
                              />
                            ) : result.thumbnail ? (
                              <img
                                src={result.thumbnail}
                                alt={result.title}
                                className="h-10 w-10 rounded-lg object-cover"
                              />
                            ) : (
                              <div className="h-10 w-10 rounded-lg bg-gray-200 dark:bg-dark-200 flex items-center justify-center">
                                {getResultIcon(result.type)}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-primary-100 dark:text-primaryDark-100 font-medium sm:truncate max-w-full">
                              {result.title}
                            </div>
                            {result.subtitle && (
                              <div className="text-sm text-primary-100/70 dark:text-primaryDark-100/70">
                                {result.subtitle}
                              </div>
                            )}
                          </div>
                          <div className="flex-none text-primary-100/50 dark:text-primaryDark-100/50">
                            {getResultIcon(result.type)}
                          </div>
                        </button>
                      )
                    )}
                  </div>
                ) : (
                  <div className="p-4 text-center text-primary-100/70 dark:text-primaryDark-100/70">
                    No results found
                  </div>
                )}
              </>
            ) : (
              <div className="p-4">
                {/* Recent searches */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Clock className="h-4 w-4 text-primary-100/70 dark:text-primaryDark-100/70 mr-2" />
                    <h3 className="text-sm font-medium text-primary-100/70 dark:text-primaryDark-100/70">
                      Recent Searches
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => handleSearch(search)}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-dark-200 text-primary-100 dark:text-primaryDark-100 rounded-full hover:bg-gray-200 dark:hover:bg-dark-300"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular tags */}
                <div>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-4 w-4 text-primary-100/70 dark:text-primaryDark-100/70 mr-2" />
                    <h3 className="text-sm font-medium text-primary-100/70 dark:text-primaryDark-100/70">
                      Popular Tags
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-dark-200 text-primary-100 dark:text-primaryDark-100 rounded-full hover:bg-gray-200 dark:hover:bg-dark-300"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
