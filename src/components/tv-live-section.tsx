
"use client"

import { useEffect, useRef, useState } from "react"
import Hls from "hls.js"
import { Tv, Play, AlertCircle, RefreshCw, MonitorPlay } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TvLiveSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<Hls | null>(null)
  const [isError, setIsError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  
  // رابط البث المباشر
  const videoUrl = "https://h42.reelpush.online/live/69854211/index.m3u8"

  const initPlayer = () => {
    setIsError(false)
    if (videoRef.current) {
      if (Hls.isSupported()) {
        if (hlsRef.current) {
          hlsRef.current.destroy()
        }
        
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 60,
          manifestLoadingMaxRetry: 8, // زيادة عدد المحاولات للروابط الضعيفة
          levelLoadingMaxRetry: 8,
          xhrSetup: (xhr) => {
            xhr.withCredentials = false // ضروري لروابط IPTV
          }
        })
        
        hlsRef.current = hls
        hls.loadSource(videoUrl)
        hls.attachMedia(videoRef.current)
        
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.log("Network error, trying to recover...")
                hls.startLoad()
                break
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.log("Media error, trying to recover...")
                hls.recoverMediaError()
                break
              default:
                console.error("Unrecoverable HLS error:", data)
                setIsError(true)
                hls.destroy()
                break
            }
          }
        })
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = videoUrl
      } else {
        setIsError(true)
      }
    }
  }

  useEffect(() => {
    initPlayer()
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
      }
    }
  }, [videoUrl, retryCount])

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true)
        setIsError(false)
      }).catch(err => {
        console.error("Playback failed:", err)
      })
    }
  }

  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
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

        <Card className="glass-card overflow-hidden border-white/10 shadow-2xl relative aspect-video group bg-black">
          {isError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/98 p-6 text-center z-20 animate-in fade-in duration-500">
              <AlertCircle className="h-10 w-10 text-destructive mb-4 animate-pulse" />
              <h3 className="text-lg font-bold mb-2">عذراً، المشغل المدمج لا يستجيب</h3>
              <p className="text-xs text-gray-400 mb-6 max-w-xs leading-relaxed">
                رابط البث قد يحتاج لتطبيق خارجي. نوصي بفتحه عبر مشغل <span className="text-primary font-bold">VLC</span> للحصول على أفضل أداء بدون تقطيع.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="gap-2 border-white/10 hover:bg-white/5 text-xs h-9"
                  onClick={handleRetry}
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  تحديث
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  className="gap-2 bg-primary text-white text-xs h-9"
                  onClick={() => window.open(videoUrl, '_blank')}
                >
                  <MonitorPlay className="h-3.5 w-3.5" />
                  تشغيل في VLC / خارجي
                </Button>
              </div>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls={isPlaying}
                playsInline
                poster="https://picsum.photos/seed/tv-live/800/450"
              />
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/60 cursor-pointer group-hover:bg-black/40 transition-colors z-10"
                  onClick={handlePlayClick}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,163,255,0.6)] animate-pulse hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white fill-current ml-1" />
                  </div>
                </div>
              )}
            </>
          )}
        </Card>
        
        <p className="mt-4 text-center text-[10px] md:text-xs text-gray-500 font-body leading-relaxed max-w-sm mx-auto">
          ملاحظة: البث المباشر يعمل بشكل أفضل على المتصفحات الحديثة، وفي حال واجهت مشكلة جرب زر "تشغيل في VLC".
        </p>
      </div>
    </section>
  )
}
