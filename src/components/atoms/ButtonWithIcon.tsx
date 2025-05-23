const variants = {
  primary: "bg-primaryTeal-100 hover:bg-primaryTeal-200 text-white",
  secondary:
    "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100",
  outline:
    "border-2 border-primaryTeal-100 text-primaryTeal-100 hover:bg-primaryTeal-50 dark:border-primaryTeal-200 dark:text-primaryTeal-200 dark:hover:bg-primaryTeal-900/20",
  ghost:
    "hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-800 dark:text-gray-100",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

export default function ButtonWithIcon({
  icon,
  iconPosition = "start",
  onClick,
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  className,
  iconClassName,
  ...props
}: any) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-lg
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryTeal-100
    dark:focus:ring-offset-gray-900
  `;

  const widthClasses = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      // className={cn(baseClasses, widthClasses, className)}
      {...props}
    >
      {loading ? (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          {/* {iconPosition === "start" && Icon && (
            <Icon className={cn("h-4 w-4", iconClassName)} />
          )} */}
          {children}
          {/* {iconPosition === "end" && Icon && (
            <Icon className={cn("h-4 w-4", iconClassName)} />
          )} */}
        </>
      )}
    </button>
  );
}
