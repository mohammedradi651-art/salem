import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SocialPlatforms } from "@/components/social-platforms"
import { AISummary } from "@/components/ai-summary"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <AISummary />
      <SocialPlatforms />
      
      <footer className="py-12 px-6 border-t border-white/5 bg-[#040608] text-center">
        <p className="text-muted-foreground font-body">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة - سالم العوبثاني
        </p>
      </footer>
    </main>
  )
}
