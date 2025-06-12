import { formatNumber } from "@/lib/helpers/helperFunctions";
import { Download, ExternalLink, Eye, Heart, Plus } from "lucide-react";
import Link from "next/link";

interface MasonryImageProps {
  _id: string;
  title: string;
  cloudinaryId: string;
  url: string;
  isPublished: boolean;
  collections: string[];
  topics: Array<{
    _id: string;
    name: string;
    description: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }>;
  likes: number;
  views: number;
  downloads: number;
  uploadedAt: string;
  slug: string;
  user: {
    profile: {
      firstName: string;
      lastName: string;
      displayName: string;
      bio: string;
      avatar: string;
      location: string;
      website: string;
    };
    _id: string;
    email: string;
    totalCollections: number;
    totalImages: number;
    totalLikes: number;
  };
  tags: string[];
}

export default function MasonryImage({
  _id,
  title,
  url,
  likes,
  views,
  downloads,
  user,
}: MasonryImageProps) {
  return (
    <a
      href={url || ""}
      className="block group min-h-[210px] relative overflow-hidden rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-md hover:shadow-xl transition-all duration-500"
    >
      <img
        src={url || "/placeholder.svg"}
        alt={title || ""}
        className="h-auto min-h-[210px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="pb-8">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-white/80 mb-4">by {user.profile.displayName}</p>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center rounded-lg bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100 hover:shadow-lg hover:shadow-primaryTeal-100/20">
              <Download className="h-4 w-4" />
              {/* Download */}
            </button>
            <Link
              href={`/images/${_id}`}
              className="inline-flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30"
            >
              <ExternalLink className="h-4 w-4" />
              {/* View */}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 flex items-center justify-between bg-black/60 px-4 py-3 text-sm text-white backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Eye className="h-4 w-4" />
            <span>{formatNumber(views)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="h-4 w-4" />
            <span>{formatNumber(likes)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Download className="h-4 w-4" />
            <span>{formatNumber(downloads)}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
