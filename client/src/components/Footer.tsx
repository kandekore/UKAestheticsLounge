import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white/80">
      <div className="container-xl py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt="U.K Aesthetics Lounge"
            width={225}
            height={75}
            className="h-[60px] w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed">
            Premium non-surgical skin and body treatments in Birmingham, delivered by certified practitioners with clinic-grade equipment.
          </p>
          <div className="mt-4 flex gap-3">
            <a href={site.social.instagram} className="p-2 rounded-full ring-1 ring-white/15 hover:bg-brand-gold hover:text-white transition"><Instagram className="h-4 w-4" /></a>
            <a href={site.social.facebook} className="p-2 rounded-full ring-1 ring-white/15 hover:bg-brand-teal hover:text-white transition"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brand-gold">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Hours</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span><span className="text-white/60">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-brand-gold" />{site.address}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-brand-gold" />{site.phone}</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-brand-gold" />{site.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} U.K Aesthetics Lounge. All rights reserved.
      </div>
    </footer>
  );
}
