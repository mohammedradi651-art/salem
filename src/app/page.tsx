"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SocialPlatforms } from "@/components/social-platforms"
import { AdsSection } from "@/components/ads-section"
import { WhatsAppBar } from "@/components/whatsapp-bar"
import Image from "next/image"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // محاكاة تحميل الموقع لثوانٍ بسيطة (2.5 ثانية)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div 
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{ 
          background: 'radial-gradient(circle at top right, #0c1e3a 0%, #020617 100%)',
          backgroundColor: '#020617' 
        }}
      >
        <div className="relative mb-6">
          <div className="absolute inset-[-15%] bg-primary/20 rounded-full blur-[40px]" />
          
          <div className="relative w-32 h-32 rounded-full overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,163,255,0.2)]">
            <Image
              src="https://i.postimg.cc/c4fHsTnm/Screenshot-20260604-221055-Instagram.jpg"
              alt="سالم العوبثاني"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="text-center mb-10 flex flex-col gap-1 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">سالم العوبثاني</h2>
          <p className="text-xs md:text-sm font-body text-primary/80 font-medium">صانع محتوى</p>
        </div>
        
        <div className="flex items-center justify-center h-4">
          <div className="dot-typing" />
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pb-20 animate-in fade-in duration-1000">
      <HeroSection />
      <AboutSection />
      <AdsSection />
      <SocialPlatforms />
      
      <footer className="py-12 px-6 border-t border-white/5 bg-transparent text-center flex flex-col gap-2">
        <a 
          href="https://wa.me/967770326828" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground font-body text-sm hover:text-primary transition-colors"
        >
          للحصول على موقعك الخاص انقر هنا
        </a>
        <p className="text-primary/60 font-body text-xs font-bold tracking-wide">
          أحد أعمال منصة ستار ميديا
        </p>
      </footer>

      <WhatsAppBar />
    </main>
  )
}
