import { FilterSection } from "@/components/explore/FilterSection";
import { ImageGrid } from "@/components/explore/ImageGrid";
import { Navbar } from "@/components/home/NavBar";

export default function ExplorePage() {
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
