interface Feature {
  title: string
  description: string
  icon: string
}

interface FeaturesProps {
  features: Feature[]
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="bg-wlnb-light py-24 border-y border-wlnb-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Crafted for the day</h2>
          <p className="text-base text-wlnb-tan">But built for the memory -- a focused menu directly from my food page, and reflecting what type of food I love to share with my friends! </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-wlnb-cream p-8 rounded-2xl border border-wlnb-beige hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-wlnb-light rounded-xl flex items-center justify-center mb-6 text-wlnb-accent group-hover:scale-110 transition-transform text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-3">{feature.title}</h3>
              <p className="text-sm text-wlnb-tan leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
