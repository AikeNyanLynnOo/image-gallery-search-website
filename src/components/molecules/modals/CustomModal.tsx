"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showHeaderDivider?: boolean;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showHeaderDivider = true,
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className = "",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, closeOnEscape]);

  // Handle focus management
  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Focus the modal
      modalRef.current?.focus();

      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore focus to the previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }

      // Restore body scroll
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle backdrop click
  const handleBackdropClick = (event: any) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  // Size classes
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full mx-4",
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        bg-black/50 dark:bg-black/70
        transition-opacity duration-300 ease-out
        ${isOpen ? "opacity-100" : "opacity-0"}
      `}
      onClick={handleBackdropClick}
      role="dialog"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          handleBackdropClick(e); // your close function
        }
      }}
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        role="button"
        className={`
          relative w-full ${sizeClasses[size]}
          bg-neutralWhite-100 dark:bg-dark-200
          rounded-lg shadow-xl
          transform transition-all duration-300 ease-out
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          max-h-[90vh] overflow-hidden
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div
            className={`flex items-center justify-between py-3 pl-5 pr-4 ${
              showHeaderDivider ? "border-b" : ""
            } border-gray-200 dark:border-gray-700`}
          >
            {title && (
              <h2
                id="modal-title"
                className="text-lg font-semibold text-gray-900 dark:text-white"
              >
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="
                  p-2 rounded-lg
                  text-gray-400 hover:text-gray-600
                  dark:text-gray-500 dark:hover:text-gray-300
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-teal-500
                "
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
          {children}
        </div>
      </div>
    </div>
  );

  // Render modal in portal
  return createPortal(modalContent, document.body);
}

// Modal content components for better structure
export function ModalContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function ModalFooter({
  children,
  className = "",
  showFooterDivider = true,
}: {
  children: React.ReactNode;
  className?: string;
  showFooterDivider?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-end gap-3 p-6 ${
        showFooterDivider ? "border-t" : ""
      } border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}

// Custom Button component (no shadcn dependency)
export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    disabled:pointer-events-none
  `;

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variantClasses = {
    primary: `
      bg-teal-600 hover:bg-teal-700 active:bg-teal-800
      text-white shadow-sm
      focus:ring-teal-500
      dark:bg-teal-500 dark:hover:bg-teal-600 dark:active:bg-teal-700
    `,
    secondary: `
      bg-gray-100 hover:bg-gray-200 active:bg-gray-300
      text-gray-900 shadow-sm
      focus:ring-gray-500
      dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500
      dark:text-white
    `,
    danger: `
      bg-red-600 hover:bg-red-700 active:bg-red-800
      text-white shadow-sm
      focus:ring-red-500
      dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700
    `,
    ghost: `
      hover:bg-gray-100 active:bg-gray-200
      text-gray-700
      focus:ring-gray-500
      dark:hover:bg-gray-800 dark:active:bg-gray-700
      dark:text-gray-300
    `,
    outline: `
      border border-gray-300 hover:bg-gray-50 active:bg-gray-100
      text-gray-700 shadow-sm
      focus:ring-gray-500
      dark:border-gray-600 dark:hover:bg-gray-800 dark:active:bg-gray-700
      dark:text-gray-300
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

// Custom Input component (no shadcn dependency)
export function Input({
  label,
  error,
  className = "",
  ...props
}: {
  label?: string;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-3 py-2 
          border border-gray-300 dark:border-gray-600 
          rounded-lg 
          bg-neutralWhite-100 dark:bg-dark-100 
          text-gray-900 dark:text-white 
          placeholder-gray-500 dark:placeholder-gray-400
          focus:ring-2 focus:ring-teal-500 focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}

// Custom Textarea component (no shadcn dependency)
export function Textarea({
  label,
  error,
  className = "",
  ...props
}: {
  label?: string;
  error?: string;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-3 py-2 
          border border-gray-300 dark:border-gray-600 
          rounded-lg 
          bg-neutralWhite-100 dark:bg-dark-100 
          text-gray-900 dark:text-white 
          placeholder-gray-500 dark:placeholder-gray-400
          focus:ring-2 focus:ring-teal-500 focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed
          resize-vertical
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
