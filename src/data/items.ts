import { MenuItem } from '../types/index'
import { bananaCake } from '../images/images'

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
    id: 'banana-cake',
    title: 'Banana Bread',
    description: 'Browned butter banana bread with a beautiful tahini swirl.',
    image: bananaCake,
    type: 'food',
    price: '$0.00',
    isSignature: true,
    recipe: `
    Ingredients:

    Bread:
    - 4 overripe bananas, mashed
    - 2 eggs
    - 1/2 cup browned butter
    - 3/4 cup sugar
    - 2 tsp vanilla
    - 1 1/2 cups all purpose flour
    - 1 tsp baking soda
    - 1/2 tsp salt
    - 1 tsp cinnamon
    - 1/2 tsp nutmeg (optional)
    - 1 cup toffee chips or chocolate chips (or both)
    
    Tahini Swirl:
    - 1/4 cup tahini
    - 3 tbsp honey
    - pinch of salt

    Glaze:
    - 1 cup powedered sugar
    - 2 - 3 tbsp milk
    
    Instructions:
    1. Preheat oven to 350 F and grease a 9 x 13 pan
    2. Combine all wet banana bread ingredients until homogenous -- leave some chunks in the bananas
    3. Carefully fold in dry ingredients until just combined. Fold in toffee or chocolate chips
    4. Add batter to the pan. Dallop 5 or 6 spoonfuls of tahini mixture on top once settled. Use a chopstick to create a swirl pattern. Optionally, add extra chocolate chips on top.
    5. Bake 30 - 35 minutes until the top is browned and a toothpick comes out clean.
    6. Let cool fully before drizzling glaze over the top.
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
