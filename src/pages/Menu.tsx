import MenuItemCard from '../components/MenuItemCard'
import { menuItems } from '../data/items'

export default function Menu() {
  const beverages = menuItems.filter(item => item.type === 'beverage')

  return (
    <div className="bg-wlnb-cream pt-16">
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
      </section>
    </div>
  )
}
