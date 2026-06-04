
export function AboutSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-headline font-bold mb-10 glow-blue">عن مسيرتي</h2>
        <div className="glass-card p-8 md:p-12 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-1000" />
          <p className="text-lg md:text-xl font-body leading-relaxed text-gray-400 font-light">
            سالم العوبثاني، صانع محتوى يمني طموح. أعمل على تقديم محتوى متنوع يجمع بين الترفيه والفائدة عبر منصات التواصل الاجتماعي، بهدف إلهام الشباب وتقديم صورة مشرقة للإبداع العربي في العالم الرقمي.
          </p>
        </div>
      </div>
    </section>
  )
}
