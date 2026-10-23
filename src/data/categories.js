import necklaces from '../assets/images/cat-necklaces.jpg'
import earrings from '../assets/images/cat-earrings.jpg'
import rings from '../assets/images/cat-rings.jpg'
import bracelets from '../assets/images/cat-bracelets.jpg'
import pendants from '../assets/images/cat-pendants.jpg'
import bangles from '../assets/images/cat-bangles.jpg'
import anklets from '../assets/images/cat-anklets.jpg'
import bridal from '../assets/images/royal-heritage-necklace.jpg'
import festive from '../assets/images/kundan-polki-necklace.jpg'
import diamond from '../assets/images/pear-halo-diamond-ring.jpg'
import temple from '../assets/images/temple-gold-jhumkas.jpg'
import everyday from '../assets/images/paperclip-gold-bracelet.jpg'
import silver from '../assets/images/oxidised-silver-jhumkas.jpg'

export const categories = [
  { id: 'necklaces', name: 'Necklaces', image: necklaces, imagePosition: '50% 40%' },
  { id: 'earrings', name: 'Earrings', image: earrings, imagePosition: '50% 35%' },
  { id: 'rings', name: 'Rings', image: rings, imagePosition: '50% 50%' },
  { id: 'bracelets', name: 'Bracelets', image: bracelets, imagePosition: '50% 55%' },
  { id: 'pendants', name: 'Pendants', image: pendants, imagePosition: '45% 60%' },
  { id: 'bangles', name: 'Bangles', image: bangles, imagePosition: '50% 50%' },
  { id: 'anklets', name: 'Anklets', image: anklets, imagePosition: '45% 78%' },
]

export const collections = [
  { id: 'bridal', name: 'Bridal Collection', short: 'Bridal', blurb: 'Heirloom pieces for the big day', image: bridal, imagePosition: '50% 65%' },
  { id: 'festive', name: 'Festive Edit', short: 'Festive', blurb: 'Statement gold for celebrations', image: festive, imagePosition: '50% 60%' },
  { id: 'diamond', name: 'Diamond Studio', short: 'Diamond', blurb: 'Brilliance, beautifully set', image: diamond, imagePosition: '50% 50%' },
  { id: 'temple', name: 'Temple Heritage', short: 'Temple', blurb: 'South Indian temple craft', image: temple, imagePosition: '50% 50%' },
  { id: 'silver', name: 'Sterling Silver', short: 'Silver', blurb: 'Oxidised and polished 925 silver', image: silver, imagePosition: '50% 55%' },
  { id: 'everyday', name: 'Everyday Luxe', short: 'Everyday', blurb: 'Light pieces for daily wear', image: everyday, imagePosition: '50% 60%' },
]

export const metals = [
  { id: 'gold', name: 'Gold' },
  { id: 'silver', name: 'Silver' },
]

export const getCategory = (id) => categories.find((category) => category.id === id)
export const getCollection = (id) => collections.find((collection) => collection.id === id)
export const getMetal = (id) => metals.find((metal) => metal.id === id)
