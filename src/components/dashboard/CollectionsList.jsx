"use client";

import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { CollectionDialog } from "./CollectionDialog";
import Image from "next/image";

export function CollectionsList() {
  // Mock collections data
  const [collections, setCollections] = useState([
    {
      id: 1,
      title: "Nature",
      description: "Beautiful landscapes and natural wonders",
      imageCount: 12,
      coverImage: "",
      backgroundStyle: "gradient-1",
    },
    {
      id: 2,
      title: "Architecture",
      description: "Modern and classic architectural designs",
      imageCount: 8,
      coverImage: "",
      backgroundStyle: "gradient-2",
    },
    {
      id: 3,
      title: "Abstract",
      description: "Abstract art and digital creations",
      imageCount: 15,
      coverImage: "",
      backgroundStyle: "gradient-3",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Background gradient options mapping
  const backgroundStyles = {
    "gradient-1":
      "bg-gradient-to-br from-primaryTeal-100/90 to-secondaryTeal-100/90",
    "gradient-2": "bg-gradient-to-br from-blue-500/90 to-purple-600/90",
    "gradient-3": "bg-gradient-to-br from-orange-500/90 to-red-600/90",
    "gradient-4": "bg-gradient-to-br from-green-500/90 to-emerald-600/90",
    "solid-1": "bg-gray-900/90",
    "solid-2": "bg-white/90",
  };

  const handleCreateCollection = (newCollection) => {
    // In a real app, you would send this to your API
    const id = collections.length + 1;
    const createdCollection = {
      id,
      title: newCollection.title,
      description: newCollection.description,
      imageCount: 0,
      coverImage:
        newCollection.previewUrl || "/placeholder.svg?height=150&width=250",
      backgroundStyle: newCollection.backgroundStyle || "gradient-1",
    };

    setCollections([...collections, createdCollection]);
  };

  const handleDeleteCollection = (id) => {
    setCollections(collections.filter((collection) => collection.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-primary-100 dark:text-primaryDark-100">
            Your Collections
          </h2>
        </div>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="inline-flex items-center gap-2 rounded-md bg-primaryTeal-100 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100"
        >
          <Plus className="h-4 w-4" />
          New Collection
        </button>
      </div>

      {collections.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/50 p-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100">
            <Plus className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-primary-100 dark:text-primaryDark-100">
            No collections yet
          </h3>
          <p className="mt-1 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
            Create your first collection to organize your images.
          </p>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100"
          >
            <Plus className="h-4 w-4" />
            Create Collection
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative">
                <Image
                  src={collection.coverImage || "/placeholder.svg"}
                  alt={collection.title}
                  height={100}
                  width={100}
                  className="aspect-video w-full object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    backgroundStyles[collection.backgroundStyle] ||
                    backgroundStyles["gradient-1"]
                  }`}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-semibold text-white drop-shadow-sm">
                      {collection.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/90 line-clamp-2 drop-shadow-sm">
                      {collection.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-3 left-3 right-3 flex justify-end">
                    <div className="flex gap-1">
                      <button
                        className="flex items-center gap-1 rounded-md bg-overlay-300 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm hover:bg-overlay-400"
                        onClick={() =>
                          console.log("Edit collection", collection.id)
                        }
                      >
                        <Edit className="h-3 w-3" />
                        <span>Edit</span>
                      </button>
                      <button
                        className="flex items-center gap-1 rounded-md bg-red-500/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm hover:bg-red-500"
                        onClick={() => handleDeleteCollection(collection.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-primary-100/70 dark:text-primaryDark-100/70">
                    {collection.imageCount} images
                  </p>
                  <Link
                    href={`/dashboard/collections/${collection.id}`}
                    className="text-sm font-medium text-primaryTeal-100 hover:underline"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <CollectionDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleCreateCollection}
      />
    </div>
  );
}
