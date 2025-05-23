import Link from "next/link";
import {
  ImageIcon,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

export function HomeFooter() {
  return (
    <footer className="bg-gray-50 dark:bg-dark-100/30 border-t border-gray-200 dark:border-dark-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-primary-100 dark:text-primaryDark-100"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-primaryTeal-100 dark:bg-neutral-200 rounded-full blur-md opacity-30 dark:opacity-60" />
                <Image
                  src={"/logo.png"}
                  className="h-8 w-8"
                  width={32}
                  height={32}
                  alt="logo"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">Impressa</span>
            </Link>
            <p className="mt-4 text-primary-100/70 dark:text-primaryDark-100/70">
              Discover and share the world&apos; most beautiful images. Join our
              community of photographers and visual creators.
            </p>
            <div className="mt-6 flex space-x-5">
              <a
                href="#"
                className="text-primary-100/60 dark:text-primaryDark-100/60 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-100/60 dark:text-primaryDark-100/60 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-100/60 dark:text-primaryDark-100/60 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-100/60 dark:text-primaryDark-100/60 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h3 className="text-base font-bold text-primary-100 dark:text-primaryDark-100 tracking-wider uppercase mb-4">
                Explore
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/explore"
                    className="text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
                  >
                    Discover
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections"
                    className="text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics"
                    className="text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
                  >
                    Topics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/photographers"
                    className="text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
                  >
                    Photographers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/popular"
                    className="text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
                  >
                    Popular
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-primary-100 dark:text-primaryDark-100 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-primary-100/70 dark:text-primaryDark-100/70 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-primary-100 dark:text-primaryDark-100 tracking-wider uppercase mb-4">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primaryTeal-100 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-100/70 dark:text-primaryDark-100/70">
                    123 Photography Lane
                    <br />
                    San Francisco, CA 94107
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primaryTeal-100 mr-3 flex-shrink-0" />
                  <span className="text-primary-100/70 dark:text-primaryDark-100/70">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primaryTeal-100 mr-3 flex-shrink-0" />
                  <span className="text-primary-100/70 dark:text-primaryDark-100/70">
                    hello@impressa.com
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-primary-100 dark:text-primaryDark-100 mb-3">
                  Subscribe to our newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-l-lg border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 px-4 py-2 text-sm text-primary-100 dark:text-primaryDark-100 focus:border-primaryTeal-100 focus:outline-none focus:ring-1 focus:ring-primaryTeal-100"
                  />
                  <button className="rounded-r-lg bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white hover:bg-secondaryTeal-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-dark-100 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-primary-100/60 dark:text-primaryDark-100/60">
            &copy; {new Date().getFullYear()} Impressa. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap gap-6">
              <Link
                href="/privacy"
                className="text-sm text-primary-100/60 dark:text-primaryDark-100/60 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-primary-100/60 dark:text-primaryDark-100/60 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-primary-100/60 dark:text-primaryDark-100/60 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-primary-100/60 dark:text-primaryDark-100/60 hover:text-primaryTeal-100 dark:hover:text-primaryTeal-100 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
