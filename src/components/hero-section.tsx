
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Video, Youtube, MessageCircle, Send } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function HeroSection() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'salem-profile')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="relative mb-8 group animate-float">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/40 transition-all duration-500" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-white/10 glass-card">
            <Image
              src={profileImg?.imageUrl || ""}
              alt="سالم العوبثاني"
              width={256}
              height={256}
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              priority
              data-ai-hint="man portrait"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-headline font-extrabold mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent glow-blue">
          سالم العوبثاني
        </h1>
        
        <p className="text-xl md:text-2xl font-headline text-primary font-semibold mb-6 tracking-wide">
          صانع محتوى رقمي ومنشئ محتوى ريلز
        </p>
        
        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed mb-10 font-body">
          "أشارك محتوى متنوعاً يلامس اهتمامات الجمهور العربي، مع التركيز على المحتوى الإبداعي والهادف."
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="glass-card hover:bg-primary hover:text-white border-white/10 rounded-2xl h-14 px-8 text-lg font-bold transition-all duration-300" asChild>
            <a href="https://www.instagram.com/s.insta_x" target="_blank" rel="noopener noreferrer">
              <Instagram className="ml-2 h-5 w-5" /> إنستغرام
            </a>
          </Button>
          <Button variant="outline" className="glass-card hover:bg-white hover:text-black border-white/10 rounded-2xl h-14 px-8 text-lg font-bold transition-all duration-300" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Video className="ml-2 h-5 w-5" /> تيك توك
            </a>
          </Button>
          <Button variant="outline" className="glass-card hover:bg-[#FFFC00] hover:text-black border-white/10 rounded-2xl h-14 px-8 text-lg font-bold transition-all duration-300" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Send className="ml-2 h-5 w-5" /> سناب شات
            </a>
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/80 rounded-2xl h-14 px-8 text-lg font-bold shadow-lg shadow-primary/20 transition-all duration-300" asChild>
            <a href="https://wsend.co/967734252178" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="ml-2 h-5 w-5" /> واتساب للتواصل
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
