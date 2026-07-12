import { getAdminSession } from "@/lib/adminAuth";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

// Session comes from cookies, so this page is always rendered per-request.
export default async function AdminPage() {
  const session = await getAdminSession();
  return (
    <main className="bs-admin">
      {session ? <AdminDashboard adminEmail={session.email} /> : <AdminLogin />}
    </main>
  );
}
