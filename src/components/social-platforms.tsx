
"use client"

import { Instagram, Video, Youtube, Send, MessageCircle, Facebook } from "lucide-react"

const platforms = [
  { 
    name: "إنستغرام", 
    icon: Instagram, 
    link: "https://www.instagram.com/s.insta_x",
    highlight: false
  },
  { 
    name: "فيسبوك", 
    icon: Facebook, 
    link: "#",
    highlight: false
  },
  { 
    name: "سناب شات", 
    icon: Send, 
    link: "#",
    highlight: false
  },
  { 
    name: "يوتيوب", 
    icon: Youtube, 
    link: "#",
    highlight: true // هذا سيجعل الزر ملوناً كما في الصورة
  },
]

export function SocialPlatforms() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-gray-400">تابعني على</h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {platforms.map((platform, i) => (
            <a 
              key={i} 
              href={platform.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`
                group flex items-center justify-center gap-4 p-5 rounded-2xl transition-all duration-300 border
                ${platform.highlight 
                  ? "bg-primary border-primary text-primary-foreground shadow-[0_10px_30px_rgba(0,163,255,0.3)] scale-[1.02]" 
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-primary/50"
                }
              `}
            >
              <span className="text-lg font-headline font-bold">{platform.name}</span>
              <platform.icon className={`h-6 w-6 ${platform.highlight ? "text-primary-foreground" : "text-gray-400 group-hover:text-primary"}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
