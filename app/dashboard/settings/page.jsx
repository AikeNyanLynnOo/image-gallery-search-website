import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";
import { PasswordForm } from "@/src/components/dashboard/PasswordForm";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader
        heading="Settings"
        description="Manage your account settings"
      />
      <div className="grid gap-6">
        <PasswordForm />
      </div>
    </div>
  );
}
