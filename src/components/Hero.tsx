import { HeroProps } from '../types/index'

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section
      className="relative h-80 md:h-96 bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(74, 55, 40, 0.4), rgba(74, 55, 40, 0.4)), url(${backgroundImage})`
          : 'linear-gradient(135deg, #D97E4A 0%, #A63C3C 100%)',
      }}
    >
      <div className="text-chai-cream max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 leading-tight">{title}</h1>
        <p className="text-lg md:text-xl opacity-95">{subtitle}</p>
      </div>
    </section>
  )
}
