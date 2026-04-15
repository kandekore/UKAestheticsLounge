import Link from "next/link";
import { categories, formatPrice, paymentModeLabel } from "@/lib/treatments";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-cream">
        <div className="container-xl py-20">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Our menu</span>
          <h1 className="mt-3 text-4xl sm:text-5xl">Treatments & pricing</h1>
          <p className="mt-4 max-w-2xl text-brand-ink/70">
            Full transparency on every treatment. Book online in minutes — deposits and payment rules
            are clearly shown against each service.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-xl space-y-16">
          {categories.map((cat) => (
            <div key={cat.slug} id={cat.slug} className="scroll-mt-24">
              <div className="flex items-end justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-3xl">{cat.name}</h2>
                  <p className="mt-2 text-brand-ink/70 max-w-2xl">{cat.blurb}</p>
                </div>
                <Link href={`/booking?category=${cat.slug}`} className="btn-outline hidden sm:inline-flex">Book in this category</Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {cat.treatments.map((t) => (
                  <div key={t.id} className="card flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{t.name}</h3>
                      {t.description && <p className="mt-1 text-sm text-brand-ink/70">{t.description}</p>}
                      <div className="mt-3 flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full bg-brand-cream px-3 py-1">{t.durationMin} min</span>
                        <span className="rounded-full bg-brand-beige/40 px-3 py-1">{paymentModeLabel[t.paymentMode]}</span>
                        {t.depositAmount && <span className="rounded-full bg-brand-gold/15 px-3 py-1 text-brand-gold-dark">£{t.depositAmount} deposit</span>}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-serif text-brand-gold">{formatPrice(t.price)}</div>
                      <Link href={`/booking?treatment=${t.id}`} className="mt-2 inline-block text-sm font-medium text-brand-ink/80 hover:text-brand-gold">Book →</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
