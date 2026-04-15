const today = [
  { time: "10:00", client: "Sophie L.", treatment: "HydraFacial", duration: 60, status: "Confirmed" },
  { time: "11:30", client: "Kerry P.", treatment: "Chemical Peel", duration: 30, status: "Deposit paid" },
  { time: "13:00", client: "Nadia S.", treatment: "Oxygen Facial", duration: 30, status: "Confirmed" },
  { time: "15:00", client: "Ellie W.", treatment: "Signature HydraFacial", duration: 60, status: "Pay on arrival" },
];

export default function StaffToday() {
  return (
    <div>
      <h1 className="text-3xl">Today's schedule</h1>
      <p className="mt-2 text-brand-ink/70 text-sm">Hi Jade — here are your appointments for today.</p>

      <div className="mt-8 grid md:grid-cols-4 gap-4">
        <Stat label="Bookings today" value="4" />
        <Stat label="Billable hours" value="3.0" />
        <Stat label="This week" value="22" />
        <Stat label="Revenue (wk)" value="£2,145" />
      </div>

      <div className="mt-8 card">
        <h2 className="font-serif text-xl mb-4">Schedule</h2>
        <div className="space-y-3">
          {today.map((a, i) => (
            <div key={i} className="flex items-center justify-between border-b border-black/5 pb-3 last:border-none last:pb-0">
              <div className="flex items-center gap-4">
                <div className="text-lg font-serif text-brand-gold w-16">{a.time}</div>
                <div>
                  <div className="font-semibold">{a.client}</div>
                  <div className="text-xs text-brand-ink/60">{a.treatment} · {a.duration} min</div>
                </div>
              </div>
              <span className="rounded-full bg-brand-cream text-xs px-3 py-1">{a.status}</span>
            </div>
          ))}
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
