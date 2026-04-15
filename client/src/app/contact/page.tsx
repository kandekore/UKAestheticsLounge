import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-cream">
        <div className="container-xl py-20">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Get in touch</span>
          <h1 className="mt-3 text-4xl sm:text-5xl">Visit us or say hello</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-xl grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Address", value: site.address },
              { icon: Phone, label: "Phone", value: site.phone },
              { icon: Mail, label: "Email", value: site.email },
            ].map((i) => (
              <div key={i.label} className="card flex items-start gap-4">
                <i.icon className="h-6 w-6 text-brand-gold shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-ink/50">{i.label}</div>
                  <div className="mt-1 font-medium">{i.value}</div>
                </div>
              </div>
            ))}
            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-6 w-6 text-brand-gold" />
                <h3 className="font-serif text-xl">Opening hours</h3>
              </div>
              <ul className="space-y-2 text-sm">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span>{h.day}</span><span className="text-brand-ink/60">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form className="card space-y-4">
            <h3 className="font-serif text-2xl">Send us a message</h3>
            <div>
              <label className="label">Name</label>
              <input className="input" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="label">Message</label>
              <textarea rows={5} className="input" placeholder="How can we help?" />
            </div>
            <button type="button" className="btn-primary w-full">Send message</button>
          </form>
        </div>
      </section>
    </>
  );
}
