import { CollectionsList } from "@/src/components/dashboard/CollectionsList";
import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";

export default function CollectionsPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader
        heading="Collections"
        description="Manage your created collections"
      />
      <div className="grid gap-6">
        <CollectionsList />
      </div>
    </div>
  );
}
