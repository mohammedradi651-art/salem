
"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Video, Youtube, Send, MessageCircle, ArrowLeft } from "lucide-react"

const platforms = [
  { name: "إنستغرام", icon: Instagram, color: "group-hover:text-[#E4405F]", link: "https://www.instagram.com/s.insta_x" },
  { name: "تيك توك", icon: Video, color: "group-hover:text-white", link: "#" },
  { name: "سناب شات", icon: Send, color: "group-hover:text-[#FFFC00]", link: "#" },
  { name: "يوتيوب", icon: Youtube, color: "group-hover:text-[#FF0000]", link: "#" },
  { name: "واتساب", icon: MessageCircle, color: "group-hover:text-[#25D366]", link: "https://wsend.co/967734252178" },
]

export function SocialPlatforms() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-headline font-bold mb-12 text-center">تواصل معي</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {platforms.map((platform, i) => (
            <Card key={i} className="glass-card p-6 flex flex-col items-center justify-between border-white/5 transition-all duration-500 hover:-translate-y-2 group">
              <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${platform.color} group-hover:bg-white/10`}>
                <platform.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-headline font-bold mb-6">{platform.name}</h3>
              <Button variant="ghost" className="w-full text-xs font-bold text-primary hover:bg-primary hover:text-white rounded-xl" asChild>
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  زيارة <ArrowLeft className="mr-2 h-3 w-3" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
