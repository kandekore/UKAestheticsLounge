import staff from "@/data/staff.json";

export default function AdminStaff() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Staff</h1>
        <button className="btn-primary">+ Add staff</button>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {(staff as any[]).map((s) => (
          <div key={s.id} className="card">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-brand-gold/15 flex items-center justify-center font-semibold text-brand-gold-dark">
                {s.name.split(" ").map((n: string) => n[0]).join("")}
              </div>
              <div className="flex-1">
                <div className="font-semibold">{s.name}</div>
                <div className="text-xs text-brand-ink/60">{s.role}</div>
              </div>
              <button className="text-xs text-brand-gold hover:underline">Edit</button>
            </div>
            <p className="mt-3 text-sm text-brand-ink/70">{s.bio}</p>
            <div className="mt-3 flex flex-wrap gap-1 text-[10px]">
              {s.specialties.map((sp: string) => <span key={sp} className="rounded-full bg-brand-cream px-2 py-1">{sp}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
