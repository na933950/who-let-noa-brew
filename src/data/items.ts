import { MenuItem } from '../types/index'

const cortadoImage = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop'

export const menuItems: MenuItem[] = [
  {
    id: 'cortado',
    title: 'Cortado',
    description: 'Double shot of our house espresso blend with perfectly steamed milk.',
    image: cortadoImage,
    type: 'beverage',
    price: '$4.50',
    isSignature: false,
    recipe: `
    Ingredients:
    - 2 shots espresso (2 oz)
    - 1 oz steamed milk
    - Thin microfoam layer
    
    Instructions:
    1. Pull 2 shots of espresso into a 3-4oz cup
    2. Steam milk to 65-70°C
    3. Pour steamed milk and microfoam
    4. Serve immediately
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'latte',
    title: 'Latte',
    description: 'Silky espresso with velvety steamed milk and a touch of foam.',
    image: cortadoImage,
    type: 'beverage',
    price: '$5.00',
    isSignature: false,
    recipe: `
    Ingredients:
    - 1-2 shots espresso (1-2 oz)
    - 8-10 oz steamed milk
    - 1/4 inch milk foam
    
    Instructions:
    1. Pull 1-2 shots of espresso into the cup
    2. Steam milk to 65-70°C
    3. Pour steamed milk into espresso
    4. Top with light layer of foam
    5. Serve immediately
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'classic-masala-chai',
    title: 'Classic Masala Chai',
    description: 'Our signature blend of Assam black tea, cardamom, ginger, and whole spices.',
    image: cortadoImage,
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
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'chocolate-croissant',
    title: 'Chocolate Croissant',
    description: 'Buttery pastry with dark chocolate, baked fresh to order.',
    image: cortadoImage,
    type: 'food',
    price: '$5.50',
    isSignature: false,
    recipe: `
    Ingredients:
    - 1 sheets puff pastry
    - 50g dark chocolate
    - 1 egg (for egg wash)
    - Pinch of sea salt
    
    Instructions:
    1. Preheat oven to 200°C (400°F)
    2. Cut pastry into rectangles
    3. Place 2 chocolate bars on each rectangle
    4. Roll tightly and seal edges
    5. Apply egg wash
    6. Bake for 15-18 minutes until golden
    7. Cool slightly and serve warm
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'almond-biscotti',
    title: 'Almond Biscotti',
    description: 'Crispy twice-baked Italian almond cookies, perfect with espresso.',
    image: cortadoImage,
    type: 'food',
    price: '$4.00',
    isSignature: false,
    recipe: `
    Ingredients:
    - 2 cups flour
    - 1 cup sugar
    - 3 eggs
    - 1 cup sliced almonds
    - 1 tsp vanilla extract
    - 1 tsp baking powder
    
    Instructions:
    1. Mix dry ingredients
    2. Beat eggs with sugar until fluffy
    3. Fold in almonds and vanilla
    4. Combine wet and dry ingredients
    5. Form into loaves on baking sheet
    6. Bake at 180°C for 25 minutes
    7. Slice and bake again for 10 minutes
    8. Cool on wire rack
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'matcha-scone',
    title: 'Matcha Scone',
    description: 'Light and fluffy scone infused with ceremonial matcha powder.',
    image: cortadoImage,
    type: 'food',
    price: '$5.00',
    isSignature: false,
    recipe: `
    Ingredients:
    - 2 cups flour
    - 1/2 cup sugar
    - 3 tbsp matcha powder
    - 1/2 cup butter (cold, diced)
    - 1/2 cup cream
    - 1 egg
    - 1 tsp baking powder
    
    Instructions:
    1. Sift flour, matcha, and baking powder together
    2. Cut in cold butter until crumbly
    3. Mix in sugar
    4. Beat egg and combine with cream
    5. Fold wet into dry ingredients
    6. Form into scones
    7. Bake at 200°C for 15-18 minutes
    8. Serve warm with jam and cream
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'pistachio-cookies',
    title: 'Pistachio Cookies',
    description: 'Delicate pistachio butter cookies with a hint of cardamom.',
    image: cortadoImage,
    type: 'food',
    price: '$4.50',
    isSignature: false,
    recipe: `
    Ingredients:
    - 1 cup pistachio butter
    - 1/2 cup sugar
    - 1 egg
    - 1 tsp vanilla extract
    - 1/4 tsp cardamom powder
    - 1/2 tsp baking powder
    
    Instructions:
    1. Mix pistachio butter and sugar
    2. Beat in egg and vanilla
    3. Fold in cardamom and baking powder
    4. Drop spoonfuls onto baking sheet
    5. Bake at 180°C for 12-15 minutes
    6. Cool on wire rack before serving
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
