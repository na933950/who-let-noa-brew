import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-chai-cream">
      <Navigation />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
