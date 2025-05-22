import { CollectionCategories } from "@/src/components/collection/CollectionCategories";
import { CollectionsGrid } from "@/src/components/collection/CollectionsGrid";
import { CollectionsHero } from "@/src/components/collection/CollectionsHero";
import { FeaturedCollections } from "@/src/components/collection/FeaturedCollections";
import { HomeFooter } from "@/src/components/home/HomeFooter";
import { Navbar } from "@/src/components/home/NavBar";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-neutralWhite-100 dark:bg-dark-200">
      <Navbar />
      <main>
        <CollectionsHero />
        <div className="container mx-auto px-4 py-12">
          <FeaturedCollections />
          <CollectionCategories />
          <CollectionsGrid />
        </div>
      </main>
      <HomeFooter />
    </div>
  );
}
