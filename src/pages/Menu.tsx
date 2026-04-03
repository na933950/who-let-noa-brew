import { useState } from 'react'
import MenuItemCard from '../components/MenuItemCard'
import RecipeModal from '../components/RecipeModal'
import { menuItems } from '../data/items'
import { MenuItem } from '../types/index'

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const beverages = menuItems.filter(item => item.type === 'beverage')
  const food = menuItems.filter(item => item.type === 'food')

  return (
    <div className="bg-wlnb-cream pt-16">
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

      <RecipeModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  )
}
