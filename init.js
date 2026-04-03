#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const basePath = __dirname;

// Create directories
const directories = ['src/components', 'src/pages'];
directories.forEach(dir => {
  const fullPath = path.join(basePath, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created directory: ${dir}`);
  }
});

// File contents object
const fileContents = {
  'src/main.tsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`,
  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafaf9;
}

code {
  background-color: #f3f3f3;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`,
  'src/App.tsx': `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import ItemDetail from './pages/ItemDetail'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-cafe-cream">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/item/:id" element={<ItemDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
`,
  'src/components/Header.tsx': `import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-cafe-brown text-cafe-cream shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold hover:text-cafe-cream transition">
            ☕ Who Let Noa Brew?
          </Link>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-cafe-cream/80 transition text-lg">
              Home
            </Link>
            <Link to="/menu" className="hover:text-cafe-cream/80 transition text-lg">
              Menu
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
`,
  'src/components/Footer.tsx': `export default function Footer() {
  return (
    <footer className="bg-cafe-dark text-cafe-cream mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-sm">© 2024 Who Let Noa Brew? | Handmade with ☕ and love</p>
        <p className="text-xs mt-2 text-cafe-cream/70">Follow us on Instagram for recipes and behind-the-scenes content</p>
      </div>
    </footer>
  )
}
`,
  'src/components/Card.tsx': `interface CardProps {
  title: string
  description?: string
  image?: string
  children?: React.ReactNode
}

export default function Card({ title, description, image, children }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {image && (
        <div className="w-full h-48 bg-gray-200 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold text-cafe-dark mb-2">{title}</h3>
        {description && <p className="text-gray-700 text-sm mb-3">{description}</p>}
        {children}
      </div>
    </div>
  )
}
`,
  'src/components/Recipe.tsx': `interface RecipeProps {
  ingredients: string[]
  instructions: string[]
}

export default function Recipe({ ingredients, instructions }: RecipeProps) {
  return (
    <div className="bg-cafe-cream p-6 rounded-lg my-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-2xl font-bold text-cafe-dark mb-4">Ingredients</h4>
          <ul className="space-y-2">
            {ingredients.map((ingredient, idx) => (
              <li key={idx} className="text-gray-700 flex items-start">
                <span className="mr-3">•</span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold text-cafe-dark mb-4">Instructions</h4>
          <ol className="space-y-3">
            {instructions.map((instruction, idx) => (
              <li key={idx} className="text-gray-700 flex gap-3">
                <span className="font-bold text-cafe-brown min-w-6">{idx + 1}.</span>
                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
`,
  'src/pages/Home.tsx': `import { Link } from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {
  const cafeItems = [
    {
      id: 'espresso',
      title: 'Signature Espresso',
      image: 'https://images.unsplash.com/photo-1610707267537-b85fab00c77b?w=400&h=300&fit=crop',
    },
    {
      id: 'latte',
      title: 'Creamy Latte',
      image: 'https://images.unsplash.com/photo-1577968345e999666a86533e06f0be46fb52873d?w=400&h=300&fit=crop',
    },
    {
      id: 'pastry',
      title: 'Fresh Pastries',
      image: 'https://images.unsplash.com/photo-1585080872051-9bae0081a2e1?w=400&h=300&fit=crop',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-cafe-dark mb-4">Who Let Noa Brew?</h1>
        <p className="text-xl text-gray-700 mb-8">
          A cozy, modern home cafe with handmade treats and specialty coffee
        </p>
        
        <div className="bg-cafe-brown text-cafe-cream rounded-lg p-8 max-w-2xl mx-auto mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">You're Invited! ☕</h2>
          <div className="space-y-3 text-lg">
            <p><strong>Date:</strong> Coming Soon</p>
            <p><strong>Location:</strong> A cozy corner of Noa's home</p>
            <p><strong>What to Expect:</strong> Fresh coffee, homemade pastries & treats, and good vibes</p>
          </div>
          <button className="mt-6 bg-cafe-cream text-cafe-brown px-8 py-2 rounded-lg font-bold hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cafe-dark mb-8 text-center">Featured on Our Menu</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cafeItems.map((item) => (
            <Link key={item.id} to={\`/item/\${item.id}\`}>
              <Card title={item.title} image={item.image}>
                <Link
                  to={\`/item/\${item.id}\`}
                  className="inline-block bg-cafe-brown text-cafe-cream px-4 py-2 rounded hover:bg-cafe-dark transition"
                >
                  View Recipe →
                </Link>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-3xl font-bold text-cafe-dark mb-4">About This Cafe</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Who Let Noa Brew? - a home cafe dedicated to crafting the perfect cup and sharing delicious homemade treats. 
          Every item is prepared with care, featuring recipes shared on our Instagram channel.
        </p>
        <p className="text-gray-700">
          Follow us on Instagram for behind-the-scenes content, recipe videos, and updates on upcoming cafe gatherings!
        </p>
        <Link
          to="/menu"
          className="mt-6 inline-block bg-cafe-brown text-cafe-cream px-6 py-2 rounded-lg font-bold hover:bg-cafe-dark transition"
        >
          View Full Menu
        </Link>
      </section>
    </div>
  )
}
`,
  'src/pages/Menu.tsx': `import { Link } from 'react-router-dom'
import Card from '../components/Card'

export default function Menu() {
  const menuItems = {
    drinks: [
      { id: 'espresso', name: 'Espresso', description: 'Bold and rich single shot' },
      { id: 'latte', name: 'Latte', description: 'Smooth espresso with steamed milk' },
      { id: 'cappuccino', name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam' },
      { id: 'americano', name: 'Americano', description: 'Espresso with hot water' },
      { id: 'mocha', name: 'Mocha', description: 'Espresso, steamed milk, and chocolate' },
      { id: 'macchiato', name: 'Macchiato', description: 'Espresso "marked" with a bit of milk foam' },
    ],
    food: [
      { id: 'croissant', name: 'Butter Croissant', description: 'Flaky, buttery layers of perfection' },
      { id: 'pastry', name: 'Fresh Pastries', description: 'Seasonal selections, daily baked' },
      { id: 'cake', name: 'Homemade Cake', description: 'Our signature seasonal cake' },
      { id: 'cookie', name: 'Chocolate Chip Cookie', description: 'Warm and gooey, made with love' },
      { id: 'sandwich', name: 'Cafe Sandwich', description: 'Fresh ingredients on artisan bread' },
      { id: 'yogurt', name: 'Yogurt Parfait', description: 'Layered with granola and fresh fruit' },
    ],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-cafe-dark mb-12 text-center">Our Menu</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cafe-brown mb-8">☕ Drinks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.drinks.map((item) => (
            <Link key={item.id} to={\`/item/\${item.id}\`}>
              <Card title={item.name} description={item.description}>
                <Link
                  to={\`/item/\${item.id}\`}
                  className="text-cafe-brown hover:text-cafe-dark font-semibold transition"
                >
                  See Recipe →
                </Link>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-cafe-brown mb-8">🍰 Food</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.food.map((item) => (
            <Link key={item.id} to={\`/item/\${item.id}\`}>
              <Card title={item.name} description={item.description}>
                <Link
                  to={\`/item/\${item.id}\`}
                  className="text-cafe-brown hover:text-cafe-dark font-semibold transition"
                >
                  See Recipe →
                </Link>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
`,
  'src/pages/ItemDetail.tsx': `import { useParams } from 'react-router-dom'
import Recipe from '../components/Recipe'

const itemsData: { [key: string]: any } = {
  espresso: {
    title: 'Signature Espresso',
    image: 'https://images.unsplash.com/photo-1610707267537-b85fab00c77b?w=600&h=400&fit=crop',
    description: 'A bold and intense espresso, perfectly extracted for maximum flavor.',
    reelId: null,
    ingredients: [
      '18g freshly ground espresso beans',
      'Hot water (~90-95°C)',
    ],
    instructions: [
      'Measure 18g of espresso beans and grind them finely.',
      'Tamp the grounds evenly into the portafilter.',
      'Insert into the espresso machine and start extraction.',
      'Pull the shot for 25-30 seconds until you get about 35-40ml of espresso.',
      'Serve immediately in a warm cup.',
    ],
  },
  latte: {
    title: 'Creamy Latte',
    image: 'https://images.unsplash.com/photo-1577968345e999666a86533e06f0be46fb52873d?w=600&h=400&fit=crop',
    description: 'A smooth and creamy coffee drink with espresso and steamed milk.',
    reelId: null,
    ingredients: [
      '1-2 shots espresso',
      '8-10 oz steamed milk',
      '½ oz milk foam',
      'Optional: vanilla syrup or cinnamon',
    ],
    instructions: [
      'Pull 1-2 shots of espresso into a cup.',
      'Steam the milk to create a smooth microfoam.',
      'Pour the steamed milk into the espresso, holding back the foam.',
      'Top with ½ inch of milk foam.',
      'Optional: drizzle with syrup or sprinkle cinnamon on top.',
    ],
  },
  cappuccino: {
    title: 'Cappuccino',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=600&h=400&fit=crop',
    description: 'Equal parts espresso, steamed milk, and foam for a balanced, rich coffee experience.',
    reelId: null,
    ingredients: [
      '1 shot espresso',
      '3-4 oz steamed milk',
      '2-3 oz milk foam',
      'Cocoa powder (optional)',
    ],
    instructions: [
      'Pull 1 shot of espresso into a cup.',
      'Steam the milk to create thick, creamy microfoam.',
      'Pour equal parts steamed milk and foam into the espresso.',
      'Top with additional foam.',
      'Optionally dust with cocoa powder.',
    ],
  },
  pastry: {
    title: 'Fresh Pastries',
    image: 'https://images.unsplash.com/photo-1585080872051-9bae0081a2e1?w=600&h=400&fit=crop',
    description: 'Freshly baked croissants and pastries made with quality butter and premium ingredients.',
    reelId: null,
    ingredients: [
      '3 cups all-purpose flour',
      '1 cup unsalted butter, cold',
      '1½ tsp salt',
      '2 tbsp sugar',
      '1 tsp instant yeast',
      '¾ cup water',
      '2 tbsp milk (for wash)',
    ],
    instructions: [
      'Mix flour, salt, sugar, and yeast in a bowl.',
      'Add water and mix until shaggy dough forms.',
      'Let rest for 20 minutes.',
      'Begin lamination process by incorporating cold butter through folds.',
      'Chill dough between folds, repeat 4-6 times.',
      'Shape croissants and let proof overnight.',
      'Brush with milk wash and bake at 400°F for 18-20 minutes until golden.',
    ],
  },
  croissant: {
    title: 'Butter Croissant',
    image: 'https://images.unsplash.com/photo-1585080872051-9bae0081a2e1?w=600&h=400&fit=crop',
    description: 'Classic French croissant with hundreds of buttery layers.',
    reelId: null,
    ingredients: [
      '2 cups all-purpose flour',
      '1 tsp salt',
      '1 tbsp sugar',
      '½ tsp instant yeast',
      '½ cup water',
      '⅔ cup unsalted butter',
    ],
    instructions: [
      'Combine flour, salt, sugar, and yeast.',
      'Add water and mix into dough.',
      'Let rest 20 minutes.',
      'Begin lamination: spread butter between folds.',
      'Do 6 sets of folds, chilling 30 minutes between each.',
      'Shape into triangles and roll into croissants.',
      'Proof for 2 hours.',
      'Bake at 425°F for 15-18 minutes until golden brown.',
    ],
  },
  americano: {
    title: 'Americano',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021ad9?w=600&h=400&fit=crop',
    description: 'A larger coffee drink made by adding hot water to espresso shots.',
    reelId: null,
    ingredients: [
      '1-2 shots espresso',
      '6-8 oz hot water',
      'Optional: splash of milk or cream',
    ],
    instructions: [
      'Pull 1-2 shots of espresso into a cup.',
      'Add 6-8 oz of hot water (water added to espresso, not espresso to water).',
      'Optional: add a splash of milk or cream.',
      'Serve immediately.',
    ],
  },
}

export default function ItemDetail() {
  const { id } = useParams<{ id: string }>()
  const item = id ? itemsData[id] : null

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-cafe-dark">Item not found</h1>
        <p className="text-gray-600 mt-2">Sorry, we couldn't find that menu item.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-cafe-dark mb-4">{item.title}</h1>
        
        {item.image && (
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg mb-6">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>
        )}
        
        <p className="text-lg text-gray-700 mb-6">{item.description}</p>
      </div>

      {item.reelId && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-cafe-dark mb-4">Watch the Recipe Video</h2>
          <p className="text-gray-600">Instagram Reel integration coming soon!</p>
        </div>
      )}

      <Recipe ingredients={item.ingredients} instructions={item.instructions} />

      <div className="mt-8 bg-cafe-cream p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cafe-dark mb-3">💡 Pro Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Use freshly ground beans for the best flavor</li>
          <li>• Grind size significantly impacts extraction and taste</li>
          <li>• Water temperature matters - aim for 90-95°C</li>
          <li>• Practice your technique to achieve consistent results</li>
          <li>• High-quality equipment makes a difference</li>
        </ul>
      </div>
    </div>
  )
}
`,
};

// Write all files
Object.entries(fileContents).forEach(([filepath, content]) => {
  const fullPath = path.join(basePath, filepath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
    console.log(`✓ Created: ${filepath}`);
  }
});

console.log('\n✅ All files created successfully!\n');
console.log('Now running: npm install\n');

try {
  execSync('npm install', { stdio: 'inherit', cwd: basePath });
  console.log('\n✅ Dependencies installed successfully!\n');
  console.log('🚀 You can now run: npm run dev');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
}
