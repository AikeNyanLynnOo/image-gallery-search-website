"use client"; // Error components must be Client Components

import { SomethingWentWrong } from "@/src/components/customComponents/SomethingWentWrong";
import { useEffect } from "react";

export default function NotFound({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-slate-50">
      <SomethingWentWrong text={"Page Not Found"} />
    </div>
  );
}
