import AboutSection from '../components/AboutSection'
import BenefitsStrip from '../components/BenefitsStrip'
import BestsellerSection from '../components/BestsellerSection'
import CategorySection from '../components/CategorySection'
import CollectionHighlights from '../components/CollectionHighlights'
import GallerySection from '../components/GallerySection'
import GiftingSection from '../components/GiftingSection'
import HeroSection from '../components/HeroSection'
import MetalCollections from '../components/MetalCollections'
import NewsletterSection from '../components/NewsletterSection'
import PromoBanner from '../components/PromoBanner'
import Testimonials from '../components/Testimonials'
import TrendingCollections from '../components/TrendingCollections'
import WhyLuxora from '../components/WhyLuxora'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionHighlights />
      <CategorySection />
      <BestsellerSection />
      <BenefitsStrip />
      <AboutSection />
      <MetalCollections />
      <WhyLuxora />
      <PromoBanner />
      <GallerySection />
      <GiftingSection />
      <TrendingCollections />
      <Testimonials />
      <NewsletterSection />
    </>
  )
}
