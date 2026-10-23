import aboutDisplay from '../assets/images/about-display.jpg'
import aboutInset from '../assets/images/about-inset.jpg'
import goldCollection from '../assets/images/gold-collection.jpg'
import silverCollection from '../assets/images/silver-collection.jpg'
import featuredDiamond from '../assets/images/featured-diamond.jpg'
import whyModel from '../assets/images/why-model.jpg'
import galleryWrist from '../assets/images/gallery-wrist.jpg'
import galleryBangles from '../assets/images/gallery-bangles.jpg'
import galleryRubyKada from '../assets/images/gallery-ruby-kada.jpg'
import galleryPinkRing from '../assets/images/gallery-pink-ring.jpg'
import galleryFlowerEarrings from '../assets/images/gallery-flower-earrings.jpg'
import promoBlush from '../assets/images/promo-blush.jpg'
import giftLifestyle from '../assets/images/gift-lifestyle.jpg'
import giftPearls from '../assets/images/gift-pearls.jpg'
import giftPinkBox from '../assets/images/gift-pink-box.jpg'
import trendGold from '../assets/images/trend-gold.jpg'
import trendDiamond from '../assets/images/trend-diamond.jpg'
import trendSilver from '../assets/images/trend-silver.jpg'
import trendContemporary from '../assets/images/trend-contemporary.jpg'

// Homepage editorial content. Brand claims here are kept to what the site itself
// offers; replace copy with verified business details before launch.

export const about = {
  image: aboutDisplay,
  inset: aboutInset,
  points: ['Heirloom techniques, refined for today', 'Designs for weddings, festivals and every day', 'Personal styling help, online or by phone'],
}

export const metalCards = [
  {
    id: 'gold',
    title: 'Gold',
    text: 'Hallmarked 22K and 18K gold, from temple heirlooms to light everyday pieces.',
    image: goldCollection,
    imagePosition: '50% 50%',
    to: '/collections?metal=gold',
  },
  {
    id: 'silver',
    title: 'Silver',
    text: 'Oxidised and polished sterling silver — jhumkas, payals and statement sets.',
    image: silverCollection,
    imagePosition: '50% 35%',
    to: '/collections?metal=silver',
  },
]

export const featuredCard = {
  eyebrow: 'Featured',
  title: 'The Diamond Studio',
  text: 'Solitaires, halos and bracelets set to let every stone catch the light.',
  image: featuredDiamond,
  imagePosition: '50% 40%',
  to: '/collections?collection=diamond',
}

export const why = {
  image: whyModel,
  points: [
    {
      title: 'Exceptional Craftsmanship',
      text: 'Each piece is finished by hand, balancing traditional technique with a light, wearable fit.',
    },
    {
      title: 'Honest, Transparent Pricing',
      text: 'Prices show the metal, stones and craftsmanship behind each piece, so there are no hidden extras.',
    },
  ],
}

export const promises = [
  { id: 'craft', icon: 'Sparkles', title: 'Exquisite Craftsmanship', text: 'Considered details, careful finishing and designs made to be worn for years.' },
  { id: 'pricing', icon: 'BadgeIndianRupee', title: 'Transparent Pricing', text: 'The price you see is the price you pay, with taxes shown at checkout.' },
  { id: 'service', icon: 'HeartHandshake', title: 'Personalised Service', text: 'Help choosing sizes, sets and gifts from our styling team.' },
  { id: 'trust', icon: 'ShieldCheck', title: 'Lasting Trust', text: 'BIS hallmarked gold, secure checkout and easy returns.' },
]

export const promo = {
  eyebrow: 'Special Collection',
  title: 'The Blush Edit',
  text: 'Pink sapphires, rose gold and softly coloured stones — pieces that glow with the palest blush of colour.',
  image: promoBlush,
  to: '/collections?q=pink',
  cta: 'Shop the Edit',
}

export const gallery = [
  { id: 'wrist', image: galleryWrist, alt: 'Gold bracelet worn on the wrist', label: 'Bracelets', to: '/collections?category=bracelets', imagePosition: '45% 55%' },
  { id: 'bangles', image: galleryBangles, alt: 'Gold and diamond bangles resting on a carved box', label: 'Bangles', to: '/collections?category=bangles', imagePosition: '50% 50%' },
  { id: 'ring', image: galleryPinkRing, alt: 'Rose gold ring with a pink stone', label: 'Rings', to: '/collections?category=rings', imagePosition: '50% 50%' },
  { id: 'earrings', image: galleryFlowerEarrings, alt: 'Pink enamel flower earrings', label: 'Earrings', to: '/collections?category=earrings', imagePosition: '50% 45%' },
  { id: 'kada', image: galleryRubyKada, alt: 'Ruby-set gold kada with filigree detail', label: 'Statement Gold', to: '/collections?metal=gold', imagePosition: '50% 50%' },
]

export const gifting = {
  lifestyle: giftLifestyle,
  small: [
    { image: giftPinkBox, alt: 'Pink crystal earrings and pendant in a gift box', imagePosition: '50% 55%' },
    { image: giftPearls, alt: 'Pearl necklace in a presentation box', imagePosition: '50% 50%' },
  ],
}

export const trending = [
  { id: 'gold', title: 'Gold Jewellery', image: trendGold, imagePosition: '50% 55%', to: '/collections?metal=gold' },
  { id: 'diamond', title: 'Diamond Jewellery', image: trendDiamond, imagePosition: '50% 50%', to: '/collections?collection=diamond' },
  { id: 'silver', title: 'Silver Jewellery', image: trendSilver, imagePosition: '50% 60%', to: '/collections?metal=silver' },
  { id: 'contemporary', title: 'Contemporary Designs', image: trendContemporary, imagePosition: '50% 40%', to: '/collections?collection=everyday' },
]

// Demonstration testimonials only — shown with a visible "sample" label and no
// star ratings until genuine customer reviews are collected.
export const testimonials = [
  { id: 't1', quote: 'The bridal set was even more beautiful in person, and the team helped me pair earrings with my lehenga.', name: 'Ananya', place: 'Bengaluru' },
  { id: 't2', quote: 'Clear pricing and a lovely unboxing. The pendant I bought for my mother is now her everyday piece.', name: 'Rohan', place: 'Pune' },
  { id: 't3', quote: 'I was unsure about ring sizing, and the size guide plus a quick call sorted it in minutes.', name: 'Meera', place: 'Chennai' },
  { id: 't4', quote: 'The silver jhumkas are light enough for a full day of celebrations. Already planning my next order.', name: 'Ishita', place: 'Jaipur' },
  { id: 't5', quote: 'Elegant packaging and a handwritten note made it a perfect anniversary gift.', name: 'Kabir', place: 'Mumbai' },
  { id: 't6', quote: 'Beautiful finishing on the temple jhumkas — exactly the traditional look I wanted.', name: 'Lakshmi', place: 'Kochi' },
]
