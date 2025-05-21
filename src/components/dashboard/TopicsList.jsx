"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { TopicDialog } from "./TopicDialog";
import Image from "next/image";

export function TopicsList() {
  // Mock topics data
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "Landscapes",
      description: "Beautiful landscape photography from around the world",
      imageCount: 24,
      coverImage: "",
    },
    {
      id: 2,
      title: "Minimalism",
      description: "Clean, simple, and minimal compositions",
      imageCount: 16,
      coverImage: "",
    },
    {
      id: 3,
      title: "Black & White",
      description: "Monochrome photography and art",
      imageCount: 8,
      coverImage: "",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateTopic = (newTopic) => {
    // In a real app, you would send this to your API
    const id = topics.length + 1;
    const createdTopic = {
      id,
      title: newTopic.title,
      description: newTopic.description,
      imageCount: 0,
      coverImage: "/placeholder.svg?height=150&width=250",
    };

    setTopics([...topics, createdTopic]);
  };

  const handleDeleteTopic = (id) => {
    setTopics(topics.filter((topic) => topic.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold text-primary-100 dark:text-primaryDark-100">
          Your Topics
        </h2>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="inline-flex items-center gap-2 rounded-md bg-primaryTeal-100 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100"
        >
          <Plus className="h-4 w-4" />
          New Topic
        </button>
      </div>

      {topics.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-dark-100 bg-gray-50 dark:bg-dark-100/50 p-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100">
            <Plus className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-primary-100 dark:text-primaryDark-100">
            No topics yet
          </h3>
          <p className="mt-1 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
            Create your first topic to categorize your images.
          </p>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100"
          >
            <Plus className="h-4 w-4" />
            Create Topic
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="group overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative">
                <Image
                  src={"/placeholder.svg"}
                  alt={topic.title}
                  width={300}
                  height={200}
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-overlay-600 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                    <Link
                      href={`/topics/${topic.id}`}
                      className="flex items-center gap-1 rounded-md bg-overlay-300 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm hover:bg-overlay-400"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View
                    </Link>
                    <div className="flex gap-1">
                      <button
                        className="flex items-center gap-1 rounded-md bg-overlay-300 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm hover:bg-overlay-400"
                        onClick={() => console.log("Edit topic", topic.id)}
                      >
                        <Edit className="h-3 w-3" />
                        Edit
                      </button>
                      <button
                        className="flex items-center gap-1 rounded-md bg-red-500/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm hover:bg-red-500"
                        onClick={() => handleDeleteTopic(topic.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-primary-100 dark:text-primaryDark-100">
                  {topic.title}
                </h3>
                <p className="mt-1 text-sm text-primary-100/70 dark:text-primaryDark-100/70 line-clamp-2">
                  {topic.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm text-primary-100/70 dark:text-primaryDark-100/70">
                    {topic.imageCount} images
                  </p>
                  <Link
                    href={`/topics/${topic.id}`}
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

      <TopicDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleCreateTopic}
      />
    </div>
  );
}
