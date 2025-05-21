"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function TopicDialog({ isOpen, onClose, onSave }) {
  const [topic, setTopic] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTopic((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(topic);
    setTopic({
      title: "",
      description: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay-500">
      <div className="relative w-full max-w-md rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-primary-100 dark:text-primaryDark-100">
            Create New Topic
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-primary-100/60 dark:text-primaryDark-100/60 hover:bg-gray-100 dark:hover:bg-dark-100 hover:text-primary-100 dark:hover:text-primaryDark-100"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              value={topic.title}
              onChange={handleChange}
              required
              className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
              placeholder="My Topic"
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
              value={topic.description}
              onChange={handleChange}
              rows={3}
              className="block w-full rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-3 py-2 text-primary-100 dark:text-primaryDark-100 shadow-sm focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100 sm:text-sm"
              placeholder="Describe your topic..."
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-4 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-gray-300 dark:hover:border-dark-100/70 hover:bg-gray-50 dark:hover:bg-dark-100/70"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-secondaryTeal-100"
            >
              Create Topic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
