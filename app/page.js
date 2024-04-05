import { NavBar } from "@/src/components/NavBar";
import { LandingSectionWithImage } from "@/src/components/sections/LandingSectionWithImage";
import { TopicsSection } from "@/src/components/sections/TopicsSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <LandingSectionWithImage
        imgSrc={"/section_imgs/landing.jpeg"}
        // imgSrc={"/section_imgs/spring.webp"}
        customImgStyles={{
          objectFit: "cover",
          height: "65vh",
        }}
      />
      <TopicsSection />
    </div>
  );
}
