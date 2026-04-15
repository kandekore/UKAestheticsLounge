import Link from "next/link";
import Image from "next/image";
import { Sparkles, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { categories } from "@/lib/treatments";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-cream">
        <div className="container-xl grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
              <Sparkles className="h-4 w-4" /> Birmingham · Non-Surgical
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
              Skin that glows.<br />
              <span className="text-brand-gold">Confidence that lasts.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-ink/70">
              From HydraFacials and HIFU to injectables and laser hair removal — clinic-grade
              treatments delivered by certified practitioners you can trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/booking" className="btn-primary">Book an appointment <ArrowRight className="ml-2 h-4 w-4" /></Link>
              <Link href="/services" className="btn-outline">Browse treatments</Link>
            </div>
            <div className="mt-10 flex gap-8 text-sm text-brand-ink/70">
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-brand-gold" /> Certified practitioners</div>
              <div className="flex items-center gap-2"><Award className="h-5 w-5 text-brand-teal" /> CE-marked equipment</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-soft">
              <Image src="/images/hero-1.jpg" alt="Aesthetic treatment" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 aspect-square rounded-2xl overflow-hidden ring-8 ring-brand-cream hidden sm:block">
              <Image src="/images/treatment-hydrafacial.jpg" alt="HydraFacial" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured categories */}
      <section className="section">
        <div className="container-xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Our Menu</span>
              <h2 className="mt-2 text-3xl sm:text-4xl">Featured treatment categories</h2>
            </div>
            <Link href="/services" className="text-sm font-medium text-brand-gold hover:underline hidden sm:inline">
              View all services →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.slice(1, 7).map((cat) => (
              <Link key={cat.slug} href={`/services#${cat.slug}`} className="card group hover:-translate-y-1 transition">
                <h3 className="text-xl">{cat.name}</h3>
                <p className="mt-2 text-sm text-brand-ink/70">{cat.blurb}</p>
                <p className="mt-4 text-sm text-brand-gold font-medium group-hover:underline">
                  {cat.treatments.length} treatments from £{Math.min(...cat.treatments.map(t => t.price))}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-brand-ink text-white">
        <div className="container-xl py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl text-white">Ready to start your journey?</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              Book your consultation in minutes. Choose your treatment, pick a practitioner,
              and secure your slot online.
            </p>
          </div>
          <div className="flex lg:justify-end gap-3">
            <Link href="/booking" className="btn-primary">Book now</Link>
            <Link href="/contact" className="btn-outline border-white/40 text-white hover:bg-white hover:text-brand-ink">Talk to us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
