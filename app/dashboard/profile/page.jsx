import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";
import { ProfileForm } from "@/src/components/dashboard/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader
        heading="Profile"
        description="Manage your profile information"
      />
      <div className="grid gap-6">
        <ProfileForm />
      </div>
    </div>
  );
}
