"use client"

import { useState } from "react"
import { Heart, MoreHorizontal, Eye, EyeOff } from "lucide-react"

export function ImagesList() {
  // Mock images data
  const [images, setImages] = useState([
    {
      id: 1,
      title: "Mountain Sunset",
      src: "/placeholder.svg?height=200&width=300",
      published: true,
      favorite: false,
      uploadDate: "2023-05-15",
    },
    {
      id: 2,
      title: "Ocean Waves",
      src: "/placeholder.svg?height=200&width=300",
      published: true,
      favorite: true,
      uploadDate: "2023-05-10",
    },
    {
      id: 3,
      title: "Forest Path",
      src: "/placeholder.svg?height=200&width=300",
      published: false,
      favorite: false,
      uploadDate: "2023-05-05",
    },
    {
      id: 4,
      title: "City Skyline",
      src: "/placeholder.svg?height=200&width=300",
      published: true,
      favorite: true,
      uploadDate: "2023-04-28",
    },
    {
      id: 5,
      title: "Desert Landscape",
      src: "/placeholder.svg?height=200&width=300",
      published: true,
      favorite: false,
      uploadDate: "2023-04-20",
    },
    {
      id: 6,
      title: "Snowy Mountains",
      src: "/placeholder.svg?height=200&width=300",
      published: false,
      favorite: false,
      uploadDate: "2023-04-15",
    },
  ])

  const [activeTab, setActiveTab] = useState("all")
  const [dropdownOpen, setDropdownOpen] = useState(null)

  const toggleFavorite = (id) => {
    setImages(images.map((image) => (image.id === id ? { ...image, favorite: !image.favorite } : image)))
  }

  const togglePublish = (id) => {
    setImages(images.map((image) => (image.id === id ? { ...image, published: !image.published } : image)))
  }

  const deleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id))
  }

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id)
  }

  const filteredImages =
    activeTab === "all"
      ? images
      : activeTab === "published"
        ? images.filter((img) => img.published)
        : images.filter((img) => !img.published)

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm">
      <div className="p-6">
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

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-overlay-600 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
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
                            togglePublish(image.id)
                            setDropdownOpen(null)
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
                            deleteImage(image.id)
                            setDropdownOpen(null)
                          }}
                        >
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">{image.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-overlay-300 text-white backdrop-blur-sm hover:bg-overlay-400"
                      onClick={() => toggleFavorite(image.id)}
                    >
                      <Heart className={`h-4 w-4 ${image.favorite ? "fill-red-500 text-red-500" : ""}`} />
                      <span className="sr-only">Favorite</span>
                    </button>
                    <span className="text-xs text-white/80">{image.published ? "Published" : "Draft"}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
