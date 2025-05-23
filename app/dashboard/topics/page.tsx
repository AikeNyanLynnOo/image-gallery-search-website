import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { TopicsList } from "@/components/dashboard/TopicsList";

export default function TopicsPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader
        heading="Topics"
        description="Manage your created topics"
      />
      <div className="grid gap-6">
        <TopicsList />
      </div>
    </div>
  );
}
