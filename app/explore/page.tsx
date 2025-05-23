import { ImageGrid } from "@/components/explore/ImageGrid";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { FilterSection } from "@/components/explore/FilterSection";
import { Navbar } from "@/components/home/NavBar";
import { TrendingTopics } from "@/components/explore/TrendingTopics";

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
