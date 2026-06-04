"use client"

import { Card } from "@/components/ui/card"
import { Megaphone, Star, Clapperboard, Briefcase } from "lucide-react"

const adServices = [
  {
    title: "تغطية الفعاليات",
    description: "تغطية احترافية ومبتكرة للمعارض والفعاليات الرسمية والترفيهية.",
    icon: Megaphone
  },
  {
    title: "مراجعة المنتجات",
    description: "تقديم مراجعات صادقة وجذابة للمنتجات والخدمات بأسلوب عصري.",
    icon: Star
  },
  {
    title: "صناعة محتوى إبداعي",
    description: "تصميم وإنتاج فيديوهات ريلز مخصصة لخدمة أهدافك التسويقية.",
    icon: Clapperboard
  },
  {
    title: "شراكات استراتيجية",
    description: "تعاون طويل الأمد لبناء حضور قوي لعلامتك التجارية.",
    icon: Briefcase
  }
]

export function AdsSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 glow-blue">للإعلانات والتعاون التجاري</h2>
          <p className="text-gray-400 font-body text-sm md:text-base">نقدم حلولاً إبداعية لنمو علامتك التجارية عبر منصات التواصل الاجتماعي</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adServices.map((service, index) => (
            <Card key={index} className="glass-card p-8 border-white/5 hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-headline font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-body">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
