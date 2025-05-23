"use client";

import { useState } from "react";
import { Upload, X } from "lucide-react";

export function ImageUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<any>(null);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: any) => {
    // Check if file is an image
    if (!file.type.match("image.*")) {
      alert("Please select an image file");
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setPreview(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const clearPreview = () => {
    setPreview(null);
  };

  const uploadImage = () => {
    // Handle image upload
    console.log("Uploading image...");
    // After successful upload
    setPreview(null);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-sm">
      <div className="p-6">
        {!preview ? (
          <div
            className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
              isDragging
                ? "border-primaryTeal-100 bg-primaryTeal-100/5 dark:bg-primaryTeal-100/10"
                : "border-gray-300 dark:border-dark-100"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="mb-2 h-10 w-10 text-primary-100/40 dark:text-primaryDark-100/40" />
            <h3 className="mb-1 text-lg font-medium text-primary-100 dark:text-primaryDark-100">
              Drag & drop your image here
            </h3>
            <p className="mb-4 text-sm text-primary-100/70 dark:text-primaryDark-100/70">
              Supports JPG, PNG and GIF files. Max file size 10MB.
            </p>
            <div className="flex gap-2">
              <label className="cursor-pointer rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryTeal-100">
                <input
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                Select File
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <img
                src={preview || "/placeholder.svg"}
                alt="Preview"
                className="mx-auto max-h-[300px] rounded-lg object-contain"
              />
              <button
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-primary-100 shadow-sm backdrop-blur-sm hover:bg-white dark:bg-dark-100/80 dark:text-primaryDark-100 dark:hover:bg-dark-100"
                onClick={clearPreview}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove</span>
              </button>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={clearPreview}
                className="rounded-md border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-100 px-4 py-2 text-sm font-medium text-primary-100 dark:text-primaryDark-100 shadow-sm transition-colors hover:border-gray-300 dark:hover:border-dark-100/70 hover:bg-gray-50 dark:hover:bg-dark-100/70"
              >
                Cancel
              </button>
              <button
                onClick={uploadImage}
                className="rounded-md bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-secondaryTeal-100"
              >
                Upload Image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
