
"use client"

import { useEffect, useRef, useState } from "react"
import Hls from "hls.js"
import { Tv, Play, AlertCircle, RefreshCw, ExternalLink, MonitorPlay } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TvLiveSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<Hls | null>(null)
  const [isError, setIsError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  
  // الرابط الجديد للبث المباشر
  const videoUrl = "https://h42.reelpush.online/live/69854211/index.m3u8"

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    setIsError(false)

    // إعداد HLS.js
    if (Hls.isSupported()) {
      if (hlsRef.current) {
        hlsRef.current.destroy()
      }

      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        manifestLoadingMaxRetry: 10,
        levelLoadingMaxRetry: 10,
        xhrSetup: function(xhr) {
          xhr.withCredentials = false; // تجنب مشاكل معينة في بعض السيرفرات
        }
      })

      hlsRef.current = hls
      hls.loadSource(videoUrl)
      hls.attachMedia(video)

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error("Network error encountered, trying to recover...")
              hls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error("Media error encountered, trying to recover...")
              hls.recoverMediaError()
              break
            default:
              console.error("Fatal error, cannot recover.")
              setIsError(true)
              hls.destroy()
              break
          }
        }
      })
    } 
    // دعم Safari المباشر لـ HLS
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl
    } else {
      setIsError(true)
    }

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
        // إذا فشل التشغيل غالباً بسبب سياسات CORS أو المتصفح
        setIsError(true)
      })
    }
  }

  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
    setIsError(false)
    setIsPlaying(false)
  }

  const openExternal = () => {
    window.open(videoUrl, '_blank')
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
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 p-6 text-center z-20 animate-in fade-in duration-500">
              <AlertCircle className="h-12 w-12 text-destructive mb-4 animate-pulse" />
              <h3 className="text-lg font-bold mb-2">تعذر تشغيل البث في المتصفح</h3>
              <p className="text-xs text-gray-400 mb-8 max-w-xs leading-relaxed">
                بعض القنوات تمنع التشغيل المباشر داخل المواقع لأسباب أمنية. يمكنك المشاهدة عبر تطبيق VLC أو متصفح خارجي.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                <Button 
                  variant="default" 
                  className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-white font-bold"
                  onClick={openExternal}
                >
                  <ExternalLink className="h-4 w-4" />
                  تشغيل خارجي (VLC)
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 gap-2 border-white/10 hover:bg-white/5"
                  onClick={handleRetry}
                >
                  <RefreshCw className="h-4 w-4" />
                  إعادة المحاولة
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
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 cursor-pointer group-hover:bg-black/50 transition-all z-10"
                  onClick={handlePlayClick}
                >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,163,255,0.5)] mb-4 hover:scale-110 transition-transform duration-300">
                    <Play className="h-10 w-10 text-white fill-current ml-1" />
                  </div>
                  <span className="text-white font-headline font-bold text-sm tracking-wide">اضغط لبدء البث</span>
                </div>
              )}
            </>
          )}
        </Card>
        
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Live Now</span>
          </div>
          <button 
            onClick={openExternal}
            className="flex items-center gap-1.5 text-xs text-primary hover:underline font-body"
          >
            <MonitorPlay className="h-3.5 w-3.5" />
            تشغيل عبر تطبيق خارجي
          </button>
        </div>
      </div>
    </section>
  )
}
