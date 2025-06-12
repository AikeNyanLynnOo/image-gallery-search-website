"use client";

import {
  ChevronLeft,
  ChevronRight,
  SlidersHorizontalIcon,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AutocompleteSearch } from "../home/AutoCompleteSearch";

export function FilterSection() {
  const {
    filterOptions,
    suggestedTopics,
    loading,
    filters,
    setUploadedWithin,
    setSortBy,
    setTopic,
  } = useSelector((state: any) => state.explore);

  const { uploadedWithin, sortBy, topic } = filters || {};

  const [showFilters, setShowFilters] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const categoriesRef = useRef<any>(null);

  // const [selectedTime, setSelectedTime] = useState("all");
  // const [selectedSort, setSelectedSort] = useState("likes");
  // const [selectedTopic, setSelectedTopic] = useState("");

  // Check if categories container has overflow
  useEffect(() => {
    const checkOverflow = () => {
      if (categoriesRef.current) {
        const { scrollWidth, clientWidth } = categoriesRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  // Scroll categories horizontally
  const scrollCategories = (direction: any) => {
    if (categoriesRef.current) {
      const scrollAmount = 200;
      const currentScroll = categoriesRef.current.scrollLeft;
      categoriesRef.current.scrollTo({
        left:
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update the resetFilters function to also reset the new state variables
  const resetFilters = () => {
    setTopic("all");
    setSortBy("likes");
    setUploadedWithin("all");
  };

  return (
    <section className="sticky top-[80px] z-10 bg-neutralWhite-100/90 dark:bg-dark-200/90 backdrop-blur-lg">
      {/* Header with filter toggle */}

      <div className="container mx-auto px-4 py-2 space-y-2 pb-6">
        <div className="flex items-center sm:justify-between gap-2 sm:gap-4">
          <h2 className="text-xl hidden sm:block font-bold text-primary-100 dark:text-primaryDark-100">
            Explore
          </h2>
          <div className="relative flex-1 mx-auto">
            <AutocompleteSearch
              showPopularTags={false}
              showResultsCount={false}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-4 py-4 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100"
          >
            <SlidersHorizontalIcon
              className={`h-4 w-4 ${showFilters ? "text-primaryTeal-100" : "text-primary-100 dark:text-primaryDark-100"}`}
            />
          </button>
        </div>

        {/* Categories with horizontal scroll */}
        <div className={`relative ${showScrollButtons ? "px-12" : "px-0"}`}>
          {showScrollButtons && (
            <>
              <button
                onClick={() => scrollCategories("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-dark-200 shadow-md text-primary-100 dark:text-primaryDark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollCategories("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-dark-200 shadow-md text-primary-100 dark:text-primaryDark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
          <div
            ref={categoriesRef}
            className="flex items-center overflow-x-auto scrollbar-hide space-x-2 py-2 px-2 -mx-2 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[{ name: "All", value: "all" }, ...suggestedTopics].map(
              (t: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setTopic(t.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                    topic === t.value
                      ? "bg-primaryTeal-100 text-white"
                      : "bg-gray-100 dark:bg-dark-100 text-primary-100 dark:text-primaryDark-100 hover:bg-gray-200 dark:hover:bg-dark-100/70"
                  }`}
                >
                  {t.name}
                </button>
              )
            )}
          </div>
        </div>

        {/* Expanded filters */}
        {showFilters && (
          <div className="rounded-xl border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/30 p-4 animate-in fade-in-50 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-primary-100 dark:text-primaryDark-100 mb-3">
                  Time
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setUploadedWithin("all")}
                    className={`px-3 py-1.5 rounded-md text-sm ${
                      uploadedWithin === "all"
                        ? "bg-primaryTeal-100 text-white"
                        : "bg-white dark:bg-dark-200 text-primary-100 dark:text-primaryDark-100 border border-gray-200 dark:border-dark-100 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100"
                    }`}
                  >
                    All Time
                  </button>
                  {filterOptions &&
                    filterOptions.time &&
                    filterOptions.time.length > 0 &&
                    filterOptions.time.map((t: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setUploadedWithin(t.value)}
                        className={`px-3 py-1.5 rounded-md text-sm ${
                          uploadedWithin === t.value
                            ? "bg-primaryTeal-100 text-white"
                            : "bg-white dark:bg-dark-200 text-primary-100 dark:text-primaryDark-100 border border-gray-200 dark:border-dark-100 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100"
                        }`}
                      >
                        {t.name}
                      </button>
                    ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-primary-100 dark:text-primaryDark-100 mb-3">
                  Sort By
                </h3>
                <div className="flex flex-wrap gap-2">
                  {filterOptions &&
                    filterOptions.sortBy &&
                    filterOptions.sortBy.length > 0 &&
                    filterOptions.sortBy.map((option: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSortBy(option.value)}
                        className={`px-3 py-1.5 rounded-md text-sm ${
                          sortBy === option.value
                            ? "bg-primaryTeal-100 text-white"
                            : "bg-white dark:bg-dark-200 text-primary-100 dark:text-primaryDark-100 border border-gray-200 dark:border-dark-100 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100"
                        }`}
                      >
                        {option.name}
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3 mt-4 pt-3 border-t border-gray-200 dark:border-dark-100">
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
              >
                Reset
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="px-4 py-2 rounded-md bg-primaryTeal-100 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100"
              >
                Apply
              </button>
            </div>
          </div>
        )}

        {/* Active filters */}
        {/* Update the active filters condition to include the new filters */}
        {(topic !== "all" ||
          uploadedWithin !== "all" ||
          sortBy !== "likes") && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-primary-100/70 dark:text-primaryDark-100/70">
              Active filters:
            </span>

            {topic !== "all" && (
              <div className="flex items-center gap-1 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 px-3 py-1 text-sm text-primaryTeal-100">
                <span>
                  Topic:{" "}
                  {suggestedTopics.find((t: any) => t.value === topic)?.name}
                </span>
                <button
                  onClick={() => setTopic("all")}
                  aria-label="Remove category filter"
                  className="ml-1 hover:bg-primaryTeal-100/20 rounded-full p-0.5"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            {uploadedWithin !== "all" && (
              <div className="flex items-center gap-1 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 px-3 py-1 text-sm text-primaryTeal-100">
                <span>
                  Time:{" "}
                  {filterOptions &&
                    filterOptions.time &&
                    filterOptions.time.find(
                      (option: any) => option.value === uploadedWithin
                    )?.name}
                </span>
                <button
                  onClick={() => setUploadedWithin("all")}
                  aria-label="Remove time filter"
                  className="ml-1 hover:bg-primaryTeal-100/20 rounded-full p-0.5"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            {sortBy !== "likes" && (
              <div className="flex items-center gap-1 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 px-3 py-1 text-sm text-primaryTeal-100">
                <span>
                  Sort:{" "}
                  {filterOptions &&
                    filterOptions.sortBy &&
                    filterOptions.sortBy.find(
                      (option: any) => option.value === sortBy
                    )?.name}
                </span>
                <button
                  onClick={() => setSortBy("most_likes")}
                  aria-label="Remove sort filter"
                  className="ml-1 hover:bg-primaryTeal-100/20 rounded-full p-0.5"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            <button
              onClick={resetFilters}
              className="text-sm text-primaryTeal-100 hover:text-secondaryTeal-100 hover:underline ml-auto sm:ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
