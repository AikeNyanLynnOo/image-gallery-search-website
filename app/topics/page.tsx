import { HomeFooter } from "@/components/home/HomeFooter";
import { Navbar } from "@/components/home/NavBar";
import { TopicCategories } from "@/components/topics/TopicCategories";
import { TopicsGrid } from "@/components/topics/TopicsGrid";
import { TopicsHero } from "@/components/topics/TopicsHero";
import { TopicsShowcase } from "@/components/topics/TopicsShowcase";

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-neutralWhite-100 dark:bg-dark-200">
      <Navbar />
      <main>
        <TopicsHero />
        <div className="container mx-auto px-4 py-12">
          <TopicsShowcase />
          <TopicCategories />
          <TopicsGrid />
        </div>
      </main>
      <HomeFooter />
    </div>
  );
}
