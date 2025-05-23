"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  MoreHorizontal,
  Eye,
  EyeOff,
  Download,
  Search,
  Filter,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

// Mock images data with added metrics
const allImages = [
  {
    id: 1,
    title: "Mountain Sunset",
    src: "",
    published: true,
    favorite: false,
    uploadDate: "2023-05-15",
    likes: 124,
    views: 1872,
    downloads: 43,
    collection: "Nature",
    topic: "Landscapes",
  },
  {
    id: 2,
    title: "Ocean Waves",
    src: "",
    published: true,
    favorite: true,
    uploadDate: "2023-05-10",
    likes: 89,
    views: 1245,
    downloads: 27,
    collection: "Nature",
    topic: "Water",
  },
  {
    id: 3,
    title: "Forest Path",
    src: "",
    published: false,
    favorite: false,
    uploadDate: "2023-05-05",
    likes: 0,
    views: 0,
    downloads: 0,
    collection: "Nature",
    topic: "Forests",
  },
  {
    id: 4,
    title: "City Skyline",
    src: "",
    published: true,
    favorite: true,
    uploadDate: "2023-04-28",
    likes: 215,
    views: 3421,
    downloads: 78,
    collection: "Urban",
    topic: "Cities",
  },
  {
    id: 5,
    title: "Desert Landscape",
    src: "",
    published: true,
    favorite: false,
    uploadDate: "2023-04-20",
    likes: 67,
    views: 982,
    downloads: 19,
    collection: "Nature",
    topic: "Deserts",
  },
  {
    id: 6,
    title: "Snowy Mountains",
    src: "",
    published: false,
    favorite: false,
    uploadDate: "2023-04-15",
    likes: 0,
    views: 0,
    downloads: 0,
    collection: "Nature",
    topic: "Mountains",
  },
  {
    id: 7,
    title: "Autumn Forest",
    src: "",
    published: true,
    favorite: false,
    uploadDate: "2023-04-10",
    likes: 143,
    views: 2156,
    downloads: 52,
    collection: "Seasons",
    topic: "Forests",
  },
  {
    id: 8,
    title: "Tropical Beach",
    src: "",
    published: true,
    favorite: true,
    uploadDate: "2023-04-05",
    likes: 187,
    views: 2789,
    downloads: 63,
    collection: "Travel",
    topic: "Beaches",
  },
  {
    id: 9,
    title: "Northern Lights",
    src: "",
    published: true,
    favorite: false,
    uploadDate: "2023-03-28",
    likes: 231,
    views: 3542,
    downloads: 87,
    collection: "Night Sky",
    topic: "Astronomy",
  },
  {
    id: 10,
    title: "Waterfall",
    src: "",
    published: true,
    favorite: false,
    uploadDate: "2023-03-20",
    likes: 112,
    views: 1876,
    downloads: 41,
    collection: "Nature",
    topic: "Water",
  },
  {
    id: 11,
    title: "Sunset at the Beach",
    src: "",
    published: true,
    favorite: true,
    uploadDate: "2023-03-15",
    likes: 198,
    views: 2987,
    downloads: 72,
    collection: "Travel",
    topic: "Beaches",
  },
  {
    id: 12,
    title: "Mountain Lake",
    src: "",
    published: true,
    favorite: false,
    uploadDate: "2023-03-10",
    likes: 156,
    views: 2345,
    downloads: 58,
    collection: "Nature",
    topic: "Mountains",
  },
  {
    id: 13,
    title: "Urban Street",
    src: "",
    published: true,
    favorite: false,
    uploadDate: "2023-03-05",
    likes: 87,
    views: 1432,
    downloads: 29,
    collection: "Urban",
    topic: "Cities",
  },
  {
    id: 14,
    title: "Starry Night",
    src: "",
    published: true,
    favorite: true,
    uploadDate: "2023-02-28",
    likes: 245,
    views: 3876,
    downloads: 93,
    collection: "Night Sky",
    topic: "Astronomy",
  },
  {
    id: 15,
    title: "Spring Flowers",
    src: "",
    published: true,
    favorite: false,
    uploadDate: "2023-02-20",
    likes: 132,
    views: 1987,
    downloads: 47,
    collection: "Seasons",
    topic: "Flora",
  },
];

export function ImagesList() {
  const [images, setImages] = useState(allImages);
  const [activeTab, setActiveTab] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState("uploadDate");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filterCollection, setFilterCollection] = useState("");
  const [filterTopic, setFilterTopic] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredImages, setFilteredImages] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  // Get unique collections and topics for filter dropdowns
  const collections = [
    ...new Set(allImages.map((img) => img.collection)),
  ].sort();
  const topics = [...new Set(allImages.map((img) => img.topic))].sort();

  // Apply filters, search, and sorting
  useEffect(() => {
    let result = [...allImages];

    // Filter by tab
    if (activeTab === "published") {
      result = result.filter((img) => img.published);
    } else if (activeTab === "drafts") {
      result = result.filter((img) => !img.published);
    }

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (img) =>
          img.title.toLowerCase().includes(query) ||
          img.collection.toLowerCase().includes(query) ||
          img.topic.toLowerCase().includes(query)
      );
    }

    // Apply collection filter
    if (filterCollection) {
      result = result.filter((img) => img.collection === filterCollection);
    }

    // Apply topic filter
    if (filterTopic) {
      result = result.filter((img) => img.topic === filterTopic);
    }

    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;
        case "likes":
          comparison = a.likes - b.likes;
          break;
        case "views":
          comparison = a.views - b.views;
          break;
        case "downloads":
          comparison = a.downloads - b.downloads;
          break;
        case "uploadDate":
        default:
          comparison =
            (new Date(a.uploadDate) as any) - (new Date(b.uploadDate) as any);
          break;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    setFilteredImages(result);
    setTotalPages(Math.ceil(result.length / itemsPerPage));

    // Reset to first page when filters change
    if (currentPage > Math.ceil(result.length / itemsPerPage)) {
      setCurrentPage(1);
    }
  }, [
    activeTab,
    searchQuery,
    filterCollection,
    filterTopic,
    sortBy,
    sortOrder,
    currentPage,
    itemsPerPage,
  ]);

  // Get current page items
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredImages.slice(indexOfFirstItem, indexOfLastItem);
  };

  const toggleFavorite = (id: any) => {
    setImages(
      images.map((image) =>
        image.id === id ? { ...image, favorite: !image.favorite } : image
      )
    );
  };

  const togglePublish = (id: any) => {
    setImages(
      images.map((image) =>
        image.id === id ? { ...image, published: !image.published } : image
      )
    );
  };

  const deleteImage = (id: any) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const toggleDropdown = (id: any) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const handleSortChange = (value: any) => {
    if (sortBy === value) {
      // Toggle sort order if clicking the same field
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Default to descending for new sort field
      setSortBy(value);
      setSortOrder("desc");
    }
  };

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    // Scroll to top of the list
    document
      .getElementById("images-list-top")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const resetFilters = () => {
    setSearchQuery("");
    setFilterCollection("");
    setFilterTopic("");
    setSortBy("uploadDate");
    setSortOrder("desc");
    setCurrentPage(1);
  };

  const formatNumber = (num: any) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  return (
    <div
      id="images-list-top"
      className="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm"
    >
      <div className="p-6">
        {/* Search and filter bar */}
        <div className="mb-4 space-y-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-primary-100/60 dark:text-primaryDark-100/60" />
              </div>
              <input
                type="text"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 pl-10 pr-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
              <div className="relative">
                <button
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === "sort" ? null : "sort")
                  }
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100"
                >
                  <ArrowUpDown className="h-4 w-4" />
                  <span>Sort</span>
                </button>
                {dropdownOpen === "sort" && (
                  <div className="absolute right-0 z-10 mt-1 w-48 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 py-1 shadow-lg">
                    <button
                      className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm ${
                        sortBy === "uploadDate"
                          ? "text-primaryTeal-100"
                          : "text-primary-100 dark:text-primaryDark-100"
                      } hover:bg-gray-100 dark:hover:bg-dark-200`}
                      onClick={() => handleSortChange("uploadDate")}
                    >
                      <span>Upload Date</span>
                      {sortBy === "uploadDate" && (
                        <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                      )}
                    </button>
                    <button
                      className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm ${
                        sortBy === "title"
                          ? "text-primaryTeal-100"
                          : "text-primary-100 dark:text-primaryDark-100"
                      } hover:bg-gray-100 dark:hover:bg-dark-200`}
                      onClick={() => handleSortChange("title")}
                    >
                      <span>Title</span>
                      {sortBy === "title" && (
                        <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                      )}
                    </button>
                    <button
                      className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm ${
                        sortBy === "likes"
                          ? "text-primaryTeal-100"
                          : "text-primary-100 dark:text-primaryDark-100"
                      } hover:bg-gray-100 dark:hover:bg-dark-200`}
                      onClick={() => handleSortChange("likes")}
                    >
                      <span>Likes</span>
                      {sortBy === "likes" && (
                        <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                      )}
                    </button>
                    <button
                      className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm ${
                        sortBy === "views"
                          ? "text-primaryTeal-100"
                          : "text-primary-100 dark:text-primaryDark-100"
                      } hover:bg-gray-100 dark:hover:bg-dark-200`}
                      onClick={() => handleSortChange("views")}
                    >
                      <span>Views</span>
                      {sortBy === "views" && (
                        <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                      )}
                    </button>
                    <button
                      className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm ${
                        sortBy === "downloads"
                          ? "text-primaryTeal-100"
                          : "text-primary-100 dark:text-primaryDark-100"
                      } hover:bg-gray-100 dark:hover:bg-dark-200`}
                      onClick={() => handleSortChange("downloads")}
                    >
                      <span>Downloads</span>
                      {sortBy === "downloads" && (
                        <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Expanded filters */}
          {showFilters && (
            <div className="rounded-md border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/30 p-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1 space-y-2">
                  <select
                    value={filterCollection}
                    onChange={(e) => setFilterCollection(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-1.5 text-sm text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100"
                  >
                    <option value="">All Collections</option>
                    {collections.map((collection) => (
                      <option key={collection} value={collection}>
                        {collection}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 space-y-2">
                  <select
                    value={filterTopic}
                    onChange={(e) => setFilterTopic(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-1.5 text-sm text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100"
                  >
                    <option value="">All Topics</option>
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-1.5 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="mb-4 border-b border-gray-200 dark:border-dark-100">
          <div className="flex -mb-px space-x-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`pb-4 text-sm font-medium ${
                activeTab === "all"
                  ? "border-b-2 border-primaryTeal-100 text-primaryTeal-100"
                  : "border-b-2 border-transparent text-primary-100/70 dark:text-primaryDark-100/70 hover:border-gray-300 dark:hover:border-dark-100 hover:text-primary-100 dark:hover:text-primaryDark-100"
              }`}
            >
              All Images
            </button>
            <button
              onClick={() => setActiveTab("published")}
              className={`pb-4 text-sm font-medium ${
                activeTab === "published"
                  ? "border-b-2 border-primaryTeal-100 text-primaryTeal-100"
                  : "border-b-2 border-transparent text-primary-100/70 dark:text-primaryDark-100/70 hover:border-gray-300 dark:hover:border-dark-100 hover:text-primary-100 dark:hover:text-primaryDark-100"
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setActiveTab("drafts")}
              className={`pb-4 text-sm font-medium ${
                activeTab === "drafts"
                  ? "border-b-2 border-primaryTeal-100 text-primaryTeal-100"
                  : "border-b-2 border-transparent text-primary-100/70 dark:text-primaryDark-100/70 hover:border-gray-300 dark:hover:border-dark-100 hover:text-primary-100 dark:hover:text-primaryDark-100"
              }`}
            >
              Drafts
            </button>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
          Showing {getCurrentItems().length} of {filteredImages.length} images
        </div>

        {/* Images grid */}
        {getCurrentItems().length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {getCurrentItems().map((image: any) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100"
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    width={600}
                    height={400}
                  />
                </div>

                {/* Image info overlay on hover */}
                <div className="absolute pb-10 inset-0 flex flex-col justify-between bg-gradient-to-t from-overlay-600 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex justify-end">
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(image.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-overlay-300 text-white backdrop-blur-sm hover:bg-overlay-400"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </button>
                      {dropdownOpen === image.id && (
                        <div className="absolute right-0 z-10 mt-1 w-36 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 py-1 shadow-lg">
                          <button
                            className="flex w-full items-center px-4 py-2 text-left text-sm text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
                            onClick={() => {
                              togglePublish(image.id);
                              setDropdownOpen(null);
                            }}
                          >
                            {image.published ? (
                              <>
                                <EyeOff className="mr-2 h-4 w-4" />
                                <span>Unpublish</span>
                              </>
                            ) : (
                              <>
                                <Eye className="mr-2 h-4 w-4" />
                                <span>Publish</span>
                              </>
                            )}
                          </button>
                          <button
                            className="flex w-full items-center px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-dark-200"
                            onClick={() => {
                              deleteImage(image.id);
                              setDropdownOpen(null);
                            }}
                          >
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">
                      {image.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/80">
                      <span>{image.collection}</span>
                      <span>•</span>
                      <span>{image.topic}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-overlay-300 text-white backdrop-blur-sm hover:bg-overlay-400"
                          onClick={() => toggleFavorite(image.id)}
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              image.favorite ? "fill-red-500 text-red-500" : ""
                            }`}
                          />
                          <span className="sr-only">Favorite</span>
                        </button>
                        <span className="text-xs text-white/80">
                          {image.favorite ? "Favorited" : "Add to favorites"}
                        </span>
                      </div>
                      <span className="text-xs text-white/80">
                        {image.published ? "Published" : "Draft"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metrics bar */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/60 px-3 py-2 text-xs text-white backdrop-blur-sm rounded-b-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{formatNumber(image.views)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{formatNumber(image.likes)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      <span>{formatNumber(image.downloads)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/50 p-12 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-primary-100 dark:text-primaryDark-100">
              No images found
            </h3>
            <p className="mt-1 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
              Try adjusting your search or filters
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-between border-t border-gray-200 dark:border-dark-100 pt-4">
            <div className="flex items-center text-sm text-primary-100/70 dark:text-primaryDark-100/70">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`inline-flex items-center gap-1 rounded-md border border-gray-200 dark:border-dark-100 px-3 py-1.5 text-sm ${
                  currentPage === 1
                    ? "cursor-not-allowed text-gray-400 dark:text-gray-600"
                    : "text-primary-100 dark:text-primaryDark-100 hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`inline-flex items-center gap-1 rounded-md border border-gray-200 dark:border-dark-100 px-3 py-1.5 text-sm ${
                  currentPage === totalPages
                    ? "cursor-not-allowed text-gray-400 dark:text-gray-600"
                    : "text-primary-100 dark:text-primaryDark-100 hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100"
                }`}
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
