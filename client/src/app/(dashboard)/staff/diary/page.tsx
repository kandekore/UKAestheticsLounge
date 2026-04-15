const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hours = Array.from({ length: 10 }, (_, i) => `${9 + i}:00`);

const bookings: Record<string, { time: string; client: string; label: string }[]> = {
  Mon: [{ time: "10:00", client: "Sophie L.", label: "HydraFacial" }],
  Tue: [{ time: "11:00", client: "Kerry P.", label: "Peel" }, { time: "15:00", client: "Ava B.", label: "HIFU" }],
  Thu: [{ time: "14:00", client: "Ellie W.", label: "HydraFacial" }],
  Fri: [{ time: "10:00", client: "Nadia S.", label: "Oxygen" }, { time: "12:30", client: "Priya K.", label: "Deep cleanse" }],
  Sat: [{ time: "11:00", client: "Amy T.", label: "Consultation" }],
};

export default function Diary() {
  return (
    <div>
      <h1 className="text-3xl">My diary</h1>
      <p className="mt-2 text-brand-ink/70 text-sm">Week view · 14 – 19 Apr 2026</p>

      <div className="mt-6 card p-0 overflow-auto">
        <div className="min-w-[780px] grid grid-cols-[80px_repeat(6,1fr)]">
          <div />
          {days.map((d) => <div key={d} className="text-center text-xs font-semibold uppercase tracking-widest p-3 border-b border-black/5">{d}</div>)}
          {hours.map((h) => (
            <>
              <div key={h} className="text-xs text-brand-ink/50 p-2 border-r border-black/5">{h}</div>
              {days.map((d) => {
                const b = bookings[d]?.find((x) => x.time === h);
                return (
                  <div key={d + h} className="border-t border-l border-black/5 p-1 h-16">
                    {b && (
                      <div className="rounded-md bg-brand-gold/10 text-brand-gold-dark text-[10px] p-1 h-full">
                        <div className="font-semibold">{b.client}</div>
                        <div className="text-brand-ink/60">{b.label}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
