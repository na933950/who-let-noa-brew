import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-wlnb-cream/80 backdrop-blur-xl border-b border-wlnb-beige/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-base font-medium tracking-tight text-wlnb-brown hover:text-wlnb-accent transition-colors">
          wlnb.
        </Link>
        
        <div className="flex items-center gap-8 text-sm font-medium text-wlnb-tan">
          <a href="#menu" className="hover:text-wlnb-brown transition-colors">Menu</a>
          <a href="#" className="hover:text-wlnb-brown transition-colors flex items-center gap-1.5">
            Instagram
            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
