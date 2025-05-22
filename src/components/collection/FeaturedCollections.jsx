"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function FeaturedCollections() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  // Mock featured collections data
  const featuredCollections = [
    {
      id: 1,
      title: "Breathtaking Landscapes",
      description: "Stunning vistas and natural wonders from around the world",
      imageCount: 124,
      coverImage: "/placeholder.svg?height=500&width=800&text=Landscapes",
      curator: "Jane Smith",
      curatorAvatar: "/placeholder.svg?height=100&width=100&text=JS",
      gradient: "from-blue-500/90 to-purple-600/90",
    },
    {
      id: 2,
      title: "Urban Architecture",
      description:
        "Modern and classic architectural designs from global cities",
      imageCount: 86,
      coverImage: "/placeholder.svg?height=500&width=800&text=Architecture",
      curator: "Michael Chen",
      curatorAvatar: "/placeholder.svg?height=100&width=100&text=MC",
      gradient: "from-orange-500/90 to-red-600/90",
    },
    {
      id: 3,
      title: "Minimalist Photography",
      description:
        "Clean, simple, and minimal compositions with powerful impact",
      imageCount: 78,
      coverImage: "/placeholder.svg?height=500&width=800&text=Minimalist",
      curator: "Emma Rodriguez",
      curatorAvatar: "/placeholder.svg?height=100&width=100&text=ER",
      gradient: "from-green-500/90 to-emerald-600/90",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % featuredCollections.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? featuredCollections.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to active slide
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: activeIndex * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section id="featured" className="mb-24 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-primary-100 dark:text-primaryDark-100 mb-2">
            Featured Collections
          </h2>
          <p className="text-primary-100/70 dark:text-primaryDark-100/70 max-w-2xl">
            Handpicked collections curated by our team and top photographers
          </p>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-200 dark:border-dark-100 text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100 transition-colors"
            aria-label="Previous collection"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex space-x-1">
            {featuredCollections.map((_, index) => (
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
            aria-label="Next collection"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredCollections.map((collection, index) => (
            <div
              key={collection.id}
              className="w-full flex-shrink-0 snap-center"
            >
              <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
                <img
                  src={collection.coverImage || "/placeholder.svg"}
                  alt={collection.title}
                  className="h-full w-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${collection.gradient}`}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <div className="mb-6 flex items-center">
                      <div className="mr-3 h-10 w-10 overflow-hidden rounded-full border-2 border-white/30">
                        <img
                          src={collection.curatorAvatar || "/placeholder.svg"}
                          alt={collection.curator}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="text-white/90">
                        <p className="text-sm">Curated by</p>
                        <p className="font-medium">{collection.curator}</p>
                      </div>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                      {collection.title}
                    </h3>
                    <p className="text-xl text-white/90 mb-6 max-w-2xl">
                      {collection.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="text-white/80 text-lg">
                        {collection.imageCount} images
                      </span>
                      <Link
                        href={`/collections/${collection.id}`}
                        className="inline-flex items-center rounded-lg bg-white/20 backdrop-blur-sm px-6 py-3 text-base font-medium text-white transition-all hover:bg-white/30"
                      >
                        View Collection
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
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
