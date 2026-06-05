"use client"

import { MessageCircle, ExternalLink } from "lucide-react"

export function WhatsAppBar() {
  const whatsappNumber = "+967734252178"
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none animate-in fade-in slide-in-from-bottom-full duration-1000 delay-700 fill-mode-both">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-md mx-auto flex items-center justify-between gap-4 p-4 rounded-2xl glass-card border-primary/20 pointer-events-auto hover:scale-[1.02] transition-transform shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-primary/10 group"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg animate-pulse">
            <MessageCircle className="h-6 w-6" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] md:text-xs text-primary font-headline font-bold">تواصل مباشرة</span>
            <span className="text-xs md:text-sm font-body font-bold text-white">اضغط هنا للانتقال إلى واتساب</span>
          </div>
        </div>
        <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
          <ExternalLink className="h-4 w-4 text-primary" />
        </div>
      </a>
    </div>
  )
}
