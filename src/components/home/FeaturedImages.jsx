"use client";

import { useState } from "react";
import { Heart, Eye, Download, ArrowRight, ArrowLeft } from "lucide-react";

export function FeaturedImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Mock featured images data
  const featuredImages = [
    {
      id: 1,
      title: "Mountain Sunset",
      photographer: "Jane Smith",
      src: "/placeholder.svg?height=400&width=600&text=Mountain+Sunset",
      likes: 1245,
      views: 18720,
      downloads: 432,
    },
    {
      id: 2,
      title: "Ocean Waves",
      photographer: "Michael Johnson",
      src: "/placeholder.svg?height=400&width=600&text=Ocean+Waves",
      likes: 892,
      views: 12450,
      downloads: 278,
    },
    {
      id: 3,
      title: "Forest Path",
      photographer: "Emily Davis",
      src: "/placeholder.svg?height=400&width=600&text=Forest+Path",
      likes: 756,
      views: 9870,
      downloads: 189,
    },
    {
      id: 4,
      title: "City Skyline",
      photographer: "David Wilson",
      src: "/placeholder.svg?height=400&width=600&text=City+Skyline",
      likes: 2150,
      views: 34210,
      downloads: 782,
    },
    {
      id: 5,
      title: "Desert Landscape",
      photographer: "Sarah Brown",
      src: "/placeholder.svg?height=400&width=600&text=Desert+Landscape",
      likes: 678,
      views: 9820,
      downloads: 195,
    },
    {
      id: 6,
      title: "Autumn Forest",
      photographer: "Robert Taylor",
      src: "/placeholder.svg?height=400&width=600&text=Autumn+Forest",
      likes: 1432,
      views: 21560,
      downloads: 521,
    },
  ];

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  const nextSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(featuredImages.length / 3)
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(featuredImages.length / 3) - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neutralWhite-100 to-transparent dark:from-dark-200 dark:to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-neutralWhite-100 to-transparent dark:from-dark-200 dark:to-transparent z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primaryTeal-100/5 dark:bg-primaryTeal-100/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondaryTeal-100/5 dark:bg-secondaryTeal-100/10 rounded-full blur-3xl"></div> */}

      <div className="container relative mx-auto px-4 z-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-primary-100 dark:text-primaryDark-100 mb-4">
              Featured Images
            </h2>
            <p className="text-lg text-primary-100/70 dark:text-primaryDark-100/70 max-w-2xl">
              Explore our curated collection of stunning images from talented
              photographers around the world.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-200 dark:border-dark-100 text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-200 dark:border-dark-100 text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 hover:border-primaryTeal-100 dark:hover:border-primaryTeal-100 transition-colors"
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
            {Array.from({ length: Math.ceil(featuredImages.length / 3) }).map(
              (_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {featuredImages
                    .slice(pageIndex * 3, pageIndex * 3 + 3)
                    .map((image) => (
                      <div
                        key={image.id}
                        className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-lg hover:shadow-xl transition-all duration-500"
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        {/* Image info overlay on hover */}
                        <div className="absolute pb-14 inset-0 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          <div className="flex justify-end">
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
                              <Heart className="h-5 w-5" />
                              <span className="sr-only">Like</span>
                            </button>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {image.title}
                            </h3>
                            <p className="text-white/80 mb-4">
                              by {image.photographer}
                            </p>
                            <button className="inline-flex items-center rounded-lg bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100 hover:shadow-lg hover:shadow-primaryTeal-100/20">
                              <Download className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {/* Metrics bar */}
                        <div className="absolute bottom-0 rounded-b-xl left-0 right-0 flex items-center justify-between bg-black/60 px-4 py-3 text-sm text-white backdrop-blur-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                              <Eye className="h-4 w-4" />
                              <span>{formatNumber(image.views)}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Heart className="h-4 w-4" />
                              <span>{formatNumber(image.likes)}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Download className="h-4 w-4" />
                              <span>{formatNumber(image.downloads)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          {Array.from({ length: Math.ceil(featuredImages.length / 3) }).map(
            (_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-all ${
                  activeIndex === index
                    ? "bg-primaryTeal-100 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-primaryTeal-100/50 dark:hover:bg-primaryTeal-100/50"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
