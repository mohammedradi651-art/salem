
"use client"

import { Instagram, Youtube, Send, Facebook } from "lucide-react"

const platforms = [
  { 
    name: "إنستغرام", 
    icon: Instagram, 
    link: "https://www.instagram.com/s.insta_x",
  },
  { 
    name: "فيسبوك", 
    icon: Facebook, 
    link: "#",
  },
  { 
    name: "سناب شات", 
    icon: Send, 
    link: "#",
  },
  { 
    name: "يوتيوب", 
    icon: Youtube, 
    link: "#",
  },
]

export function SocialPlatforms() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-lg md:text-xl font-headline font-bold text-gray-400 border-b border-white/10 pb-2">تابعني على</h2>
        </div>
        
        <div className="flex flex-col gap-3">
          {platforms.map((platform, i) => (
            <a 
              key={i} 
              href={platform.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="
                group flex items-center justify-center gap-3 p-3.5 rounded-xl transition-all duration-300 border
                bg-white/5 border-white/10 text-white 
                hover:bg-primary/10 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(0,163,255,0.15)]
                active:scale-95 transform-gpu
              "
            >
              <span className="text-sm md:text-base font-headline font-bold">{platform.name}</span>
              <platform.icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
