import Link from "next/link";
import { GraduationCap, CheckCircle2 } from "lucide-react";

const courses = [
  { title: "Foundation Dermal Filler", duration: "1 day", price: 795, outcome: "Accredited Level 5 certificate" },
  { title: "Advanced Anti-Wrinkle", duration: "1 day", price: 895, outcome: "Includes live model sessions" },
  { title: "HydraFacial Certification", duration: "2 days", price: 1200, outcome: "Full kit bundle available" },
  { title: "Laser Hair Removal", duration: "2 days", price: 950, outcome: "Core of knowledge + practical" },
];

export default function TrainingPage() {
  return (
    <>
      <section className="bg-brand-cream">
        <div className="container-xl py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Training Academy</span>
            <h1 className="mt-3 text-4xl sm:text-5xl">Become a certified aesthetic practitioner</h1>
            <p className="mt-6 text-lg text-brand-ink/70">
              Hands-on, accredited courses taught by practising clinicians. Small class sizes,
              real models, and lifetime mentor support.
            </p>
            <Link href="/contact" className="btn-primary mt-8">Enquire about enrolment</Link>
          </div>
          <div className="card">
            <GraduationCap className="h-10 w-10 text-brand-gold" />
            <h3 className="mt-4 text-xl">Why train with us?</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {["Accredited certificates", "Real client models", "Lifetime mentor support", "Discounted equipment packages"].map((i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-gold" />{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <h2 className="text-3xl mb-8">Upcoming courses</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((c) => (
              <div key={c.title} className="card">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-xs text-brand-ink/60">{c.duration}</p>
                <p className="mt-4 text-2xl font-serif text-brand-gold">£{c.price}</p>
                <p className="mt-2 text-xs text-brand-ink/70">{c.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
