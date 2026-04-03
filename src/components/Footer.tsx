import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-wlnb-dark text-wlnb-cream pt-16 pb-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 text-xl font-medium tracking-tight mb-4 text-wlnb-cream">
              wlnb.
            </Link>
            <p className="text-sm text-wlnb-beige leading-relaxed">
              A one-day home cafe experiment. Bringing great pastries, slow chai, and neighborhood vibes straight from the kitchen.
            </p>
          </div>

          <div className="flex gap-8">
            <div>
              <h4 className="text-sm font-medium tracking-tight mb-4 text-wlnb-cream">Links</h4>
              <ul className="space-y-3 text-sm text-wlnb-beige">
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Instagram <span className="text-xs">↗</span></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-wlnb-darker pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-wlnb-tan">
          <p>© 2026 Who Let Noa Brew. One day only.</p>
        </div>
      </div>
    </footer>
  )
}
