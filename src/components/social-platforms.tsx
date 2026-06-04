
"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Video, Youtube, Send, MessageCircle, ArrowLeft } from "lucide-react"

const platforms = [
  { name: "إنستغرام", icon: Instagram, color: "hover:text-[#E4405F]", link: "https://www.instagram.com/s.insta_x" },
  { name: "تيك توك", icon: Video, color: "hover:text-white", link: "#" },
  { name: "سناب شات", icon: Send, color: "hover:text-[#FFFC00]", link: "#" },
  { name: "يوتيوب", icon: Youtube, color: "hover:text-[#FF0000]", link: "#" },
  { name: "واتساب", icon: MessageCircle, color: "hover:text-[#25D366]", link: "https://wsend.co/967734252178" },
]

export function SocialPlatforms() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-12 text-center">تواصل معي عبر</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {platforms.map((platform, i) => (
            <Card key={i} className="glass-card p-6 flex flex-col items-center justify-between border-white/5 transition-all duration-300 hover:-translate-y-2 group">
              <div className={`w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${platform.color}`}>
                <platform.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-bold mb-6">{platform.name}</h3>
              <Button variant="ghost" className="w-full text-primary hover:bg-primary hover:text-white rounded-xl font-bold" asChild>
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  زيارة الحساب <ArrowLeft className="mr-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
