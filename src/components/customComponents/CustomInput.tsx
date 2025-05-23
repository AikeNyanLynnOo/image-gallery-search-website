import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

export const CustomInput = (props: any) => {
  const {
    handleGo,
    type,
    placeholder,
    inputValue,
    textChange,
    handleClearInput,
    disabled,
    closeIconControl,
    multiline,
    minHeight,
    maxLength,
    customInputStyles,
    customStartAdornmentStyles,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: any) => {
    event.preventDefault();
  };

  const baseInputClasses = `
    w-full px-3 py-2
    bg-neutralWhite-100 dark:bg-dark-100
    border border-gray-200 dark:border-dark-100
    rounded-md
    text-sm
    text-primary-100
    dark:text-primaryDark-100
    shadow-sm
    focus:border-primaryTeal-100 focus:outline-none focus:ring-primaryTeal-100
    disabled:opacity-50 disabled:cursor-not-allowed
    ${multiline ? "min-h-[85px]" : "h-[40px]"}
    ${customInputStyles || ""}
  `;

  const handleInputChange = (e: any) => {
    const textValue = e.target.value;
    // Check if the input contains only spaces
    if (/^\s+$/.test(textValue)) {
      textChange(textValue.trim()); // Trim spaces
    } else {
      textChange(textValue); // Keep input as is
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleGo?.();
    }
  };

  return (
    <div className="relative w-full">
      {multiline ? (
        <textarea
          className={baseInputClasses}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          style={{ minHeight: minHeight || "85px" }}
        />
      ) : (
        <input
          className={baseInputClasses}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={closeIconControl?.handleInputFocus}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
        />
      )}

      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {type === "password" && (
          <button
            type="button"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            onMouseUp={handleMouseUpPassword}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}

        {closeIconControl?.showCloseIcon && inputValue && !disabled && (
          <button
            type="button"
            onClick={handleClearInput}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};
