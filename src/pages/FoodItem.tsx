import { useParams, Link } from 'react-router-dom'
import { getItemById } from '../data/items'

export default function FoodItem() {
  const { id } = useParams<{ id: string }>()
  const item = id ? getItemById(id) : null

  if (!item) {
    return (
      <div className="min-h-screen bg-wlnb-cream flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-wlnb-brown mb-4">Not Found</h1>
          <p className="text-wlnb-tan mb-8">Sorry, we couldn't find that item.</p>
          <Link to="/" className="text-wlnb-accent hover:text-wlnb-brown font-medium transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-wlnb-cream">
      {/* Hero Image */}
      <div className="h-96 md:h-[500px] bg-cover bg-center mt-16" style={{ backgroundImage: `url(${item.image})` }} />

      {/* Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="text-sm font-medium text-wlnb-accent uppercase tracking-wide">
              {item.type === 'beverage' ? 'Beverage' : 'Baked Good'}
            </span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-wlnb-brown mt-2 mb-4">{item.title}</h1>
            <div className="flex items-center justify-between">
              <p className="text-xl text-wlnb-tan leading-relaxed flex-grow">{item.description}</p>
              <p className="text-2xl font-medium text-wlnb-accent ml-4">{item.price}</p>
            </div>
          </div>

          {item.recipe && (
            <div className="my-12 bg-white p-8 md:p-12 rounded-2xl border border-wlnb-beige">
              <h2 className="text-2xl md:text-3xl font-medium text-wlnb-brown mb-8">Recipe</h2>
              <pre className="bg-wlnb-light p-6 rounded-xl text-wlnb-brown text-sm leading-relaxed whitespace-pre-wrap break-words font-sans">
                {item.recipe}
              </pre>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="inline-block bg-wlnb-brown text-white font-medium py-3 px-8 rounded-full hover:bg-wlnb-dark transition-all text-center text-sm"
            >
              ← Back to Home
            </Link>
            <Link
              to="#menu"
              className="inline-block bg-wlnb-brown text-white font-medium py-3 px-8 rounded-full hover:bg-wlnb-dark transition-all text-center text-sm"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
