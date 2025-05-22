import { Navbar } from "@/src/components/home/navbar";
import { ExploreHero } from "@/src/components/explore/ExploreHero";
import { ImageGrid } from "@/src/components/explore/ImageGrid";
import { FilterSection } from "@/src/components/explore/FilterSection";
import { TrendingTopics } from "@/src/components/explore/TrendingTopics";
import { HomeFooter } from "@/src/components/home/HomeFooter";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-neutralWhite-100 dark:bg-dark-200">
      <Navbar />
      <main>
        <ExploreHero />
        <div className="container mx-auto px-4 py-12">
          <TrendingTopics />
          <FilterSection />
          <ImageGrid />
        </div>
      </main>
    </div>
  );
}
