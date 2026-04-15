"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, Clock, CreditCard } from "lucide-react";
import { categories, allTreatments, formatPrice, paymentModeLabel, type Treatment } from "@/lib/treatments";
import staffData from "@/data/staff.json";

type Staff = { id: string; name: string; role: string; bio: string; specialties: string[] };

const STEPS = ["Treatments", "Practitioner", "Date & time", "Your details", "Payment", "Confirm"] as const;

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<Treatment[]>([]);
  const [staff, setStaff] = useState<Staff | null>(null);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "", notes: "" });
  const [payChoice, setPayChoice] = useState<"full" | "deposit" | "on_arrival" | null>(null);

  const totalPrice = selected.reduce((s, t) => s + t.price, 0);
  const totalDuration = selected.reduce((s, t) => s + t.durationMin, 0);
  const totalDeposit = selected.reduce((s, t) => s + (t.paymentMode === "deposit" ? (t.depositAmount ?? 0) : 0), 0);

  const hasPayFull = selected.some((t) => t.paymentMode === "pay_full");
  const hasDeposit = selected.some((t) => t.paymentMode === "deposit");
  const allPayOnArrival = selected.length > 0 && selected.every((t) => t.paymentMode === "pay_on_arrival");

  const toggle = (t: Treatment) =>
    setSelected((s) => (s.find((x) => x.id === t.id) ? s.filter((x) => x.id !== t.id) : [...s, t]));

  const staffList = staffData as Staff[];

  const canAdvance = useMemo(() => {
    if (step === 0) return selected.length > 0;
    if (step === 1) return !!staff;
    if (step === 2) return !!date && !!time;
    if (step === 3) return details.name && details.email && details.phone;
    if (step === 4) return !!payChoice;
    return true;
  }, [step, selected, staff, date, time, details, payChoice]);

  return (
    <section className="section bg-brand-cream/40">
      <div className="container-xl max-w-5xl">
        <h1 className="text-4xl">Book your appointment</h1>
        <p className="mt-2 text-brand-ink/70">Select one or more treatments — they'll be scheduled back-to-back with your chosen practitioner.</p>

        {/* Stepper */}
        <ol className="mt-8 flex flex-wrap gap-2 text-xs font-medium">
          {STEPS.map((s, i) => (
            <li
              key={s}
              className={`flex items-center gap-2 px-3 py-2 rounded-full ${
                i === step ? "bg-brand-gold text-white" : i < step ? "bg-brand-gold/15 text-brand-gold-dark" : "bg-white ring-1 ring-black/5"
              }`}
            >
              {i < step ? <Check className="h-3 w-3" /> : <span>{i + 1}</span>} {s}
            </li>
          ))}
        </ol>

        <div className="mt-8 grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          <div className="card">
            {step === 0 && (
              <div>
                <h2 className="text-2xl mb-4">Choose your treatments</h2>
                <div className="space-y-8">
                  {categories.map((cat) => (
                    <div key={cat.slug}>
                      <h3 className="font-serif text-lg text-brand-gold-dark">{cat.name}</h3>
                      <div className="mt-3 grid sm:grid-cols-2 gap-3">
                        {cat.treatments.map((t) => {
                          const active = !!selected.find((x) => x.id === t.id);
                          return (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => toggle(t)}
                              className={`text-left rounded-xl border p-4 transition ${
                                active ? "border-brand-gold bg-brand-gold/5" : "border-black/10 hover:border-brand-gold/50"
                              }`}
                            >
                              <div className="flex justify-between gap-3">
                                <div>
                                  <div className="font-semibold text-sm">{t.name}</div>
                                  <div className="mt-1 text-xs text-brand-ink/60">{t.durationMin} min · {paymentModeLabel[t.paymentMode]}</div>
                                </div>
                                <div className="text-sm font-serif text-brand-gold">{formatPrice(t.price)}</div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="text-2xl mb-4">Choose your practitioner</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {staffList.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setStaff(s)}
                      className={`text-left rounded-xl border p-4 transition ${
                        staff?.id === s.id ? "border-brand-gold bg-brand-gold/5" : "border-black/10 hover:border-brand-gold/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-brand-teal/15 ring-2 ring-brand-teal/30 flex items-center justify-center text-brand-teal-dark font-semibold">
                          {s.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-semibold">{s.name}</div>
                          <div className="text-xs text-brand-ink/60">{s.role}</div>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-brand-ink/70">{s.bio}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl mb-4">Pick a date & time</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="min-w-0">
                    <label className="label">Date</label>
                    <input type="date" className="input" value={date} onChange={(e) => setDate(e.target.value)} />
                  </div>
                  <div>
                    <label className="label">Time</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["10:00", "11:00", "12:30", "14:00", "15:30", "17:00"].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTime(t)}
                          className={`rounded-lg py-2 text-sm ${time === t ? "bg-brand-gold text-white" : "ring-1 ring-black/10 hover:ring-brand-gold"}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-brand-ink/60">
                  Times are placeholder — real availability will come from {staff?.name ?? "your practitioner"}'s diary.
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl mb-4">Your details</h2>
                <div><label className="label">Full name</label><input className="input" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} /></div>
                <div><label className="label">Email</label><input type="email" className="input" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} /></div>
                <div><label className="label">Phone</label><input className="input" value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} /></div>
                <div><label className="label">Notes (optional)</label><textarea rows={3} className="input" value={details.notes} onChange={(e) => setDetails({ ...details, notes: e.target.value })} /></div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-2xl mb-4">Payment</h2>
                <p className="text-sm text-brand-ink/70 mb-4">Based on the treatments you selected, these payment options are available:</p>
                <div className="space-y-3">
                  {hasPayFull && (
                    <PaymentCard
                      selected={payChoice === "full"}
                      onClick={() => setPayChoice("full")}
                      title="Pay in full now"
                      copy={`Total ${formatPrice(totalPrice)} — secured via Stripe (placeholder).`}
                    />
                  )}
                  {hasDeposit && (
                    <PaymentCard
                      selected={payChoice === "deposit"}
                      onClick={() => setPayChoice("deposit")}
                      title={`Pay ${formatPrice(totalDeposit)} deposit now`}
                      copy={`Remainder ${formatPrice(totalPrice - totalDeposit)} paid in salon.`}
                    />
                  )}
                  {allPayOnArrival && (
                    <PaymentCard
                      selected={payChoice === "on_arrival"}
                      onClick={() => setPayChoice("on_arrival")}
                      title="Pay on arrival"
                      copy="No payment needed now — settle up at your appointment."
                    />
                  )}
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="text-2xl mb-4">Confirm your booking</h2>
                <div className="space-y-3 text-sm">
                  <Row k="Treatments" v={selected.map((t) => t.name).join(", ")} />
                  <Row k="Practitioner" v={staff?.name ?? ""} />
                  <Row k="When" v={`${date} at ${time}`} />
                  <Row k="Duration" v={`${totalDuration} minutes`} />
                  <Row k="Total" v={formatPrice(totalPrice)} />
                  <Row k="Payment" v={payChoice === "full" ? "Pay in full now" : payChoice === "deposit" ? `Deposit ${formatPrice(totalDeposit)}` : "Pay on arrival"} />
                  <Row k="Name" v={details.name} />
                  <Row k="Email" v={details.email} />
                </div>
                <button type="button" className="btn-primary mt-6 w-full">Confirm booking</button>
                <p className="mt-3 text-xs text-center text-brand-ink/60">By confirming you agree to our cancellation policy.</p>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="text-sm font-medium text-brand-ink/60 disabled:opacity-30"
              >
                ← Back
              </button>
              {step < STEPS.length - 1 && (
                <button
                  type="button"
                  disabled={!canAdvance}
                  onClick={() => setStep((s) => s + 1)}
                  className="btn-primary disabled:opacity-50"
                >
                  Continue <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <aside className="card sticky top-24">
            <h3 className="font-serif text-lg">Your basket</h3>
            {selected.length === 0 ? (
              <p className="mt-3 text-sm text-brand-ink/60">No treatments selected yet.</p>
            ) : (
              <ul className="mt-3 space-y-2 text-sm">
                {selected.map((t) => (
                  <li key={t.id} className="flex justify-between">
                    <span className="pr-2">{t.name}</span>
                    <span className="text-brand-gold">{formatPrice(t.price)}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 border-t border-black/5 pt-4 space-y-1 text-sm">
              <div className="flex justify-between"><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> Duration</span><span>{totalDuration} min</span></div>
              <div className="flex justify-between"><span className="flex items-center gap-1"><CreditCard className="h-4 w-4" /> Total</span><span className="font-semibold">{formatPrice(totalPrice)}</span></div>
              {totalDeposit > 0 && <div className="flex justify-between text-xs text-brand-ink/60"><span>Deposit due</span><span>{formatPrice(totalDeposit)}</span></div>}
            </div>
            <Link href="/services" className="mt-4 block text-center text-xs text-brand-ink/60 hover:text-brand-gold">Browse full menu →</Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-black/5 py-2">
      <span className="text-brand-ink/60">{k}</span>
      <span className="font-medium text-right">{v}</span>
    </div>
  );
}

function PaymentCard({ selected, onClick, title, copy }: { selected: boolean; onClick: () => void; title: string; copy: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-xl border p-4 transition ${
        selected ? "border-brand-gold bg-brand-gold/5" : "border-black/10 hover:border-brand-gold/50"
      }`}
    >
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-xs text-brand-ink/60">{copy}</div>
    </button>
  );
}
