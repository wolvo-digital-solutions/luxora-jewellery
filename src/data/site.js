import { categories, collections } from './categories'

export const mainNav = [
  { label: 'Home', to: '/' },
  {
    label: 'Collections',
    to: '/collections',
    children: collections.map((c) => ({ label: c.name, to: `/collections?collection=${c.id}` })),
  },
  {
    label: 'Jewellery',
    to: '/collections',
    children: [
      ...categories.map((c) => ({ label: c.name, to: `/collections?category=${c.id}` })),
      { label: 'View All Jewellery', to: '/collections' },
    ],
  },
  { label: 'About Us', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
]

export const footerColumns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Collections', to: '/collections' },
      { label: 'Jewellery', to: '/collections' },
      { label: 'About Us', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Collections',
    links: collections.map((c) => ({ label: c.name, to: `/collections?collection=${c.id}` })),
  },
  {
    title: 'Customer Service',
    links: [
      { label: 'Track Order', to: '/track-order' },
      { label: 'Shipping & Delivery', to: '/shipping' },
      { label: 'Returns & Exchange', to: '/returns' },
      { label: "FAQ's", to: '/faq' },
      { label: 'Size Guide', to: '/size-guide' },
      { label: 'Store Locator', to: '/store-locator' },
    ],
  },
]

export const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

// Platform links only — replace with the brand's verified profile URLs before launch.
export const socialLinks = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/919876543210' },
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com/' },
]

// Demonstration contact details — replace with verified business information.
export const contact = {
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'care@luxora.example',
  hours: 'Mon – Sat, 10:00 am – 7:00 pm IST',
}

export const copyrightYear = 2025
