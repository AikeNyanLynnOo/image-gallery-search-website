"use client";

import { useState, useEffect, Suspense } from "react";
import { Heart, Download, Eye, Plus, ExternalLink } from "lucide-react";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import MasonryWrapper from "../molecules/MasonryWrapper";
import MasonryImage from "../atoms/GalleryImage";

// Mock image data
const mockImages = [
  {
    id: 1,
    title: "Desert Oasis",
    owner: "Alex Rivera",
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
    owner: "Emma Thompson",
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
    owner: "Carlos Mendez",
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
    owner: "Sophie Chen",
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
    owner: "Marcus Johnson",
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
    owner: "David Kim",
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
    owner: "Sarah Martinez",
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
    owner: "James Wilson",
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
    owner: "Maria Garcia",
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
    owner: "Raj Patel",
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
    owner: "Anna Schmidt",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=650&fit=crop",
    likes: 2345,
    views: 34560,
    downloads: 876,
    height: 650,
    width: 800,
  },
];

export function ImageGrid() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setImages(mockImages);
    }, 3000);
  }, [mockImages]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
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
      <MasonryWrapper>
        {(images && images.length === 0 && <div>Loading...</div>) ||
          images.map((image, index) => <MasonryImage key={index} {...image} />)}
      </MasonryWrapper>

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
            You&apos;ve reached the end of the results
          </p>
        )}
      </div>
    </section>
  );
}
