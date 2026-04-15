import Image from "next/image";
import { ShieldCheck, Heart, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-cream">
        <div className="container-xl py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">About us</span>
            <h1 className="mt-3 text-4xl sm:text-5xl">A lounge built around your skin goals.</h1>
            <p className="mt-6 text-lg text-brand-ink/70">
              U.K Aesthetics Lounge was founded on the belief that premium, clinic-grade treatments
              should be accessible without compromise. Our Birmingham studio combines the latest
              CE-marked equipment with medically trained practitioners to deliver results you'll love.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft">
            <Image src="/images/hero-2.jpg" alt="Our clinic" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Certified practitioners", copy: "Fully qualified injectors, nurses and skin therapists.", accent: "gold" },
            { icon: Heart, title: "Patient-first care", copy: "Honest consultations — no pressure, ever.", accent: "teal" },
            { icon: Sparkles, title: "Latest technology", copy: "HydraFacial, HIFU, CO2 laser, RF microneedling and more.", accent: "gold" },
            { icon: Users, title: "Loyal community", copy: "Thousands of happy clients across the Midlands.", accent: "teal" },
          ].map((f) => (
            <div key={f.title} className="card">
              <f.icon className={`h-8 w-8 ${f.accent === "teal" ? "text-brand-teal" : "text-brand-gold"}`} />
              <h3 className="mt-4 text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-brand-ink/70">{f.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
