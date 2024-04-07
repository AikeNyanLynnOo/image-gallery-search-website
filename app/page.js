import {
  getCollections,
  getRandomPhoto,
  getTopics,
} from "@/lib/helpers/apiFunctions";
import { makeRequest } from "@/lib/helpers/makeRequest";
import { NavBar } from "@/src/components/NavBar";
import { GalleryPagination } from "@/src/components/GalleryPagination";
import { LandingSectionWithImage } from "@/src/components/sections/LandingSectionWithImage";
import { PopularCollections } from "@/src/components/sections/PopularCollections";
import { TopicsSection } from "@/src/components/sections/TopicsSection";
import { useRouter, useSearchParams } from "next/navigation";
import { Footer } from "@/src/components/sections/FooterSection";
import { BackToTopBtn } from "@/src/components/atoms/BackToTopBtn";

export default async function Home({ params, searchParams }) {
  // console.log("Current page>>", parseInt(searchParams.page));

  const collectionsRes = await getCollections({
    per_page: 20,
    page: parseInt(searchParams.page) || 1,
  });
  const topicsRes = await getTopics({
    per_page: 15,
  });
  const randomPhotoRes = await getRandomPhoto();

  return (
    <div>
      <NavBar />
      <LandingSectionWithImage
        imgSrc={randomPhotoRes.data[0].urls.regular}
        customImgStyles={{
          objectFit: "cover",
          height: "65vh",
        }}
        topics={topicsRes.data}
      />
      <TopicsSection topics={topicsRes.data} />
      <PopularCollections collections={collectionsRes.data} />
      <GalleryPagination totalPages={10} />
      <Footer />
      <BackToTopBtn />
    </div>
  );
}
