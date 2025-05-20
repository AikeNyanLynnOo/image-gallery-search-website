import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";
import { FavoritesList } from "@/src/components/dashboard/FavoritesList";

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
