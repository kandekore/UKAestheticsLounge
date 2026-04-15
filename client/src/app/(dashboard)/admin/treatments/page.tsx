import { categories, formatPrice, paymentModeLabel } from "@/lib/treatments";

export default function AdminTreatments() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Treatments</h1>
        <button className="btn-primary">+ Add treatment</button>
      </div>
      <div className="mt-6 space-y-8">
        {categories.map((cat) => (
          <div key={cat.slug} className="card p-0 overflow-hidden">
            <div className="bg-brand-cream/60 px-4 py-3 font-serif text-lg">{cat.name}</div>
            <table className="w-full text-sm">
              <thead className="text-xs uppercase tracking-widest text-brand-ink/60">
                <tr>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Duration</th>
                  <th className="text-left p-3">Payment</th>
                  <th className="text-right p-3">Price</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {cat.treatments.map((t) => (
                  <tr key={t.id} className="border-t border-black/5">
                    <td className="p-3 font-medium">{t.name}</td>
                    <td className="p-3 text-brand-ink/70">{t.durationMin} min</td>
                    <td className="p-3 text-brand-ink/70">{paymentModeLabel[t.paymentMode]}{t.depositAmount ? ` (£${t.depositAmount})` : ""}</td>
                    <td className="p-3 text-right font-serif text-brand-gold">{formatPrice(t.price)}</td>
                    <td className="p-3 text-right"><button className="text-xs text-brand-gold hover:underline">Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
