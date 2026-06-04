
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
    <section className="py-20 px-6 bg-[#080a0e]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="glass-card p-8 flex flex-col items-center justify-center border-white/5 animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                <stat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-headline font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground font-body">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
