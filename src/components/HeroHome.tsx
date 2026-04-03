interface HeroProps {
  title: React.ReactNode
  subtitle: string
  image: string
}

export default function HeroHome({ title, subtitle, image }: HeroProps) {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col items-start z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wlnb-beige/50 border border-wlnb-beige mb-6">
          <span className="w-2 h-2 rounded-full bg-wlnb-accent animate-pulse"></span>
          <span className="text-xs font-medium tracking-wide uppercase text-wlnb-tan">One-day home cafe</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
          {title}
        </h1>
        
        <p className="text-lg text-wlnb-tan mb-8 max-w-md leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col gap-4 w-full max-w-md p-5 rounded-2xl bg-wlnb-light border border-wlnb-beige mb-10">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-wlnb-accent">📅</div>
            <div>
              <p className="text-sm font-medium text-wlnb-brown">This Saturday</p>
              <p className="text-xs text-wlnb-tan mt-0.5">9:00 AM — 2:00 PM</p>
            </div>
          </div>
          <div className="w-full h-px bg-wlnb-beige/60"></div>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-wlnb-accent">📍</div>
            <div>
              <p className="text-sm font-medium text-wlnb-brown">The Apartment</p>
              <p className="text-xs text-wlnb-tan mt-0.5">DM us on Instagram for the exact address & entry code.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-wlnb-beige rounded-full blur-3xl opacity-40 transform scale-90 translate-y-12"></div>
        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-wlnb-brown/10 border border-wlnb-beige/50">
          <img src={image} alt="Coffee" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-wlnb-brown/40 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
