import os
import json

# Create directories
os.makedirs('src/components', exist_ok=True)
os.makedirs('src/pages', exist_ok=True)

# Create all files
files_to_create = {
    'src/main.tsx': '''import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
''',
    'src/index.css': '''@tailwind base;
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
''',
    'src/App.tsx': '''import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
''',
    'src/components/Header.tsx': '''import { Link } from 'react-router-dom'

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
''',
    'src/components/Footer.tsx': '''export default function Footer() {
  return (
    <footer className="bg-cafe-dark text-cafe-cream mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-sm">© 2024 Who Let Noa Brew? | Handmade with ☕ and love</p>
        <p className="text-xs mt-2 text-cafe-cream/70">Follow us on Instagram for recipes and behind-the-scenes content</p>
      </div>
    </footer>
  )
}
''',
    'src/components/Card.tsx': '''interface CardProps {
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
''',
    'src/components/Recipe.tsx': '''interface RecipeProps {
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
''',
}

for filepath, content in files_to_create.items():
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w') as f:
        f.write(content)
    print(f'Created: {filepath}')

print('All files created successfully!')
