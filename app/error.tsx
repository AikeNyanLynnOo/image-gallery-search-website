"use client";

import { SomethingWentWrong } from "@/components/customComponents/SomethingWentWrong";

// Error components must be Client Components

export default function Error({ error, reset }: any) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-slate-50">
      <SomethingWentWrong text={"Something Went Wrong!"} isReload />
    </div>
  );
}
