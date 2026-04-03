import { useState } from 'react'
import HeroHome from '../components/HeroHome'
import Features from '../components/Features'
import MenuItemCard from '../components/MenuItemCard'
import RecipeModal from '../components/RecipeModal'
import { menuItems } from '../data/items'
import { MenuItem } from '../types/index'

const features = [
  {
    title: 'Homemade pastries',
    description: "Each crafted with precision. If you think I'm a tryhard foodie normally, just wait until you see these breads.",
    icon: '🥐',
  },
  {
    title: 'Signature Chai',
    description: 'I change the recipe every time. Whole spices toasted daily, slow-simmered with Assam tea for a rich, authentic cup.',
    icon: '☕',
  },
  {
    title: 'Home Environment',
    description: 'For my friends to hang out, mingle, and take advantage of free food! Enjoy this cozy environment and have fun!',
    icon: '🏠',
  },
]

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const beverages = menuItems.filter(item => item.type === 'beverage')
  const food = menuItems.filter(item => item.type === 'food')

  return (
    <div className="bg-wlnb-cream">
      <HeroHome
        title={
          <>
            Fancy pastries<br />
            <span className="text-wlnb-accent">Slow brewed chai.</span>
          </>
        }
        subtitle="A one day experience doubling as a grad party. When posed the question: who let Noa brew, we deliver. All items made with care, and recipes linked"
        image="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop"
      />

      <Features features={features} />

      {/* Menu Section */}
      <section id="menu" className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Beverages</h2>
            <p className="text-base text-wlnb-tan">Carefully dialed espresso and signature chai.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {beverages.map((item) => (
            <MenuItemCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              isSignature={item.isSignature}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {/* Food Section */}
        <div className="mt-20 pt-12 border-t border-wlnb-beige">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Pastries & Baked Goods</h2>
              <p className="text-base text-wlnb-tan">Homemade with love and precision.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {food.map((item) => (
              <MenuItemCard
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                isSignature={item.isSignature}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-wlnb-light border-t border-wlnb-beige py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-wlnb-brown">
            Want to see more?
          </h2>
          <p className="text-wlnb-tan mb-8">
            Follow me on Instagram for updates, video recaps, and recipes!
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

      {/* Recipe Modal */}
      <RecipeModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  )
}
