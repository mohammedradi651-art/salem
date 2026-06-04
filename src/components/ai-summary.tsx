
"use client"

import { useState, useEffect } from "react"
import { contentSummaryHighlight, type ContentSummaryHighlightOutput } from "@/ai/flows/content-summary-highlight-flow"
import { Card } from "@/components/ui/card"
import { Sparkles, CheckCircle2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export function AISummary() {
  const [data, setData] = useState<ContentSummaryHighlightOutput | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAI() {
      try {
        const result = await contentSummaryHighlight({
          contentItems: [
            "فيديو عن السياحة في اليمن والمناظر الخلابة في محافظة إب",
            "سلسلة نصائح لصناع المحتوى المبتدئين حول كيفية تطوير محتوى الريلز",
            "تحدي إبداعي مع الجمهور لإنشاء محتوى هادف في 30 ثانية",
            "تغطية لفعالية تقنية في العاصمة صنعاء"
          ]
        })
        setData(result)
      } catch (error) {
        console.error("AI Error:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchAI()
  }, [])

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Sparkles className="text-primary h-8 w-8" />
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-center">رؤية ذكية للمحتوى</h2>
        </div>
        
        <Card className="glass-card p-10 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {loading ? (
            <div className="space-y-6">
              <Skeleton className="h-6 w-3/4 bg-white/5" />
              <Skeleton className="h-24 w-full bg-white/5" />
              <div className="flex gap-4">
                <Skeleton className="h-10 w-24 bg-white/5" />
                <Skeleton className="h-10 w-24 bg-white/5" />
              </div>
            </div>
          ) : data ? (
            <div className="space-y-8">
              <div>
                <h3 className="text-primary font-headline font-bold text-xl mb-4">ملخص النشاط الأخير</h3>
                <p className="text-lg text-gray-300 leading-relaxed font-body">
                  {data.summary}
                </p>
              </div>

              <div>
                <h3 className="text-primary font-headline font-bold text-xl mb-4">أبرز المحاور</h3>
                <div className="flex flex-wrap gap-4">
                  {data.keyContexts.map((ctx, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-body text-gray-200">{ctx}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-muted-foreground">حدث خطأ في تحميل البيانات الذكية.</p>
          )}
        </Card>
      </div>
    </section>
  )
}
