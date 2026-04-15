import Link from "next/link";
import { LayoutDashboard, Calendar, Settings, Users, Package, Clock, LogOut } from "lucide-react";

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-brand-cream/40 min-h-[calc(100vh-5rem)]">
      <div className="container-xl py-10 grid lg:grid-cols-[240px_1fr] gap-8">
        <aside className="space-y-1">
          <div className="text-xs uppercase tracking-widest text-brand-ink/40 px-3 mb-2">Client</div>
          <NavItem href="/account" icon={<LayoutDashboard className="h-4 w-4" />}>Overview</NavItem>
          <NavItem href="/account/bookings" icon={<Calendar className="h-4 w-4" />}>My bookings</NavItem>

          <div className="text-xs uppercase tracking-widest text-brand-ink/40 px-3 mt-6 mb-2">Staff</div>
          <NavItem href="/staff" icon={<LayoutDashboard className="h-4 w-4" />}>Today</NavItem>
          <NavItem href="/staff/diary" icon={<Calendar className="h-4 w-4" />}>My diary</NavItem>
          <NavItem href="/staff/availability" icon={<Clock className="h-4 w-4" />}>Availability</NavItem>

          <div className="text-xs uppercase tracking-widest text-brand-ink/40 px-3 mt-6 mb-2">Admin</div>
          <NavItem href="/admin" icon={<LayoutDashboard className="h-4 w-4" />}>Overview</NavItem>
          <NavItem href="/admin/bookings" icon={<Calendar className="h-4 w-4" />}>Bookings</NavItem>
          <NavItem href="/admin/staff" icon={<Users className="h-4 w-4" />}>Staff</NavItem>
          <NavItem href="/admin/treatments" icon={<Package className="h-4 w-4" />}>Treatments</NavItem>
          <NavItem href="/admin/settings" icon={<Settings className="h-4 w-4" />}>Settings</NavItem>

          <Link href="/login" className="mt-10 flex items-center gap-2 text-sm text-brand-ink/60 hover:text-brand-gold px-3 py-2">
            <LogOut className="h-4 w-4" /> Sign out
          </Link>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}

function NavItem({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-brand-ink/80 hover:bg-white hover:text-brand-gold transition">
      {icon}{children}
    </Link>
  );
}
