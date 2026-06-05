
"use client"

import { useEffect, useRef, useState } from "react"
import Hls from "hls.js"
import { Tv, Play, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export function TvLiveSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isError, setIsError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  // الرابط الجديد الذي زودتنا به
  const videoUrl = "https://h42.reelpush.online/live/69854211/index.m3u8"

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls()
        hls.loadSource(videoUrl)
        hls.attachMedia(videoRef.current)
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            console.error("HLS fatal error:", data)
            setIsError(true)
          }
        })
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = videoUrl
      } else {
        setIsError(true)
      }
    }
  }, [videoUrl])

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(err => {
        console.error("Playback failed:", err)
      })
    }
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
            <Tv className="h-6 w-6 text-primary relative z-10" />
          </div>
          <h2 className="text-xl md:text-2xl font-headline font-bold glow-blue">البث المباشر</h2>
        </div>

        <Card className="glass-card overflow-hidden border-white/10 shadow-2xl relative aspect-video group">
          {isError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 p-6 text-center">
              <AlertCircle className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-lg font-bold mb-2">عذراً، تعذر تشغيل البث</h3>
              <p className="text-sm text-gray-400">الرابط قد يكون متوقفاً مؤقتاً أو يحتاج لمتصفح يدعم تقنية HLS.</p>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={isPlaying}
                playsInline
                poster="https://picsum.photos/seed/tv-poster/800/450"
              />
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer group-hover:bg-black/20 transition-colors"
                  onClick={handlePlayClick}
                >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,163,255,0.6)] animate-pulse hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 text-white fill-current ml-1" />
                  </div>
                </div>
              )}
            </>
          )}
        </Card>
        
        <p className="mt-4 text-center text-xs text-gray-500 font-body">
          ملاحظة: البث المباشر يعمل بجودة عالية ويعتمد على استقرار اتصالك.
        </p>
      </div>
    </section>
  )
}
