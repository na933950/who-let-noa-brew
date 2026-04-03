import { MenuItem } from '../types/index'

export const menuItems: MenuItem[] = [
  {
    id: 'pour-over',
    title: 'Pour Over',
    description: 'Rotating single-origin beans, hand-poured for a clean, bright, and nuanced cup.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop',
    type: 'beverage',
    price: '$5.00',
    isSignature: false,
    recipe: `
    Ingredients:
    - 20-25g fresh ground coffee (medium grind)
    - 400ml hot water (195-205°C / 383-401°F)
    - Filter paper
    
    Instructions:
    1. Rinse the filter with hot water and discard
    2. Add ground coffee to the filter
    3. Bloom: Pour just enough hot water to saturate grounds (about 50ml)
    4. Wait 30 seconds
    5. Pour the remaining water in a circular motion (about 2-3 minutes total)
    6. Serve immediately
    `,
  },
  {
    id: 'classic-masala-chai',
    title: 'Classic Masala Chai',
    description: 'Our signature blend of Assam black tea, green cardamom, fresh ginger, and whole spices.',
    image: 'https://images.unsplash.com/photo-1597318127914-e7b1fcb5f3f3?q=80&w=1000&auto=format&fit=crop',
    type: 'beverage',
    price: '$6.00',
    isSignature: true,
    recipe: `
    Ingredients:
    - 2 cups water
    - 4-5 green cardamom pods (crushed)
    - 3-4 cloves
    - 1-inch piece of fresh ginger (sliced)
    - 1 cinnamon stick
    - 1 star anise
    - 2 teaspoons Assam black tea
    - 1/2 cup milk
    - 1-2 teaspoons sugar (or to taste)
    
    Instructions:
    1. Add water to a pot and bring to boil
    2. Add cardamom, cloves, ginger, cinnamon, and star anise
    3. Simmer for 3-4 minutes to infuse spices
    4. Add Assam tea leaves
    5. Simmer for 2-3 minutes
    6. Add milk and sugar
    7. Bring to a gentle boil
    8. Strain and serve hot
    `,
  },
  {
    id: 'cortado-latte',
    title: 'Cortado / Latte',
    description: 'Double shot of our house espresso blend, served with perfectly steamed milk of your choice.',
    image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1000&auto=format&fit=crop',
    type: 'beverage',
    price: '$4.50+',
    isSignature: false,
    recipe: `
    Ingredients (Cortado - 3oz):
    - 2 shots espresso (2 oz)
    - 1 oz steamed milk
    
    Ingredients (Latte - 12oz):
    - 1-2 shots espresso (1-2 oz)
    - 8-10 oz steamed milk
    - 1/4 inch milk foam
    
    Instructions:
    1. Pull 1-2 shots of espresso into the cup
    2. Froth your choice of milk to 65-70°C (149-158°F)
    3. Pour steamed milk into espresso
    4. Top with light layer of foam
    5. Serve immediately
    `,
  },
]

export const getItemById = (id: string): MenuItem | undefined => {
  return menuItems.find((item) => item.id === id)
}

export const getItemsByType = (type: MenuItem['type']): MenuItem[] => {
  return menuItems.filter((item) => item.type === type)
}

export const getFeaturedItems = (count: number = 3): MenuItem[] => {
  return menuItems.slice(0, count)
}
