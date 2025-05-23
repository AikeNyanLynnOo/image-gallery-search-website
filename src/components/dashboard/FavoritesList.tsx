"use client";

import { useState } from "react";
import { Heart, MoreHorizontal } from "lucide-react";

export function FavoritesList() {
  // Mock favorites data
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Ocean Waves",
      src: "/placeholder.svg?height=200&width=300",
      author: "Jane Smith",
      favorite: true,
    },
    {
      id: 2,
      title: "City Skyline",
      src: "/placeholder.svg?height=200&width=300",
      author: "Mike Johnson",
      favorite: true,
    },
    {
      id: 3,
      title: "Mountain Range",
      src: "/placeholder.svg?height=200&width=300",
      author: "Sarah Williams",
      favorite: true,
    },
    {
      id: 4,
      title: "Autumn Forest",
      src: "/placeholder.svg?height=200&width=300",
      author: "David Brown",
      favorite: true,
    },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const removeFavorite = (id: any) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  };

  const toggleDropdown = (id: any) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm">
      <div className="p-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((favorite) => (
            <div
              key={favorite.id}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={favorite.src || "/placeholder.svg"}
                  alt={favorite.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-overlay-600 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex justify-end">
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(favorite.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-overlay-300 text-white backdrop-blur-sm hover:bg-overlay-400"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </button>
                    {dropdownOpen === favorite.id && (
                      <div className="absolute right-0 z-10 mt-1 w-48 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 py-1 shadow-lg">
                        <button
                          className="flex w-full items-center px-4 py-2 text-left text-sm text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
                          onClick={() => {
                            removeFavorite(favorite.id);
                            setDropdownOpen(null);
                          }}
                        >
                          Remove from favorites
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">
                    {favorite.title}
                  </h3>
                  <p className="text-xs text-white/80">by {favorite.author}</p>
                  <div className="mt-2 flex items-center">
                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-overlay-300 text-white backdrop-blur-sm hover:bg-overlay-400"
                      onClick={() => removeFavorite(favorite.id)}
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                      <span className="sr-only">Remove Favorite</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
