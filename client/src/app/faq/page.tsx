const faqs = [
  { q: "Do I need a consultation before treatment?", a: "For injectables, laser and HIFU treatments, yes — a short consultation ensures the treatment is right for you. Many facials and peels can be booked directly." },
  { q: "Can I pay on arrival?", a: "Some treatments allow pay-on-arrival; others require a deposit or full payment to secure the slot. Each treatment shows its payment rule clearly during booking." },
  { q: "How do I cancel or reschedule?", a: "Log into your account and go to 'My bookings'. You can cancel or reschedule up to 24 hours before your appointment." },
  { q: "Is laser hair removal suitable for all skin types?", a: "Our diode laser is suitable for all skin types including darker skin tones. A short patch test is performed before your first session." },
  { q: "What should I do before a HydraFacial?", a: "Avoid retinol and exfoliants for 48 hours before. Come makeup-free if possible." },
  { q: "Do you offer training courses?", a: "Yes — visit our Training Academy page for course details and enrolment." },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-brand-cream">
        <div className="container-xl py-20">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Help centre</span>
          <h1 className="mt-3 text-4xl sm:text-5xl">Frequently asked questions</h1>
        </div>
      </section>
      <section className="section">
        <div className="container-xl max-w-3xl">
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card group">
                <summary className="cursor-pointer list-none flex justify-between items-start font-serif text-lg">
                  {f.q}
                  <span className="ml-4 text-brand-gold group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-sm text-brand-ink/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
