// "use client";

import { NavBar } from "@/src/components/NavBar";
import { BackToTopBtn } from "@/src/components/atoms/BackToTopBtn";
import { GalleryPhotos } from "@/src/components/sections/GalleryPhotos";
import { Suspense } from "react";
export default async function SearchResults({ params, searchParams }) {
  return (
    <div>
      <NavBar />
      <Suspense>
        <GalleryPhotos />
      </Suspense>
      <BackToTopBtn />
    </div>
  );
}
