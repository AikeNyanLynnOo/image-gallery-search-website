import { formatNumber } from "@/lib/helpers/helperFunctions";
import { Download, ExternalLink, Eye, Heart, Plus } from "lucide-react";
import Link from "next/link";

interface MasonryImageProps {
  id: number | string;
  title?: string;
  alt?: string;
  owner?: string;
  src: string;
  likes?: number;
  views?: number;
  downloads?: number;
}

export default function MasonryImage({
  id,
  title,
  alt,
  owner,
  src,
  likes,
  views,
  downloads,
}: MasonryImageProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-dark-100 bg-neutralWhite-100 dark:bg-dark-200 shadow-md hover:shadow-xl transition-all duration-500">
      <img
        src={src || "/placeholder.svg"}
        alt={alt || ""}
        className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
          <p className="text-white/80 mb-4">by {owner}</p>
          <div className="flex gap-2">
            <button className="flex-1 inline-flex items-center justify-center rounded-lg bg-primaryTeal-100 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-secondaryTeal-100 hover:shadow-lg hover:shadow-primaryTeal-100/20">
              <Download className="mr-2 h-4 w-4" />
              Download
            </button>
            <Link
              href={`/images/${id}`}
              className="inline-flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/60 px-4 py-3 text-sm text-white backdrop-blur-sm">
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
    </div>
  );
}
