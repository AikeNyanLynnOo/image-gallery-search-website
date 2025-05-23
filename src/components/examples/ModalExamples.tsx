"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@/components/molecules/modals/CustomModal";
import {
  Settings,
  Trash2,
  User,
  ImageIcon,
  AlertTriangle,
  CheckCircle,
  X,
} from "lucide-react";

export function ModalExamples() {
  const [basicModal, setBasicModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [fullModal, setFullModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  return (
    <div className="p-8 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Modal Component Examples
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Responsive modal components built with pure Tailwind CSS - no shadcn
          dependencies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Basic Modal */}
          <Button
            onClick={() => setBasicModal(true)}
            variant="primary"
            className="h-12"
          >
            Basic Modal
          </Button>

          {/* Success Modal */}
          <Button
            onClick={() => setSuccessModal(true)}
            variant="primary"
            className="h-12"
          >
            Success Modal
          </Button>

          {/* Alert Modal */}
          <Button
            onClick={() => setAlertModal(true)}
            variant="secondary"
            className="h-12"
          >
            Alert Modal
          </Button>

          {/* Confirmation Modal */}
          <Button
            onClick={() => setConfirmModal(true)}
            variant="danger"
            className="h-12"
          >
            Delete Confirmation
          </Button>

          {/* Form Modal */}
          <Button
            onClick={() => setFormModal(true)}
            variant="outline"
            className="h-12"
          >
            Form Modal
          </Button>

          {/* Full Size Modal */}
          <Button
            onClick={() => setFullModal(true)}
            variant="ghost"
            className="h-12"
          >
            Full Size Modal
          </Button>
        </div>

        {/* Feature List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Dark/Light mode support
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Responsive design
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Keyboard navigation (ESC)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Click outside to close
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Focus management
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Smooth animations
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Portal rendering
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  No external dependencies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Modal */}
      <Modal
        isOpen={basicModal}
        onClose={() => setBasicModal(false)}
        title="Settings Updated"
        size="md"
      >
        <ModalContent>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-teal-100 dark:bg-teal-900/20 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Configuration Saved
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your preferences have been updated
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Your settings have been successfully updated. The changes will take
            effect immediately across all your devices.
          </p>
        </ModalContent>
        <ModalFooter>
          <Button variant="primary" onClick={() => setBasicModal(false)}>
            Got it
          </Button>
        </ModalFooter>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={successModal}
        onClose={() => setSuccessModal(false)}
        size="sm"
        showCloseButton={false}
      >
        <ModalContent className="text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Upload Successful!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your image has been uploaded and is now available in your gallery.
          </p>
          <Button
            variant="primary"
            onClick={() => setSuccessModal(false)}
            className="w-full"
          >
            Continue
          </Button>
        </ModalContent>
      </Modal>

      {/* Alert Modal */}
      <Modal
        isOpen={alertModal}
        onClose={() => setAlertModal(false)}
        title="Storage Almost Full"
        size="md"
      >
        <ModalContent>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Storage Warning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You're using 95% of your storage space. Consider upgrading your
                plan or removing some files to continue uploading.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">
                    Storage Used
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    4.75 GB / 5 GB
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setAlertModal(false)}>
            Later
          </Button>
          <Button variant="primary" onClick={() => setAlertModal(false)}>
            Upgrade Plan
          </Button>
        </ModalFooter>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={confirmModal}
        onClose={() => setConfirmModal(false)}
        title="Confirm Deletion"
        size="sm"
      >
        <ModalContent>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Delete Image Collection
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Are you sure you want to delete "Nature Photography"? This will
                permanently remove 24 images and cannot be undone.
              </p>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-3">
                <p className="text-sm text-red-800 dark:text-red-400">
                  <strong>Warning:</strong> This action is irreversible and will
                  affect all shared links.
                </p>
              </div>
            </div>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => setConfirmModal(false)}>
            Delete Collection
          </Button>
        </ModalFooter>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={formModal}
        onClose={() => setFormModal(false)}
        title="Create New Collection"
        size="lg"
      >
        <ModalContent>
          <form className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  Collection Details
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Organize your images into themed collections
                </p>
              </div>
            </div>

            <Input
              label="Collection Name"
              placeholder="e.g., Summer Vacation 2024"
              required
            />

            <Textarea
              label="Description"
              placeholder="Describe what this collection contains..."
              rows={3}
            />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Visibility
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Public</option>
                  <option>Private</option>
                  <option>Unlisted</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Photography</option>
                  <option>Design</option>
                  <option>Art</option>
                  <option>Nature</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  Pro Tip
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Add tags to make your collection more discoverable
                </p>
              </div>
            </div>
          </form>
        </ModalContent>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setFormModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setFormModal(false)}>
            Create Collection
          </Button>
        </ModalFooter>
      </Modal>

      {/* Full Size Modal */}
      <Modal
        isOpen={fullModal}
        onClose={() => setFullModal(false)}
        title="Image Gallery Browser"
        size="full"
      >
        <ModalContent>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Recent Uploads
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Browse through your latest image uploads
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Grid View
                </Button>
                <Button variant="outline" size="sm">
                  List View
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="group relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="w-6 h-6 bg-white/90 hover:bg-white rounded-full flex items-center justify-center">
                      <X className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalContent>
        <ModalFooter>
          <div className="flex items-center justify-between w-full">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing 24 of 156 images
            </p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setFullModal(false)}>
                Close
              </Button>
              <Button variant="primary">Select Images</Button>
            </div>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}
