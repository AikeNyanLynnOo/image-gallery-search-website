"use client";

import { useState, useEffect } from "react";
import {
  X,
  Upload,
  ImageIcon,
  Check,
  Search,
  ChevronLeft,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export function CollectionDialog({ isOpen, onClose, onSave }) {
  const [collection, setCollection] = useState({
    title: "",
    description: "",
    coverImage: null,
    previewUrl: null,
  });

  const [view, setView] = useState("form"); // form, upload, library
  const [selectedLibraryImage, setSelectedLibraryImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [previewBg, setPreviewBg] = useState("gradient-1");

  // Reset form when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setCollection({
          title: "",
          description: "",
          coverImage: null,
          previewUrl: null,
        });
        setSelectedLibraryImage(null);
        setSearchQuery("");
        setView("form");
        setPreviewBg("gradient-1");
      }, 300);
    }
  }, [isOpen]);

  // Mock media library data
  const mediaLibrary = [
    {
      id: 1,
      title: "Mountain Sunset",
      src: "",
    },
    {
      id: 2,
      title: "Ocean Waves",
      src: "",
    },
    {
      id: 3,
      title: "Forest Path",
      src: "",
    },
    {
      id: 4,
      title: "City Skyline",
      src: "",
    },
    {
      id: 5,
      title: "Desert Landscape",
      src: "",
    },
    {
      id: 6,
      title: "Snowy Mountains",
      src: "",
    },
    {
      id: 7,
      title: "Autumn Trees",
      src: "",
    },
    {
      id: 8,
      title: "Beach Sunset",
      src: "",
    },
    {
      id: 9,
      title: "Mountain Lake",
      src: "",
    },
    {
      id: 10,
      title: "Urban Street",
      src: "",
    },
    {
      id: 11,
      title: "Waterfall",
      src: "",
    },
    {
      id: 12,
      title: "Northern Lights",
      src: "",
    },
  ];

  // Background gradient options
  const backgroundOptions = [
    {
      id: "gradient-1",
      name: "Teal Gradient",
      class:
        "bg-gradient-to-br from-primaryTeal-100/90 to-secondaryTeal-100/90",
    },
    {
      id: "gradient-2",
      name: "Blue Gradient",
      class: "bg-gradient-to-br from-blue-500/90 to-purple-600/90",
    },
    {
      id: "gradient-3",
      name: "Orange Gradient",
      class: "bg-gradient-to-br from-orange-500/90 to-red-600/90",
    },
    {
      id: "gradient-4",
      name: "Green Gradient",
      class: "bg-gradient-to-br from-green-500/90 to-emerald-600/90",
    },
    { id: "solid-1", name: "Dark", class: "bg-gray-900/90" },
    { id: "solid-2", name: "Light", class: "bg-gray-200/90" },
  ];

  // Filter media library based on search query
  const filteredLibrary = searchQuery
    ? mediaLibrary.filter((image) =>
        image.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mediaLibrary;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollection((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCollection((prev) => ({ ...prev, coverImage: file }));

      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setCollection((prev) => ({ ...prev, previewUrl: reader.result }));
        setView("form");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectLibraryImage = (image) => {
    setSelectedLibraryImage(image);
    setCollection((prev) => ({
      ...prev,
      previewUrl: image.src,
    }));
  };

  const handleConfirmLibrarySelection = () => {
    if (selectedLibraryImage) {
      setView("form");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...collection,
      backgroundStyle: previewBg,
    });
    onClose();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getBackgroundClass = (bgId) => {
    return (
      backgroundOptions.find((bg) => bg.id === bgId)?.class ||
      backgroundOptions[0].class
    );
  };

  const renderForm = () => (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            value={collection.title}
            onChange={handleChange}
            required
            className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
            placeholder="My Collection"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={collection.description}
            onChange={handleChange}
            rows={4}
            className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
            placeholder="Describe your collection..."
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100">
            Cover Image
          </label>
          {collection.previewUrl ? (
            <div className="relative rounded-md border border-gray-200 dark:border-dark-100 p-1">
              <Image
                src={collection.previewUrl || "/placeholder.svg"}
                alt="Cover preview"
                className="aspect-video w-full rounded object-cover"
                height={100}
                width={100}
              />
              <button
                type="button"
                onClick={() =>
                  setCollection((prev) => ({
                    ...prev,
                    coverImage: null,
                    previewUrl: null,
                  }))
                }
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-overlay-300 text-white backdrop-blur-sm hover:bg-overlay-400"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove</span>
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setView("upload")}
                className="flex-1 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-3 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100"
              >
                <div className="flex items-center justify-center gap-2">
                  <Upload className="h-4 w-4" />
                  <span>Upload Image</span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setView("library")}
                className="flex-1 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-3 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-primaryTeal-100 hover:text-primaryTeal-100 dark:hover:border-primaryTeal-100 dark:hover:text-primaryTeal-100"
              >
                <div className="flex items-center justify-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  <span>Media Library</span>
                </div>
              </button>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-primary-100 dark:text-primaryDark-100">
            Background Style
          </label>
          <div className="grid grid-cols-3 gap-2">
            {backgroundOptions.map((bg) => (
              <button
                key={bg.id}
                type="button"
                onClick={() => setPreviewBg(bg.id)}
                className={`relative h-12 rounded-md ${
                  bg.class
                } transition-all ${
                  previewBg === bg.id
                    ? "ring-2 ring-primaryTeal-100 ring-offset-2 dark:ring-offset-dark-200"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-label={bg.name}
              >
                {previewBg === bg.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check className="h-5 w-5 text-white drop-shadow-md" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2 relative lg:static">
        <div className="text-sm font-medium text-primary-100 dark:text-primaryDark-100">
          Preview
        </div>
        <div className="flex-1 rounded-lg border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/50 p-4">
          <div className="group relative mx-auto max-w-sm overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-md transition-all hover:shadow-lg">
            <div className="relative">
              {collection.previewUrl ? (
                <Image
                  src={collection.previewUrl || "/placeholder.svg"}
                  alt={collection.title || "Collection preview"}
                  className="aspect-video w-full object-cover"
                  height={100}
                  width={100}
                />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-gray-100 dark:bg-dark-100">
                  <ImageIcon className="h-12 w-12 text-gray-300 dark:text-gray-600" />
                </div>
              )}
              <div
                className={`absolute inset-0 flex items-end ${getBackgroundClass(
                  previewBg
                )}`}
              >
                <div className="w-full p-4">
                  <h3 className="text-lg font-semibold text-white drop-shadow-sm">
                    {collection.title || "Collection Title"}
                  </h3>
                  {collection.description && (
                    <p className="mt-1 text-sm text-white/90 line-clamp-2 drop-shadow-sm">
                      {collection.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-primary-100/70 dark:text-primaryDark-100/70">
                  0 images
                </p>
                <span className="text-sm font-medium text-primaryTeal-100">
                  View
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-primary-100/60 dark:text-primaryDark-100/60">
            This is how your collection will appear in your dashboard
          </div>
        </div>

        <div className="flex justify-end gap-2 py-4 lg:p-0 lg:pt-4 sticky lg:static bottom-0 left-0 right-0 bg-neutralWhite-100 dark:bg-dark-200">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-4 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-gray-300 dark:hover:border-dark-100/70 hover:bg-gray-50 dark:hover:bg-dark-100/70"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-1 rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-secondaryTeal-100"
          >
            <Sparkles className="h-4 w-4" />
            Create Collection
          </button>
        </div>
      </div>
    </div>
  );

  const renderUpload = () => (
    <div className="space-y-4">
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setView("form")}
          className="mr-2 inline-flex items-center rounded-md p-1.5 text-primary-100/60 dark:text-primaryDark-100/60 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primary-100 dark:hover:text-primaryDark-100"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </button>
        <h3 className="text-lg font-medium text-primary-100 dark:text-primaryDark-100">
          Upload Cover Image
        </h3>
      </div>

      <div className="flex h-64 items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/30 p-6">
        <label className="flex cursor-pointer flex-col items-center">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20">
            <Upload className="h-8 w-8 text-primaryTeal-100" />
          </div>
          <span className="mb-1 text-base font-medium text-primary-100 dark:text-primaryDark-100">
            Drag & drop your image here
          </span>
          <span className="mb-4 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
            JPG, PNG or GIF (max. 2MB)
          </span>
          <span className="rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100">
            Select File
          </span>
          <input
            type="file"
            className="sr-only"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </div>
  );

  const renderLibrary = () => (
    <div className="space-y-4">
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => {
            setSearchQuery("");
            setView("form");
          }}
          className="mr-2 inline-flex items-center rounded-md p-1.5 text-primary-100/60 dark:text-primaryDark-100/60 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primary-100 dark:hover:text-primaryDark-100"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </button>
        <h3 className="text-lg font-medium text-primary-100 dark:text-primaryDark-100">
          Select from Media Library
        </h3>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-primary-100/60 dark:text-primaryDark-100/60" />
        </div>
        <input
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 pl-10 pr-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
        />
      </div>

      <div className="max-h-[400px] overflow-y-auto rounded-md border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/30 p-3">
        {filteredLibrary.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {filteredLibrary.map((image) => (
              <div
                key={image.id}
                className={`group relative cursor-pointer overflow-hidden rounded-md border-2 transition-all ${
                  selectedLibraryImage?.id === image.id
                    ? "border-primaryTeal-100 dark:border-primaryTeal-100"
                    : "border-gray-200 dark:border-dark-100 hover:border-gray-300 dark:hover:border-dark-100/70"
                }`}
                onClick={() => handleSelectLibraryImage(image)}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    height={100}
                    width={100}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  {selectedLibraryImage?.id === image.id && (
                    <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primaryTeal-100 text-white">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                  <div className="absolute bottom-0 w-full p-2">
                    <p className="truncate text-sm font-medium text-white">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-dark-100">
              <Search className="h-8 w-8 text-primary-100/40 dark:text-primaryDark-100/40" />
            </div>
            <h3 className="mt-4 text-base font-medium text-primary-100 dark:text-primaryDark-100">
              No images found
            </h3>
            <p className="mt-1 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
              Try adjusting your search or upload a new image
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setView("upload");
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100"
            >
              <Upload className="h-4 w-4" />
              Upload New Image
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            setSearchQuery("");
            setView("form");
          }}
          className="rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-4 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-gray-300 dark:hover:border-dark-100/70 hover:bg-gray-50 dark:hover:bg-dark-100/70"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleConfirmLibrarySelection}
          disabled={!selectedLibraryImage}
          className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors ${
            selectedLibraryImage
              ? "bg-primaryTeal-100 hover:bg-secondaryTeal-100"
              : "bg-primaryTeal-100/50 cursor-not-allowed"
          }`}
        >
          <Check className="h-4 w-4" />
          Select Image
        </button>
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-overlay-500 p-4">
      <div className="relative w-full max-h-[90dvh] overflow-y-scroll max-w-4xl rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-xl">
        <div className="flex items-center justify-between sticky top-0 left-0 right-0 bg-neutralWhite-100 dark:bg-dark-200 pt-4 px-4 pb-0 md:pt-6 md:px-6">
          <h2 className="text-2xl font-semibold text-primary-100 dark:text-primaryDark-100">
            Create New Collection
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-primary-100/60 dark:text-primaryDark-100/60 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primary-100 dark:hover:text-primaryDark-100"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="p-4 md:p-6">
          {view === "form" && renderForm()}
          {view === "upload" && renderUpload()}
          {view === "library" && renderLibrary()}
        </div>
      </div>
    </div>
  );
}
