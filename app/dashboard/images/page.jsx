import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";
import { ImageUploader } from "@/src/components/dashboard/ImageUploader";
import { ImagesList } from "@/src/components/dashboard/ImagesList";

export default function ImagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader
        heading="Images"
        description="Manage your uploaded images"
      />
      <div className="grid gap-6">
        <ImageUploader />
        <ImagesList />
      </div>
    </div>
  );
}
