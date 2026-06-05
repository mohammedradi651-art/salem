
"use client"

import { Instagram, Youtube, Tv } from "lucide-react"

// أيقونة سناب شات مخصصة تشبه التصميم المطلوب
const SnapchatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3c-3.5 0-6.5 2.5-6.5 6s1 4.5 3 6c-1 1-3 1.5-3 3s2.5 3 5.5 3c.5 0 1 0 1.5-.5.5.5 1 .5 1.5.5 3 0 5.5-1.5 5.5-3s-2-2-3-3c2-1.5 3-2.5 3-6s-3-6-6.5-6z" />
  </svg>
)

const platforms = [
  { 
    name: "إنستغرام", 
    icon: Instagram, 
    link: "https://www.instagram.com/s.insta_x",
  },
  { 
    name: "سناب شات", 
    icon: SnapchatIcon, 
    link: "https://www.snapchat.com/add/s_snapx",
  },
  { 
    name: "يوتيوب", 
    icon: Youtube, 
    link: "https://youtube.com/@salim_alobathani?si=TmdaBxf76Eo6pvA3",
  },
  { 
    name: "شاهد قناة روتانا", 
    icon: Tv, 
    link: "http://gh55.live4k.se:2095/get.php?username=06kze33l&password=5f8xd22k&type=m3u&output=m3u8",
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
