import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { FavoritesList } from "@/components/dashboard/FavoritesList";

export default function FavoritesPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader
        heading="Favorites"
        description="View your favorite images"
      />
      <div className="grid gap-6">
        <FavoritesList />
      </div>
    </div>
  );
}
