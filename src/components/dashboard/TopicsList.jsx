"use client"

import { useState } from "react"
import { MoreHorizontal, Plus } from "lucide-react"
import Link from "next/link"

export function TopicsList() {
  // Mock topics data
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "Landscapes",
      description: "Beautiful landscape photography from around the world",
      imageCount: 24,
      coverImage: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 2,
      title: "Minimalism",
      description: "Clean, simple, and minimal compositions",
      imageCount: 16,
      coverImage: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 3,
      title: "Black & White",
      description: "Monochrome photography and art",
      imageCount: 8,
      coverImage: "/placeholder.svg?height=150&width=250",
    },
  ])

  const [dropdownOpen, setDropdownOpen] = useState(null)

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-primary-100 dark:text-primaryDark-100">Your Topics</h2>
        <button className="inline-flex items-center gap-2 rounded-md bg-primaryTeal-100 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100">
          <Plus className="h-4 w-4" />
          New Topic
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm"
          >
            <div className="p-4 pb-2">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-primary-100 dark:text-primaryDark-100">{topic.title}</h3>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(topic.id)}
                    className="-mt-2 -mr-2 rounded-md p-1 text-primary-100/60 dark:text-primaryDark-100/60 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primary-100 dark:hover:text-primaryDark-100"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                    <span className="sr-only">Actions</span>
                  </button>
                  {dropdownOpen === topic.id && (
                    <div className="absolute right-0 z-10 mt-1 w-36 rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 py-1 shadow-lg">
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-primary-100 dark:text-primaryDark-100 hover:bg-gray-100 dark:hover:bg-dark-200"
                        onClick={() => {
                          console.log("Edit topic", topic.id)
                          setDropdownOpen(null)
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-dark-200"
                        onClick={() => {
                          console.log("Delete topic", topic.id)
                          setDropdownOpen(null)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p className="mt-1 text-sm text-primary-100/70 dark:text-primaryDark-100/70">{topic.description}</p>
            </div>
            <div className="p-4 pb-2">
              <img
                src={topic.coverImage || "/placeholder.svg"}
                alt={topic.title}
                className="aspect-video w-full rounded-md object-cover"
              />
            </div>
            <div className="flex justify-between p-4">
              <p className="text-sm text-primary-100/70 dark:text-primaryDark-100/70">{topic.imageCount} images</p>
              <Link href={`/topics/${topic.id}`} className="text-sm font-medium text-primaryTeal-100 hover:underline">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
