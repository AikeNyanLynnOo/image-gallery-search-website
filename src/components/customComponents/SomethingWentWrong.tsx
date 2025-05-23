"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { RefreshCcw, Home } from "lucide-react";

export const SomethingWentWrong = ({
  text,
  isReload,
  handleBtnClick,
  children,
  imgSrc,
}: any) => {
  const router = useRouter();

  const defaultHandleClick = () => {
    if (handleBtnClick) {
      handleBtnClick();
      return;
    }
    if (isReload) {
      router.refresh();
      return;
    }
    router.back();
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-md px-4">
      <div className="relative mx-auto w-24 h-24 mb-6">
        <Image
          src={imgSrc || "/something_went_wrong.png"}
          width={100}
          height={100}
          alt="Something Went Wrong"
          className="mx-auto object-contain"
        />
      </div>

      <p className="text-lg font-medium text-gray-700 dark:text-gray-200 py-6">
        {text || "Something Went Wrong!"}
      </p>

      <button
        onClick={defaultHandleClick}
        className="inline-flex items-center gap-2 px-5 py-3 font-medium rounded-lg transition-all duration-200
          bg-teal-600 hover:bg-teal-700 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5"
      >
        {isReload ? (
          <RefreshCcw className="h-4 w-4" />
        ) : (
          <Home className="h-4 w-4" />
        )}
        <span>{isReload ? "Refresh" : "Back"}</span>
      </button>

      {children}
    </div>
  );
};
