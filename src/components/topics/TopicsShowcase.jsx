"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function TopicsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Mock featured topics data with creative gradients
  const featuredTopics = [
    {
      id: 1,
      name: "Landscapes",
      description: "Breathtaking views of mountains, oceans, forests and more",
      imageCount: 1245,
      image: "/placeholder.svg?height=600&width=1200&text=Landscapes",
      gradient:
        "bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-indigo-500/80",
    },
    {
      id: 2,
      name: "Street Photography",
      description:
        "Candid shots capturing the essence of urban life around the world",
      imageCount: 876,
      image: "/placeholder.svg?height=600&width=1200&text=Street+Photography",
      gradient:
        "bg-gradient-to-br from-orange-500/80 via-red-500/80 to-pink-500/80",
    },
    {
      id: 3,
      name: "Minimalism",
      description: "Clean, simple compositions with powerful visual impact",
      imageCount: 654,
      image: "/placeholder.svg?height=600&width=1200&text=Minimalism",
      gradient:
        "bg-gradient-to-br from-gray-700/80 via-gray-800/80 to-gray-900/80",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % featuredTopics.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? featuredTopics.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="showcase" className="mb-24 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-primary-100 dark:text-primaryDark-100 mb-2">
            Featured Topics
          </h2>
          <p className="text-primary-100/70 dark:text-primaryDark-100/70 max-w-2xl">
            Explore our most popular topics with thousands of curated images
          </p>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-200 dark:border-dark-100 text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100 transition-colors"
            aria-label="Previous topic"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex space-x-1">
            {featuredTopics.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-primaryTeal-100 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-primaryTeal-100/50 dark:hover:bg-primaryTeal-100/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-200 dark:border-dark-100 text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100 transition-colors"
            aria-label="Next topic"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {featuredTopics.map((topic) => (
            <div key={topic.id} className="w-full flex-shrink-0">
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl">
                <img
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.name}
                  className="h-full w-full object-cover"
                />
                <div className={`absolute inset-0 ${topic.gradient}`}>
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                        {topic.imageCount.toLocaleString()} images
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">
                      {topic.name}
                    </h3>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl">
                      {topic.description}
                    </p>

                    <Link
                      href={`/topics/${topic.id}`}
                      className="inline-flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm px-6 py-3 text-base font-medium text-white transition-all hover:bg-white/30 w-auto self-start"
                    >
                      Explore Topic
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
