"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-black/5">
      <div className="container-xl flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="U.K Aesthetics Lounge home">
          <Image
            src="/images/logo.png"
            alt="U.K Aesthetics Lounge"
            width={225}
            height={75}
            priority
            className="h-[60px] w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-ink/80 hover:text-brand-gold transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/login" className="inline-flex items-center gap-2 text-sm font-medium text-brand-ink/80 hover:text-brand-gold">
            <User className="h-4 w-4" /> Sign in
          </Link>
          <Link href="/booking" className="btn-primary">Book now</Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <div className="container-xl py-4 flex flex-col gap-3">
            {site.nav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                {l.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">Sign in</Link>
            <Link href="/booking" onClick={() => setOpen(false)} className="btn-primary w-full">Book now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
