import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import QuickView from './components/QuickView'
import SearchModal from './components/SearchModal'
import Toast from './components/Toast'
import { ScrollTrigger } from './lib/gsap'
import Account from './pages/Account'
import Collections from './pages/Collections'
import Home from './pages/Home'
import InfoPage from './pages/InfoPage'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Wishlist from './pages/Wishlist'

const infoRoutes = ['about', 'blog', 'contact', 'track-order', 'store-locator', 'shipping', 'returns', 'faq', 'size-guide', 'privacy', 'terms']

function ScrollManager() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    // New page content means new trigger positions.
    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => window.cancelAnimationFrame(id)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          {infoRoutes.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<InfoPage />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <SearchModal />
      <QuickView />
      <Toast />
    </>
  )
}
