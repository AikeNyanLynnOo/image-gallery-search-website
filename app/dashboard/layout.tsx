import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { MobileNav } from "@/components/dashboard/MobileNav";

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex min-h-screen flex-col bg-primaryBgDark-100 dark:bg-dark-200">
      <MobileNav />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
