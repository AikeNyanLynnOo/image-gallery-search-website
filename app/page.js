import { NavBar } from "@/src/components/NavBar";
import { GalleryPagination } from "@/src/components/GalleryPagination";
import { LandingSectionWithImage } from "@/src/components/sections/LandingSectionWithImage";
import { TopicsSection } from "@/src/components/sections/TopicsSection";
import { Footer } from "@/src/components/sections/FooterSection";
import { BackToTopBtn } from "@/src/components/atoms/BackToTopBtn";
import { Suspense } from "react";
import {
  getPublicImages,
  getRandomImage,
  getTopics,
} from "@/lib/helpers/apiFunctions";
import { RandomImages } from "@/src/components/sections/RandomImages";

export default async function Home({ params, searchParams }) {
  const publicImagesRes = await getPublicImages({
    limit: 20,
    page: parseInt(searchParams.page) || 1,
  });
  const topicsRes = await getTopics();
  const randomImageRes = await getRandomImage();

  return (
    <div>
      <NavBar />
      <Suspense>
        <LandingSectionWithImage
          imgSrc={randomImageRes.data && randomImageRes.data.image.url}
          customImgStyles={{
            objectFit: "cover",
            height: "65vh",
          }}
          topics={topicsRes.data && topicsRes.data.topics}
        />
      </Suspense>
      <TopicsSection topics={topicsRes.data && topicsRes.data.topics} />
      <RandomImages
        images={(publicImagesRes.data && publicImagesRes.data.images) || []}
      />
      <Suspense>
        <GalleryPagination
          totalPages={
            publicImagesRes.data &&
            publicImagesRes.data.pagination &&
            publicImagesRes.data.pagination.totalPages
          }
        />
      </Suspense>
      <Footer />
      <BackToTopBtn />
    </div>
  );
}
