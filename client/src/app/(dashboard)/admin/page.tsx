export default function AdminHome() {
  return (
    <div>
      <h1 className="text-3xl">Admin overview</h1>
      <div className="mt-8 grid md:grid-cols-4 gap-4">
        {[
          { label: "Bookings today", value: "12" },
          { label: "Active staff", value: "4" },
          { label: "Treatments", value: "34" },
          { label: "Revenue (mtd)", value: "£18,420" },
        ].map((s) => (
          <div key={s.label} className="card">
            <div className="text-xs uppercase tracking-widest text-brand-ink/50">{s.label}</div>
            <div className="mt-2 text-3xl font-serif text-brand-gold">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="font-serif text-xl mb-4">Recent bookings</h2>
          <ul className="text-sm space-y-3">
            <li className="flex justify-between border-b border-black/5 pb-2"><span>Sophie L. · HydraFacial</span><span className="text-brand-ink/60">10:00</span></li>
            <li className="flex justify-between border-b border-black/5 pb-2"><span>Ava B. · HIFU</span><span className="text-brand-ink/60">11:30</span></li>
            <li className="flex justify-between"><span>Priya K. · Botox 2A</span><span className="text-brand-ink/60">14:00</span></li>
          </ul>
        </div>
        <div className="card">
          <h2 className="font-serif text-xl mb-4">Today's staff</h2>
          <ul className="text-sm space-y-3">
            <li className="flex justify-between"><span>Amira K. · Injectables</span><span className="text-brand-ink/60">4 bookings</span></li>
            <li className="flex justify-between"><span>Jade R. · Skin therapy</span><span className="text-brand-ink/60">5 bookings</span></li>
            <li className="flex justify-between"><span>Sara M. · Laser/HIFU</span><span className="text-brand-ink/60">3 bookings</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
