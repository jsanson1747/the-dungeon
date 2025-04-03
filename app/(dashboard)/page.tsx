import { auth } from "../auth";
import { redirect } from "next/navigation";
import { DashboardContent } from "@/components/DashboardContent";

// The main dashboard

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return <DashboardContent />;
}
