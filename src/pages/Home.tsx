import { Link } from 'react-router-dom'
import HeroHome from '../components/HeroHome'
import Features from '../components/Features'
import MenuItemCard from '../components/MenuItemCard'
import { menuItems } from '../data/items'

const features = [
  {
    title: 'Dialed Espresso',
    description: 'Using fresh, locally roasted beans. Every shot is carefully weighed and dialed in for perfect extraction.',
    icon: '☕',
  },
  {
    title: 'Signature Chai',
    description: 'Our beloved namesake. Whole spices toasted daily, slow-simmered with Assam tea for a rich, authentic cup.',
    icon: '🍃',
  },
  {
    title: 'Home Environment',
    description: 'Skip the long cafe lines. Drop by, grab a drink, listen to good music, and hang out in a cozy apartment setting.',
    icon: '🏠',
  },
]

export default function Home() {
  const beverages = menuItems.filter(item => item.type === 'beverage')

  return (
    <div className="bg-wlnb-cream">
      <HeroHome
        title={
          <>
            Proper coffee.<br />
            <span className="text-wlnb-accent">Slow brewed chai.</span>
          </>
        }
        subtitle="An intimate, one-day only neighborhood cafe experience right from our kitchen. Serving carefully dialed espresso and our signature slow-simmered chai."
        image="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop"
      />

      <Features features={features} />

      {/* Menu Section */}
      <section id="menu" className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">The Menu</h2>
            <p className="text-base text-wlnb-tan">Oat and whole milk available. Iced or hot.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beverages.map((item) => (
            <MenuItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              isSignature={item.isSignature}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-wlnb-tan mb-6">More items available on the day. Check back soon!</p>
          <Link
            to="#menu"
            className="inline-block text-wlnb-brown font-medium text-sm hover:text-wlnb-accent transition-colors"
          >
            ↓ Full menu coming soon
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-wlnb-light border-t border-wlnb-beige py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-wlnb-brown">
            Ready to visit?
          </h2>
          <p className="text-wlnb-tan mb-8">
            Follow us on Instagram for updates and to get the exact location details.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-wlnb-brown text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-wlnb-dark transition-all"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
