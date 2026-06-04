
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Video, MessageCircle, Send } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function HeroSection() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'salem-profile')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Refined Background Elements */}
      <div className="section-blur top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20" />
      <div className="section-blur bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="relative mb-10 group animate-float">
          {/* Circular Glow Effect */}
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl group-hover:bg-primary/50 transition-all duration-700 opacity-50" />
          
          {/* Circular Image Container */}
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/10 glass-card">
            <Image
              src={profileImg?.imageUrl || ""}
              alt="سالم العوبثاني"
              width={224}
              height={224}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              priority
              data-ai-hint="man portrait"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-3 tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent glow-blue">
          سالم العوبثاني
        </h1>
        
        <p className="text-base md:text-lg font-headline text-primary/90 font-medium mb-6">
          صانع محتوى رقمي • منشئ محتوى ريلز
        </p>
        
        <p className="max-w-lg text-sm md:text-base text-muted-foreground leading-relaxed mb-12 font-body opacity-80">
          "أشارك محتوى متنوعاً يلامس اهتمامات الجمهور العربي، مع التركيز على الجوانب الإبداعية والهادفة في عالم صناعة المحتوى."
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" className="glass-card hover:bg-primary/10 hover:border-primary/50 rounded-2xl h-11 px-6 text-sm font-semibold transition-all duration-300 border-white/5" asChild>
            <a href="https://www.instagram.com/s.insta_x" target="_blank" rel="noopener noreferrer">
              <Instagram className="ml-2 h-4 w-4" /> إنستغرام
            </a>
          </Button>
          <Button variant="outline" className="glass-card hover:bg-white/5 rounded-2xl h-11 px-6 text-sm font-semibold transition-all duration-300 border-white/5" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Video className="ml-2 h-4 w-4" /> تيك توك
            </a>
          </Button>
          <Button variant="outline" className="glass-card hover:bg-yellow-400/10 rounded-2xl h-11 px-6 text-sm font-semibold transition-all duration-300 border-white/5" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Send className="ml-2 h-4 w-4" /> سناب شات
            </a>
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/80 rounded-2xl h-11 px-7 text-sm font-bold shadow-xl shadow-primary/10 transition-all duration-300" asChild>
            <a href="https://wsend.co/967734252178" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="ml-2 h-4 w-4" /> تواصل واتساب
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
