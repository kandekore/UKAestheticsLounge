const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function Availability() {
  return (
    <div>
      <h1 className="text-3xl">My availability</h1>
      <p className="mt-2 text-brand-ink/70 text-sm">Set your recurring working hours and any one-off time off.</p>

      <div className="mt-8 card">
        <h2 className="font-serif text-xl mb-4">Weekly hours</h2>
        <div className="space-y-3">
          {days.map((d) => (
            <div key={d} className="flex items-center gap-4">
              <label className="w-28 text-sm font-medium">{d}</label>
              <input type="time" defaultValue="10:00" className="input w-32" />
              <span className="text-brand-ink/40">–</span>
              <input type="time" defaultValue="19:00" className="input w-32" />
              <label className="ml-4 flex items-center gap-2 text-xs text-brand-ink/60">
                <input type="checkbox" /> Off
              </label>
            </div>
          ))}
        </div>
        <button className="btn-primary mt-6">Save hours</button>
      </div>

      <div className="mt-6 card">
        <h2 className="font-serif text-xl mb-4">Block out a day</h2>
        <div className="flex gap-3 items-end">
          <div className="flex-1"><label className="label">Date</label><input type="date" className="input" /></div>
          <div className="flex-1"><label className="label">Reason (optional)</label><input className="input" placeholder="Holiday" /></div>
          <button className="btn-outline">Add blackout</button>
        </div>
      </div>
    </div>
  );
}
