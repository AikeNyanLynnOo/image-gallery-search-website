// "use client";
import {
  getCollections,
  getPhotos,
  getRandomPhoto,
  getTopics,
} from "@/lib/helpers/apiFunctions";

import { makeRequest } from "@/lib/helpers/makeRequest";
import { NavBar } from "@/src/components/NavBar";
import { GalleryPagination } from "@/src/components/GalleryPagination";
import { LandingSectionWithImage } from "@/src/components/sections/LandingSectionWithImage";
import { PopularCollections } from "@/src/components/sections/PopularCollections";
import { TopicsSection } from "@/src/components/sections/TopicsSection";
// import { useRouter, useSearchParams } from "next/navigation";
import { Footer } from "@/src/components/sections/FooterSection";
import { BackToTopBtn } from "@/src/components/atoms/BackToTopBtn";
import { GalleryPhotos } from "@/src/components/sections/GalleryPhotos";
// import { useDispatch } from "react-redux";
import {
  getPhotosRequest,
  getPhotosSuccess,
} from "@/lib/features/photo/photoSlice";

export default async function SearchResults({ params, searchParams }) {
  //   const dispatch = useDispatch();
  //   const searchParams = useSearchParams();

//   const query = searchParams.query || `""`;
//   const collection = searchParams.collection || `""`;
//   const order_by = searchParams.order_by || "relevant";

  //   const query = searchParams.get("query") || `""`;
  //   const collection = searchParams.get("collection") || `""`;
  //   const order_by = searchParams.get("order_by") || "relevant";

  //   const { data } = await getPhotos({
  //     params: {
  //       query,
  //       per_page: 10,
  //       collections, // if multiple go with commas, but not in this version
  //       order_by,
  //     },
  //     ENV: {
  //       API_URL: process.env.API_URL,
  //       ACCESS_ID: process.env.ACCESS_ID,
  //     },
  //   });
  //   if (data) {
  //     dispatch(
  //       getPhotosSuccess({
  //         total: data.total,
  //         totalPages: data.total_pages,
  //         photos: data.results,
  //       })
  //     );
  //   }

  return (
    <div>
      <NavBar />
      {/* <LandingSectionWithImage
          imgSrc={randomPhotoRes.data[0].urls.regular}
          customImgStyles={{
            objectFit: "cover",
            height: "65vh",
          }}
          topics={topicsRes.data}
        />
        <TopicsSection topics={topicsRes.data} />
        <PopularCollections collections={collectionsRes.data} />
        
        <GalleryPagination totalPages={10} /> */}
      <GalleryPhotos
        // totalCount={data.total}
        // totalPagesCount={data.total_pages}
        // results={data.results}
      />
      <BackToTopBtn />
    </div>
  );
}
