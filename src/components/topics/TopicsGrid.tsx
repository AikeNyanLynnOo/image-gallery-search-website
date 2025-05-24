"use client";

import { useState, useEffect } from "react";
import { ImageIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TopicsGrid() {
  const [topics, setTopics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Mock topics data with creative designs
  const mockTopics = [
    {
      id: 1,
      name: "Landscapes",
      description: "Beautiful landscapes and natural wonders",
      imageCount: 1245,
      image: "/placeholder.svg?height=300&width=400&text=Landscapes",
      color: "from-blue-500 to-indigo-600",
      emoji: "🏞️",
    },
    {
      id: 2,
      name: "Street Photography",
      description: "Candid shots capturing the essence of urban life",
      imageCount: 876,
      image: "/placeholder.svg?height=300&width=400&text=Street+Photography",
      color: "from-orange-500 to-red-600",
      emoji: "🏙️",
    },
    {
      id: 3,
      name: "Minimalism",
      description: "Clean, simple, and minimal compositions",
      imageCount: 654,
      image: "/placeholder.svg?height=300&width=400&text=Minimalism",
      color: "from-gray-700 to-gray-900",
      emoji: "◻️",
    },
    {
      id: 4,
      name: "Portrait",
      description: "Captivating portraits that tell a story",
      imageCount: 1089,
      image: "/placeholder.svg?height=300&width=400&text=Portrait",
      color: "from-pink-500 to-purple-600",
      emoji: "👤",
    },
    {
      id: 5,
      name: "Architecture",
      description: "Modern and classic architectural designs",
      imageCount: 932,
      image: "/placeholder.svg?height=300&width=400&text=Architecture",
      color: "from-teal-500 to-green-600",
      emoji: "🏛️",
    },
    {
      id: 6,
      name: "Black & White",
      description: "Monochrome photography and art",
      imageCount: 743,
      image: "/placeholder.svg?height=300&width=400&text=Black+and+White",
      color: "from-gray-500 to-gray-800",
      emoji: "⚪⚫",
    },
    {
      id: 7,
      name: "Nature",
      description: "The beauty of the natural world",
      imageCount: 1532,
      image: "/placeholder.svg?height=300&width=400&text=Nature",
      color: "from-green-500 to-emerald-600",
      emoji: "🌿",
    },
    {
      id: 8,
      name: "Urban",
      description: "City life and urban environments",
      imageCount: 865,
      image: "/placeholder.svg?height=300&width=400&text=Urban",
      color: "from-slate-600 to-slate-800",
      emoji: "🏙️",
    },
    {
      id: 9,
      name: "Abstract",
      description: "Abstract art and digital creations",
      imageCount: 678,
      image: "/placeholder.svg?height=300&width=400&text=Abstract",
      color: "from-purple-500 to-violet-600",
      emoji: "🎨",
    },
  ];

  // Load topics when page changes
  useEffect(() => {
    setLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // In a real app, you would fetch from an API with pagination
      const newTopics = [...mockTopics].sort(() => 0.5 - Math.random());

      if (page === 1) {
        setTopics(newTopics);
      } else {
        setTopics((prevTopics: any) => [...prevTopics, ...newTopics]);
      }

      // Set hasMore to false after 3 pages for demo purposes
      if (page >= 3) {
        setHasMore(false);
      }

      setLoading(false);
    }, 1000);
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-primary-100 dark:text-primaryDark-100 mb-8">
        All Topics
      </h2>

      {/* Topics grid with creative cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            href={`/topics/${topic.id}`}
            className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-md hover:shadow-xl transition-all duration-500 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100"
          >
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-90 group-hover:opacity-95 transition-opacity`}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="text-4xl mb-2">{topic.emoji}</div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-white/90 mb-4">
                      {topic.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <ImageIcon className="h-4 w-4" />
                        <span>{topic.imageCount.toLocaleString()} images</span>
                      </div>

                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
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

      {/* Load more button */}
      <div className="mt-12 text-center">
        {hasMore ? (
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
              "Load More Topics"
            )}
          </button>
        ) : (
          <p className="text-primary-100/70 dark:text-primaryDark-100/70">
            You&apos;ve reached the end of the topics
          </p>
        )}
      </div>
    </section>
  );
}
