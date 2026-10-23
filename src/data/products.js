import royalHeritageNecklace from '../assets/images/royal-heritage-necklace.jpg'
import diamondJhumkaEarrings from '../assets/images/diamond-jhumka-earrings.jpg'
import elegantSolitaireRing from '../assets/images/elegant-solitaire-ring.jpg'
import classicDiamondBracelet from '../assets/images/classic-diamond-bracelet.jpg'
import antiqueBridalNecklace from '../assets/images/antique-bridal-necklace.jpg'
import kundanPolkiNecklace from '../assets/images/kundan-polki-necklace.jpg'
import templeGoldJhumkas from '../assets/images/temple-gold-jhumkas.jpg'
import goldenDropEarrings from '../assets/images/golden-drop-earrings.jpg'
import pinkSapphireHaloRing from '../assets/images/pink-sapphire-halo-ring.jpg'
import pearHaloDiamondRing from '../assets/images/pear-halo-diamond-ring.jpg'
import paperclipGoldBracelet from '../assets/images/paperclip-gold-bracelet.jpg'
import diamondKadaPair from '../assets/images/diamond-kada-pair.jpg'
import diamondBarPendant from '../assets/images/diamond-bar-pendant.jpg'
import heartCharmPendant from '../assets/images/heart-charm-pendant.jpg'
import teardropGoldPendant from '../assets/images/teardrop-gold-pendant.jpg'
import goldChainAnklet from '../assets/images/gold-chain-anklet.jpg'
import silverPayalAnklets from '../assets/images/silver-payal-anklets.jpg'
import oxidisedSilverJhumkas from '../assets/images/oxidised-silver-jhumkas.jpg'
import silverTempleNecklace from '../assets/images/silver-temple-necklace.jpg'
import sterlingPaveBand from '../assets/images/sterling-pave-band.jpg'

// Demonstration catalogue. Ratings are sample values for layout purposes,
// not verified customer reviews.
export const products = [
  {
    id: 'royal-heritage-necklace-set',
    name: 'Royal Heritage Necklace Set',
    category: 'necklaces',
    collections: ['bridal', 'festive'],
    price: 175000,
    rating: 5,
    image: royalHeritageNecklace,
    imagePosition: '50% 45%',
    metal: '22K Yellow Gold',
    stones: 'Pink stones, pearls & CZ',
    description:
      'A regal bridal set with a cascading pearl fringe and a pink-stone centrepiece, finished by hand in 22K gold.',
    bestseller: true,
    added: 12,
  },
  {
    id: 'diamond-jhumka-earrings',
    name: 'Diamond Jhumka Earrings',
    category: 'earrings',
    collections: ['festive', 'bridal'],
    price: 78500,
    rating: 5,
    image: diamondJhumkaEarrings,
    imagePosition: '50% 50%',
    metal: '22K Yellow Gold',
    stones: 'Pink stones & diamonds',
    description:
      'Traditional bell jhumkas with pink-stone accents and fine granulation work, light enough for all-day wear.',
    bestseller: true,
    added: 11,
  },
  {
    id: 'elegant-solitaire-ring',
    name: 'Elegant Solitaire Ring',
    category: 'rings',
    collections: ['diamond', 'everyday'],
    price: 45000,
    rating: 5,
    image: elegantSolitaireRing,
    imagePosition: '50% 50%',
    metal: '18K Yellow Gold',
    stones: 'Emerald-cut diamond',
    description:
      'An emerald-cut solitaire raised on a slim pavé band — understated, luminous and made to be worn every day.',
    bestseller: true,
    added: 10,
  },
  {
    id: 'classic-diamond-bracelet',
    name: 'Classic Diamond Bracelet',
    category: 'bracelets',
    collections: ['diamond', 'everyday'],
    price: 125000,
    rating: 5,
    image: classicDiamondBracelet,
    imagePosition: '50% 50%',
    metal: '18K Rose Gold',
    stones: 'Diamonds & pink stones',
    description:
      'A delicate openwork bracelet set with diamonds and blush-pink stones, secured with a hidden box clasp.',
    bestseller: true,
    added: 9,
  },
  {
    id: 'antique-bridal-necklace',
    name: 'Antique Gold Bridal Necklace',
    category: 'necklaces',
    collections: ['bridal', 'temple'],
    price: 210000,
    rating: 5,
    image: antiqueBridalNecklace,
    imagePosition: '50% 40%',
    metal: '22K Yellow Gold',
    stones: 'None',
    description:
      'A sculpted antique-finish necklace with matching drop earrings, inspired by heirloom bridal jewellery.',
    added: 8,
  },
  {
    id: 'kundan-polki-necklace',
    name: 'Kundan Polki Necklace',
    category: 'necklaces',
    collections: ['bridal', 'festive'],
    price: 148000,
    rating: 4,
    image: kundanPolkiNecklace,
    imagePosition: '50% 60%',
    metal: '22K Yellow Gold',
    stones: 'Polki & kundan',
    description:
      'Kundan-set polki medallions on a fine gold chain, paired with matching jhumkas for festive occasions.',
    added: 15,
  },
  {
    id: 'temple-gold-jhumkas',
    name: 'Temple Gold Jhumkas',
    category: 'earrings',
    collections: ['temple', 'festive'],
    price: 62000,
    rating: 5,
    image: templeGoldJhumkas,
    imagePosition: '50% 50%',
    metal: '22K Yellow Gold',
    stones: 'None',
    description:
      'Paisley-motif temple jhumkas with granulated domes, crafted in the South Indian temple tradition.',
    added: 7,
  },
  {
    id: 'golden-drop-earrings',
    name: 'Golden Drop Earrings',
    category: 'earrings',
    collections: ['everyday'],
    price: 28000,
    rating: 4,
    image: goldenDropEarrings,
    imagePosition: '50% 55%',
    metal: '18K Yellow Gold',
    stones: 'None',
    description: 'Sculptural high-polish teardrops — a modern everyday staple.',
    added: 14,
  },
  {
    id: 'pink-sapphire-halo-ring',
    name: 'Pink Sapphire Halo Ring',
    category: 'rings',
    collections: ['diamond'],
    price: 58500,
    rating: 5,
    image: pinkSapphireHaloRing,
    imagePosition: '50% 50%',
    metal: '18K Rose Gold',
    stones: 'Pink sapphire & diamonds',
    description:
      'A cushion-cut pink sapphire framed in a diamond halo on a rose-gold pavé band.',
    added: 13,
  },
  {
    id: 'pear-halo-diamond-ring',
    name: 'Pear Halo Diamond Ring',
    category: 'rings',
    collections: ['diamond', 'bridal'],
    price: 92000,
    rating: 5,
    image: pearHaloDiamondRing,
    imagePosition: '50% 50%',
    metal: '18K White Gold',
    stones: 'Diamonds',
    description:
      'A pear-shaped centre stone wrapped in a double halo — a modern engagement classic.',
    added: 6,
  },
  {
    id: 'paperclip-gold-bracelet',
    name: 'Paperclip Gold Bracelet',
    category: 'bracelets',
    collections: ['everyday'],
    price: 54000,
    rating: 4,
    image: paperclipGoldBracelet,
    imagePosition: '50% 60%',
    metal: '18K Yellow Gold',
    stones: 'None',
    description: 'Elongated paperclip links with a toggle clasp, designed for stacking.',
    added: 5,
  },
  {
    id: 'diamond-kada-pair',
    name: 'Diamond Kada Pair',
    category: 'bangles',
    collections: ['bridal', 'diamond'],
    price: 168000,
    rating: 5,
    image: diamondKadaPair,
    imagePosition: '50% 55%',
    metal: '18K Yellow Gold',
    stones: 'Diamonds',
    description:
      'A pair of openable kadas with scalloped diamond detailing, made to be worn together or apart.',
    added: 4,
  },
  {
    id: 'diamond-bar-pendant',
    name: 'Diamond Bar Pendant',
    category: 'pendants',
    collections: ['diamond', 'everyday'],
    price: 38000,
    rating: 5,
    image: diamondBarPendant,
    imagePosition: '50% 55%',
    metal: '18K Rose Gold',
    stones: 'Diamonds',
    description: 'A slim rectangular pendant set with two rows of diamonds on a box chain.',
    added: 3,
  },
  {
    id: 'heart-charm-pendant',
    name: 'Heart Charm Pendant',
    category: 'pendants',
    collections: ['everyday'],
    price: 24500,
    rating: 4,
    image: heartCharmPendant,
    imagePosition: '50% 50%',
    metal: '18K Yellow Gold',
    stones: 'Coloured stones',
    description: 'An open heart pendant threaded with removable charm beads.',
    added: 2,
  },
  {
    id: 'teardrop-gold-pendant',
    name: 'Teardrop Gold Pendant',
    category: 'pendants',
    collections: ['everyday'],
    price: 32000,
    rating: 5,
    image: teardropGoldPendant,
    imagePosition: '50% 45%',
    metal: '18K Yellow Gold',
    stones: 'Diamond',
    description: 'A softly domed teardrop pendant with a single bezel-set diamond.',
    added: 1,
  },
  {
    id: 'gold-chain-anklet',
    name: 'Gold Chain Anklet',
    category: 'anklets',
    collections: ['everyday'],
    price: 36000,
    rating: 5,
    image: goldChainAnklet,
    imagePosition: '55% 55%',
    metal: '18K Yellow Gold',
    stones: 'None',
    description: 'A fine curb-link anklet with an extender chain, light enough to wear every day.',
    added: 20,
  },
  {
    id: 'silver-payal-anklets',
    name: 'Silver Payal Anklets',
    category: 'anklets',
    collections: ['silver', 'festive'],
    price: 8500,
    rating: 5,
    image: silverPayalAnklets,
    imagePosition: '50% 80%',
    metal: '925 Sterling Silver',
    stones: 'None',
    description: 'A pair of traditional payals with delicate ghungroo bells, finished in polished sterling silver.',
    added: 19,
  },
  {
    id: 'oxidised-silver-jhumkas',
    name: 'Oxidised Silver Jhumkas',
    category: 'earrings',
    collections: ['silver', 'festive'],
    price: 6800,
    rating: 5,
    image: oxidisedSilverJhumkas,
    imagePosition: '50% 50%',
    metal: '925 Sterling Silver',
    stones: 'Freshwater pearls',
    description: 'Two-tone oxidised silver jhumkas edged with a fringe of seed pearls.',
    added: 18,
  },
  {
    id: 'silver-temple-necklace',
    name: 'Silver Temple Necklace Set',
    category: 'necklaces',
    collections: ['silver', 'temple'],
    price: 14500,
    rating: 4,
    image: silverTempleNecklace,
    imagePosition: '50% 50%',
    metal: '925 Sterling Silver',
    stones: 'Green & pink stones',
    description: 'A long temple-motif silver necklace with layered stone strands and matching earrings.',
    added: 17,
  },
  {
    id: 'sterling-pave-band',
    name: 'Sterling Pavé Band',
    category: 'rings',
    collections: ['silver', 'everyday'],
    price: 5400,
    rating: 5,
    image: sterlingPaveBand,
    imagePosition: '50% 50%',
    metal: '925 Sterling Silver',
    stones: 'Cubic zirconia',
    description: 'A crossover band with two rows of pavé-set stones in rhodium-finished sterling silver.',
    added: 16,
  },
]

export const bestsellers = products.filter((product) => product.bestseller)

export const getProduct = (id) => products.find((product) => product.id === id)

// Gold and white gold count as gold; sterling pieces as silver.
export const getMetalType = (product) => (/silver/i.test(product.metal) ? 'silver' : 'gold')

const rupee = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export const formatPrice = (value) => rupee.format(value)

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

export const priceRanges = [
  { value: 'all', label: 'All prices', min: 0, max: Infinity },
  { value: 'under-50k', label: 'Under ₹50,000', min: 0, max: 50000 },
  { value: '50k-1l', label: '₹50,000 – ₹1,00,000', min: 50000, max: 100000 },
  { value: 'above-1l', label: 'Above ₹1,00,000', min: 100000, max: Infinity },
]
