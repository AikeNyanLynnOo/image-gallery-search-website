"use client";

import { useState, useEffect } from "react";
import { Heart, Download, Eye, Plus, ExternalLink } from "lucide-react";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function ImageGrid() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [images, setImages] = useState([]);

  // Mock image data
  const mockImages = [
    {
      id: 1,
      title: "Desert Oasis",
      photographer: "Alex Rivera",
      src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
      likes: 1567,
      views: 23450,
      downloads: 543,
      height: 600,
      width: 800,
    },
    {
      id: 2,
      title: "Mountain Lake",
      photographer: "Emma Thompson",
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=800&fit=crop",
      likes: 2345,
      views: 34560,
      downloads: 876,
      height: 800,
      width: 600,
    },
    {
      id: 3,
      title: "Ancient Ruins",
      photographer: "Carlos Mendez",
      src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&h=600&fit=crop",
      likes: 987,
      views: 15670,
      downloads: 321,
      height: 600,
      width: 800,
    },
    {
      id: 4,
      title: "Sunset Beach",
      photographer: "Sophie Chen",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=800&fit=crop",
      likes: 3456,
      views: 45670,
      downloads: 1234,
      height: 800,
      width: 800,
    },
    {
      id: 5,
      title: "Rainforest Canopy",
      photographer: "Marcus Johnson",
      src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&h=500&fit=crop",
      likes: 1234,
      views: 18760,
      downloads: 432,
      height: 500,
      width: 800,
    },
    {
      id: 7,
      title: "Urban Jungle",
      photographer: "David Kim",
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=700&fit=crop",
      likes: 1987,
      views: 28760,
      downloads: 654,
      height: 700,
      width: 800,
    },
    {
      id: 8,
      title: "Desert Canyon",
      photographer: "Sarah Martinez",
      src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&h=1000&fit=crop",
      likes: 2345,
      views: 34560,
      downloads: 876,
      height: 1000,
      width: 600,
    },
    {
      id: 9,
      title: "Misty Mountains",
      photographer: "James Wilson",
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=800&fit=crop",
      likes: 1876,
      views: 25670,
      downloads: 543,
      height: 800,
      width: 800,
    },
    {
      id: 10,
      title: "Tropical Waterfall",
      photographer: "Maria Garcia",
      src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=550&fit=crop",
      likes: 3456,
      views: 45670,
      downloads: 1234,
      height: 550,
      width: 800,
    },
    {
      id: 11,
      title: "Ancient Temple",
      photographer: "Raj Patel",
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=950&fit=crop",
      likes: 1987,
      views: 28760,
      downloads: 654,
      height: 950,
      width: 600,
    },
    {
      id: 12,
      title: "Coastal Cliffs",
      photographer: "Anna Schmidt",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=650&fit=crop",
      likes: 2345,
      views: 34560,
      downloads: 876,
      height: 650,
      width: 800,
    },
  ];

  // Load more images when page changes
  useEffect(() => {
    const loadImages = () => {
      setLoading(true);

      // Simulate API call with timeout
      setTimeout(() => {
        // In a real app, you would fetch from an API with pagination
        const newImages = [...mockImages]
          .sort(() => 0.5 - Math.random())
          .slice(0, 12);

        if (page === 1) {
          setImages(newImages);
        } else {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }

        // Set hasMore to false after 3 pages for demo purposes
        if (page >= 3) {
          setHasMore(false);
        }

        setLoading(false);
      }, 1000);
    };

    loadImages();
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-100 dark:text-primaryDark-100 mb-2">
          Discover Amazing Images
        </h2>
        <p className="text-primary-100/70 dark:text-primaryDark-100/70">
          Browse through our curated collection of high-quality images
        </p>
      </div>

      {/* Masonry grid */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
        <Masonry gutter="24px">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="flex gap-2">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white/80 mb-4">by {image.photographer}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 inline-flex items-center justify-center rounded-lg bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100 hover:shadow-lg hover:shadow-primaryTeal-100/20">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </button>
                    <Link
                      href={`/images/${image.id}`}
                      className="inline-flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </div>
                </div>
              </div>

              {/* Always visible metrics bar */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/60 px-4 py-3 text-sm text-white backdrop-blur-sm">
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
        </Masonry>
      </ResponsiveMasonry>

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
              "Load More"
            )}
          </button>
        ) : (
          <p className="text-primary-100/70 dark:text-primaryDark-100/70">
            You've reached the end of the results
          </p>
        )}
      </div>
    </section>
  );
}
