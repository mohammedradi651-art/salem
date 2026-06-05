
"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppBar() {
  const whatsappNumber = "+967734252178"
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}`

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none animate-in fade-in zoom-in duration-700 delay-500 fill-mode-both">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-green-500 text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] pointer-events-auto hover:scale-110 transition-all active:scale-90 group"
        title="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="h-8 w-8 md:h-9 md:w-9" />
      </a>
    </div>
  )
}
