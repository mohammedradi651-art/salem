import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SocialPlatforms } from "@/components/social-platforms"
import { AdsSection } from "@/components/ads-section"
import { WhatsAppBar } from "@/components/whatsapp-bar"

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      <HeroSection />
      <AboutSection />
      <AdsSection />
      <SocialPlatforms />
      
      <footer className="py-12 px-6 border-t border-white/5 bg-transparent text-center flex flex-col gap-2">
        <p className="text-muted-foreground font-body text-sm">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة - سالم العوبثاني
        </p>
        <p className="text-primary/60 font-body text-xs font-bold tracking-wide">
          أحد أعمال منصة ستار ميديا
        </p>
      </footer>

      <WhatsAppBar />
    </main>
  )
}
