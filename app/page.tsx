import { FeaturedImages } from "@/components/home/FeaturedImages";
import { HomeHero } from "@/components/home/HomeHero";
import { PopularCollections } from "@/components/home/PopularCollections";
import { Testimonials } from "@/components/home/Testimonials";
import { Navbar } from "@/components/home/NavBar";
import { PlatformFeatures } from "@/components/home/PlatformFeatures";
import Link from "next/link";
import { HomeFooter } from "@/components/home/HomeFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutralWhite-100 dark:bg-dark-200">
      <Navbar />
      <main>
        <HomeHero />
        <FeaturedImages />
        <PlatformFeatures />
        <PopularCollections />
        <Testimonials />
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primaryTeal-100/10 via-primaryTeal-100/5 to-transparent dark:from-primaryTeal-100/20 dark:via-primaryTeal-100/10 dark:to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primaryTeal-100/10 dark:bg-primaryTeal-100/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondaryTeal-100/10 dark:bg-secondaryTeal-100/5 rounded-full blur-3xl"></div>
          <div className="container relative mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary-100 dark:text-primaryDark-100 mb-6">
              Ready to share your creativity with the world?
            </h2>
            <p className="text-lg text-primary-100/70 dark:text-primaryDark-100/70 max-w-2xl mx-auto mb-10">
              Join thousands of photographers and creators who are sharing their
              work and getting discovered every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/signup"
                className="inline-flex justify-center rounded-lg bg-primaryTeal-100 px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-secondaryTeal-100 hover:shadow-primaryTeal-100/20 dark:hover:shadow-primaryTeal-100/10 hover:translate-y-[-2px]"
              >
                Sign Up for Free
              </Link>
              <Link
                href="/explore"
                className="inline-flex justify-center rounded-lg border-2 border-primaryTeal-100 bg-transparent px-8 py-4 text-base font-medium text-primaryTeal-100 shadow-sm transition-all hover:bg-primaryTeal-100/5 dark:hover:bg-primaryTeal-100/10 hover:shadow-lg hover:shadow-primaryTeal-100/10 dark:hover:shadow-primaryTeal-100/5 hover:translate-y-[-2px]"
              >
                Explore Images
              </Link>
            </div>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}
