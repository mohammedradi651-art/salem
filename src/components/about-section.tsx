
export function AboutSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8 glow-blue">من أنا؟</h2>
        <div className="glass-card p-10 rounded-3xl border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
          <p className="text-xl md:text-2xl font-body leading-relaxed text-gray-300">
            سالم العوبثاني صانع محتوى يمني يقدّم محتوى متنوعاً عبر منصات التواصل الاجتماعي، ويسعى إلى تقديم محتوى احترافي يجمع بين الفائدة والترفيه والإبداع.
          </p>
        </div>
      </div>
    </section>
  )
}
