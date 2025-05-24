"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function TrendingTopics() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Mock trending topics data
  const topics = [
    {
      id: 1,
      name: "Landscapes",
      imageCount: 1245,
      image: "/placeholder.svg?height=200&width=300&text=Landscapes",
    },
    {
      id: 2,
      name: "Street Photography",
      imageCount: 876,
      image: "/placeholder.svg?height=200&width=300&text=Street+Photography",
    },
    {
      id: 3,
      name: "Minimalism",
      imageCount: 654,
      image: "/placeholder.svg?height=200&width=300&text=Minimalism",
    },
    {
      id: 4,
      name: "Portrait",
      imageCount: 1089,
      image: "/placeholder.svg?height=200&width=300&text=Portrait",
    },
    {
      id: 5,
      name: "Architecture",
      imageCount: 932,
      image: "/placeholder.svg?height=200&width=300&text=Architecture",
    },
    {
      id: 6,
      name: "Black & White",
      imageCount: 743,
      image: "/placeholder.svg?height=200&width=300&text=Black+and+White",
    },
    {
      id: 7,
      name: "Nature",
      imageCount: 1532,
      image: "/placeholder.svg?height=200&width=300&text=Nature",
    },
    {
      id: 8,
      name: "Urban",
      imageCount: 865,
      image: "/placeholder.svg?height=200&width=300&text=Urban",
    },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(topics.length / itemsPerPage);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-primary-100 dark:text-primaryDark-100 mb-2">
            Trending Topics
          </h2>
          <p className="text-primary-100/70 dark:text-primaryDark-100/70">
            Explore what&apos;s popular right now in the community
          </p>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-200 dark:border-dark-100 text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100 transition-colors"
            aria-label="Previous topics"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-200 dark:border-dark-100 text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100 transition-colors"
            aria-label="Next topics"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {topics
                .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                .map((topic) => (
                  <Link
                    key={topic.id}
                    href={`/topics/${topic.id}`}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-md hover:shadow-xl transition-all duration-300 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100"
                  >
                    <div className="aspect-[3/2] w-full overflow-hidden">
                      <img
                        src={topic.image || "/placeholder.svg"}
                        alt={topic.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {topic.name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {topic.imageCount.toLocaleString()} images
                      </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-primaryTeal-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white font-medium">
                        Explore Topic
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full mx-1 transition-all ${
              activeIndex === index
                ? "bg-primaryTeal-100 w-8"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-primaryTeal-100/50 dark:hover:bg-primaryTeal-100/50"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
