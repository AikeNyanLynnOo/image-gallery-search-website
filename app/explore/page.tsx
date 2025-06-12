"use client";

import { FilterSection } from "@/components/explore/FilterSection";
import { ImageGrid } from "@/components/explore/ImageGrid";
import { Navbar } from "@/components/home/NavBar";
import { getExploreDataRequest } from "@/lib/features/explore/exploreSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ExplorePage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());

  useEffect(() => {
    dispatch(
      getExploreDataRequest({
        page: paramsObject.page || 1,
        limit: paramsObject.limit || 10,
        uploadedWithin: paramsObject.uploadedWithin || "",
        sortBy: paramsObject.sortBy || "",
        topic: paramsObject.topic || "",
      })
    );
  }, [dispatch, paramsObject]);

  return (
    <div className="min-h-screen bg-neutralWhite-100 dark:bg-dark-200">
      <Navbar />
      <main>
        {/* <ExploreHero /> */}
        <FilterSection />
        <div className="container mx-auto px-4">
          {/* <TrendingTopics /> */}
          <ImageGrid />
        </div>
      </main>
    </div>
  );
}
