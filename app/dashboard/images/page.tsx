import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ImagesList } from "@/components/dashboard/ImagesList";

export default function ImagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader
        heading="Images"
        description="Manage your uploaded images"
      />
      <div className="grid gap-6">
        <ImagesList />
      </div>
    </div>
  );
}
