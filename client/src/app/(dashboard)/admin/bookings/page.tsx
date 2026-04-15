const rows = [
  { date: "14 Apr", time: "10:00", client: "Sophie L.", staff: "Jade R.", treatment: "HydraFacial", status: "Confirmed", amount: 120 },
  { date: "14 Apr", time: "11:30", client: "Ava B.", staff: "Sara M.", treatment: "HIFU Lower + Upper", status: "Deposit", amount: 50 },
  { date: "14 Apr", time: "14:00", client: "Priya K.", staff: "Amira K.", treatment: "Botox 2A", status: "Paid", amount: 225 },
  { date: "15 Apr", time: "10:30", client: "Nadia S.", staff: "Jade R.", treatment: "Deep Cleanse", status: "On arrival", amount: 0 },
];

export default function AdminBookings() {
  return (
    <div>
      <h1 className="text-3xl">All bookings</h1>
      <div className="mt-6 card p-0 overflow-auto">
        <table className="w-full text-sm min-w-[720px]">
          <thead className="bg-brand-cream/60 text-xs uppercase tracking-widest text-brand-ink/60">
            <tr>
              <th className="text-left p-4">Date</th><th className="text-left p-4">Time</th>
              <th className="text-left p-4">Client</th><th className="text-left p-4">Staff</th>
              <th className="text-left p-4">Treatment</th><th className="text-left p-4">Status</th>
              <th className="text-right p-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-black/5">
                <td className="p-4">{r.date}</td><td className="p-4">{r.time}</td>
                <td className="p-4 font-medium">{r.client}</td><td className="p-4 text-brand-ink/70">{r.staff}</td>
                <td className="p-4">{r.treatment}</td>
                <td className="p-4"><span className="rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs px-3 py-1">{r.status}</span></td>
                <td className="p-4 text-right font-serif text-brand-gold">£{r.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
