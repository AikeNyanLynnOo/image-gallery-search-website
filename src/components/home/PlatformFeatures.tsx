import { Camera, Users, FolderKanban, Hash, Shield, Zap } from "lucide-react";

export function PlatformFeatures() {
  const features = [
    {
      icon: Camera,
      title: "High-Quality Images",
      description:
        "Upload and share your best work in high resolution with our optimized image hosting.",
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description:
        "Connect with photographers and visual creators from around the world.",
    },
    {
      icon: FolderKanban,
      title: "Organize Collections",
      description:
        "Create and curate collections to showcase your work in meaningful ways.",
    },
    {
      icon: Hash,
      title: "Discover by Topics",
      description:
        "Browse and contribute to topics that match your interests and expertise.",
    },
    {
      icon: Shield,
      title: "Copyright Protection",
      description:
        "Your images are protected with proper attribution and licensing options.",
    },
    {
      icon: Zap,
      title: "Fast & Responsive",
      description:
        "Enjoy a seamless experience across all devices with our optimized platform.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 dark:bg-dark-100/30 skew-y-[-3deg] transform origin-top-right"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondaryTeal-100/5 dark:bg-secondaryTeal-100/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 text-sm font-medium mb-4">
            Why Choose Impressa
          </span>
          <h2 className="text-4xl font-bold text-primary-100 dark:text-primaryDark-100 mb-4">
            Everything you need to showcase your photography
          </h2>
          <p className="text-lg text-primary-100/70 dark:text-primaryDark-100/70 max-w-2xl mx-auto">
            We provide the tools and community you need to showcase your
            photography and grow your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutralWhite-100 dark:bg-dark-200 rounded-xl border border-gray-200 dark:border-dark-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primaryTeal-100/10 dark:bg-primaryTeal-100/20 text-primaryTeal-100 mb-6 group-hover:bg-primaryTeal-100 group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary-100 dark:text-primaryDark-100 mb-4">
                {feature.title}
              </h3>
              <p className="text-primary-100/70 dark:text-primaryDark-100/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
