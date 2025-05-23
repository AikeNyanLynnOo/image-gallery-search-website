import { CollectionCategories } from "@/components/collection/CollectionCategories";
import { CollectionsGrid } from "@/components/collection/CollectionsGrid";
import { CollectionsHero } from "@/components/collection/CollectionsHero";
import { FeaturedCollections } from "@/components/collection/FeaturedCollections";
import { HomeFooter } from "@/components/home/HomeFooter";
import { Navbar } from "@/components/home/NavBar";

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
