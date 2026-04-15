"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const [number, setNumber] = useState<string>(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447000000000");

  useEffect(() => {
    fetch("/api/settings/public")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data?.whatsappNumber) setNumber(data.whatsappNumber); })
      .catch(() => {});
  }, []);

  const msg = encodeURIComponent("Hi, I'd like to ask about a treatment at U.K Aesthetics Lounge.");
  const href = `https://wa.me/${number}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-soft hover:scale-105 transition"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-medium hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
