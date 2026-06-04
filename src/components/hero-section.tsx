"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Video, MessageCircle, Send } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function HeroSection() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'salem-profile')

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* عناصر خلفية مضيئة محسنة */}
      <div className="section-blur top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20" />
      <div className="section-blur bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="relative mb-8 group animate-float">
          {/* تأثير الوهج الدائري */}
          <div className="absolute inset-[-10%] bg-primary/20 rounded-full blur-[40px] group-hover:bg-primary/40 transition-all duration-700 opacity-60" />
          
          {/* حاوية الصورة الدائرية */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/10 glass-card">
            <Image
              src={profileImg?.imageUrl || ""}
              alt="سالم العوبثاني"
              width={192}
              height={192}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              priority
              data-ai-hint="man portrait"
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-headline font-extrabold mb-2 tracking-tight text-white glow-blue">
          سالم العوبثاني
        </h1>
        
        <p className="text-sm md:text-base font-headline text-primary/80 font-medium mb-5">
          صانع محتوى رقمي • منشئ محتوى ريلز
        </p>
        
        <p className="max-w-md text-xs md:text-sm text-gray-400 leading-relaxed mb-10 font-body opacity-90">
          "أشارك محتوى متنوعاً يلامس اهتمامات الجمهور العربي، مع التركيز على الجوانب الإبداعية والهادفة في عالم صناعة المحتوى."
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" className="glass-card hover:bg-white/5 rounded-2xl h-10 px-5 text-xs font-semibold transition-all duration-300 border-white/5" asChild>
            <a href="https://www.instagram.com/s.insta_x" target="_blank" rel="noopener noreferrer">
              <Instagram className="ml-2 h-3.5 w-3.5" /> إنستغرام
            </a>
          </Button>
          <Button variant="outline" className="glass-card hover:bg-white/5 rounded-2xl h-10 px-5 text-xs font-semibold transition-all duration-300 border-white/5" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Video className="ml-2 h-3.5 w-3.5" /> تيك توك
            </a>
          </Button>
          <Button variant="outline" className="glass-card hover:bg-white/5 rounded-2xl h-10 px-5 text-xs font-semibold transition-all duration-300 border-white/5" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Send className="ml-2 h-3.5 w-3.5" /> سناب شات
            </a>
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/80 rounded-2xl h-10 px-6 text-xs font-bold shadow-lg shadow-primary/10 transition-all duration-300" asChild>
            <a href="https://wsend.co/967734252178" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="ml-2 h-3.5 w-3.5" /> تواصل واتساب
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
