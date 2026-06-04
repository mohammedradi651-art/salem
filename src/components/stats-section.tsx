
"use client"

import { Card } from "@/components/ui/card"
import { Users, FileText, Eye, Megaphone } from "lucide-react"

const stats = [
  { label: "متابع", value: "+500K", icon: Users },
  { label: "منشور", value: "1,200", icon: FileText },
  { label: "مشاهدة", value: "+10M", icon: Eye },
  { label: "حملة إعلانية", value: "150", icon: Megaphone },
]

export function StatsSection() {
  return (
    <section className="py-16 px-6 bg-[#06080b]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="glass-card p-6 flex flex-col items-center justify-center border-white/5 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-3 text-primary/80">
                <stat.icon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-0.5">{stat.value}</h3>
              <p className="text-xs md:text-sm text-muted-foreground font-body font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
