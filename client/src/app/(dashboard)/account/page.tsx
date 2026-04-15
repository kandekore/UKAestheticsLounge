import Link from "next/link";

export default function AccountPage() {
  return (
    <div>
      <h1 className="text-3xl">Welcome back, Jane</h1>
      <p className="mt-2 text-brand-ink/70 text-sm">Your upcoming bookings and recent activity.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <Stat label="Upcoming" value="2" />
        <Stat label="Completed" value="14" />
        <Stat label="Loyalty points" value="320" />
      </div>

      <div className="mt-8 card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-serif text-xl">Next appointment</h2>
          <Link href="/account/bookings" className="text-sm text-brand-gold hover:underline">View all →</Link>
        </div>
        <div className="rounded-xl bg-brand-cream/60 p-4">
          <div className="flex justify-between">
            <div>
              <div className="font-semibold">Signature HydraFacial</div>
              <div className="text-sm text-brand-ink/60">with Jade R. · 60 min</div>
            </div>
            <div className="text-right">
              <div className="font-serif text-brand-gold">Fri 24 Apr</div>
              <div className="text-sm">14:00</div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="btn-outline text-xs px-4 py-2">Reschedule</button>
            <button className="text-xs px-4 py-2 text-red-600">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card">
      <div className="text-xs uppercase tracking-widest text-brand-ink/50">{label}</div>
      <div className="mt-2 text-3xl font-serif text-brand-gold">{value}</div>
    </div>
  );
}
