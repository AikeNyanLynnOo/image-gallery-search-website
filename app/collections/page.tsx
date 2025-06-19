"use client";

import { CollectionsGrid } from "@/components/collection/CollectionsGrid";
import { CollectionsHero } from "@/components/collection/CollectionsHero";
import { FeaturedCollections } from "@/components/collection/FeaturedCollections";
import { HomeFooter } from "@/components/home/HomeFooter";
import { Navbar } from "@/components/home/NavBar";
import { getCollectionsDataRequest } from "@/lib/features/collection/collectionSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CollectionsPage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());

  useEffect(() => {
    dispatch(
      getCollectionsDataRequest({
        page: paramsObject.page || 1,
        limit: paramsObject.limit || 10,
        dateCreated:
          paramsObject.dateCreated === "all" ? "" : paramsObject.dateCreated,
        sortBy: paramsObject.sortBy || "",
        keyword: paramsObject.keyword || "",
        imageCount:
          paramsObject.imageCount === "all" ? "" : paramsObject.imageCount,
        restart: true,
      })
    );
  }, [dispatch, paramsObject]);

  return (
    <div className="min-h-screen bg-neutralWhite-100 dark:bg-dark-200">
      <Navbar />
      <main>
        <CollectionsHero />
        <div className="container mx-auto px-4 py-12">
          <FeaturedCollections />
          {/* <CollectionCategories /> */}
          <CollectionsGrid />
        </div>
      </main>
      <HomeFooter />
    </div>
  );
}
