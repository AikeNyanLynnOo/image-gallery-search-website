import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";
import { RecentActivity } from "@/src/components/dashboard/RecentActivity";
import { UserProfile } from "@/src/components/dashboard/UserProfile";
import { UserStats } from "@/src/components/dashboard/UserStats";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader
        heading="Dashboard"
        description="Welcome back to your dashboard"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UserProfile />
        <UserStats />
      </div>
      <RecentActivity />
    </div>
  );
}
