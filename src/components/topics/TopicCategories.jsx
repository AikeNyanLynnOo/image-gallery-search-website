"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function TopicCategories() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categoriesRef = useRef(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  // Mock categories with emoji icons
  const categories = [
    { id: "all", name: "All Categories", emoji: "🌟" },
    { id: "nature", name: "Nature", emoji: "🌿" },
    { id: "architecture", name: "Architecture", emoji: "🏛️" },
    { id: "travel", name: "Travel", emoji: "✈️" },
    { id: "people", name: "People", emoji: "👥" },
    { id: "animals", name: "Animals", emoji: "🐾" },
    { id: "food", name: "Food & Drink", emoji: "🍽️" },
    { id: "art", name: "Art", emoji: "🎨" },
    { id: "technology", name: "Technology", emoji: "💻" },
    { id: "abstract", name: "Abstract", emoji: "🔳" },
    { id: "black-white", name: "Black & White", emoji: "◯" },
    { id: "fashion", name: "Fashion", emoji: "👗" },
    { id: "sports", name: "Sports", emoji: "🏆" },
    { id: "business", name: "Business", emoji: "💼" },
    { id: "health", name: "Health", emoji: "💪" },
  ];

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
  const scrollCategories = (direction) => {
    if (categoriesRef.current) {
      const scrollAmount = 300;
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

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary-100 dark:text-primaryDark-100">
          Browse by Category
        </h2>
        <Link
          href="/topics/categories"
          className="text-primaryTeal-100 hover:text-secondaryTeal-100 text-sm font-medium"
        >
          View all categories
        </Link>
      </div>

      <div className={`relative mb-6 ${showScrollButtons ? "px-12" : "px-0"}`}>
        {showScrollButtons && (
          <>
            <button
              onClick={() => scrollCategories("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-dark-200 shadow-md text-primary-100 dark:text-primaryDark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollCategories("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-dark-200 shadow-md text-primary-100 dark:text-primaryDark-100 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        <div
          ref={categoriesRef}
          className="flex items-center overflow-x-auto scrollbar-hide space-x-3 py-2 px-2 -mx-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-primaryTeal-100 text-white shadow-md"
                  : "bg-gray-100 dark:bg-dark-100 text-primary-100 dark:text-primaryDark-100 hover:bg-gray-200 dark:hover:bg-dark-100/70"
              }`}
            >
              <span>{category.emoji}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
