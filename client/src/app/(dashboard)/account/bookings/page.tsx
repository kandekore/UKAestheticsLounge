const mock = [
  { id: "1", treatment: "Signature HydraFacial", staff: "Jade R.", when: "Fri 24 Apr, 14:00", status: "Confirmed", price: 120 },
  { id: "2", treatment: "HIFU — Neck / Jaw Lift", staff: "Sara M.", when: "Sat 10 May, 11:00", status: "Deposit paid", price: 150 },
  { id: "3", treatment: "Botox™ Anti-Wrinkle (2 Areas)", staff: "Amira K.", when: "12 Mar, 15:30", status: "Completed", price: 225 },
];

export default function MyBookings() {
  return (
    <div>
      <h1 className="text-3xl">My bookings</h1>
      <div className="mt-6 card p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-brand-cream/60 text-xs uppercase tracking-widest text-brand-ink/60">
            <tr>
              <th className="text-left p-4">Treatment</th>
              <th className="text-left p-4">Practitioner</th>
              <th className="text-left p-4">When</th>
              <th className="text-left p-4">Status</th>
              <th className="text-right p-4">Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {mock.map((b) => (
              <tr key={b.id} className="border-t border-black/5">
                <td className="p-4 font-medium">{b.treatment}</td>
                <td className="p-4 text-brand-ink/70">{b.staff}</td>
                <td className="p-4">{b.when}</td>
                <td className="p-4"><span className="rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs px-3 py-1">{b.status}</span></td>
                <td className="p-4 text-right font-serif text-brand-gold">£{b.price}</td>
                <td className="p-4 text-right"><button className="text-xs text-brand-ink/60 hover:text-brand-gold">Manage</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
