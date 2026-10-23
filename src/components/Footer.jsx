import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { contact, copyrightYear, footerColumns, legalLinks, socialLinks } from '../data/site'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'
import {
  FacebookIcon,
  InstagramIcon,
  MastercardMark,
  PinterestIcon,
  RupayMark,
  TwitterIcon,
  UpiMark,
  VisaMark,
  WhatsAppIcon,
  YoutubeIcon,
} from './BrandIcons'
import Logo from './Logo'

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  whatsapp: WhatsAppIcon,
  twitter: TwitterIcon,
  pinterest: PinterestIcon,
  youtube: YoutubeIcon,
}

const paymentMarks = [
  { id: 'visa', label: 'Visa', Mark: VisaMark },
  { id: 'mastercard', label: 'Mastercard', Mark: MastercardMark },
  { id: 'rupay', label: 'RuPay', Mark: RupayMark },
  { id: 'upi', label: 'UPI', Mark: UpiMark },
]

export default function Footer() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '.footer__col', { trigger: scope.current, y: 20, stagger: 0.08, start: 'top 92%' })
      })
    },
    { scope },
  )

  return (
    <footer ref={scope} className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <Logo variant="light" />
          <p>Exquisite jewellery crafted with passion, precision and timeless elegance.</p>
          <ul className="social" aria-label="Social media">
            {socialLinks.map(({ id, label, href }) => {
              const Icon = socialIcons[id]
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    data-platform={id}
                  >
                    <Icon size={16} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} className="footer__col" aria-label={column.title}>
            <h2 className="footer__heading">{column.title}</h2>
            <ul className="footer__links">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer__col footer__contact">
          <h2 className="footer__heading">Contact Info</h2>
          <ul className="footer__contact-list">
            <li>
              <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Clock size={15} strokeWidth={1.5} aria-hidden="true" />
              <span>{contact.hours}</span>
            </li>
            <li>
              <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
              <Link to="/store-locator">Find a boutique</Link>
            </li>
          </ul>
          <h2 className="footer__heading footer__heading--sub">We Accept</h2>
          <ul className="payments" aria-label="Accepted payment methods">
            {paymentMarks.map(({ id, label, Mark }) => (
              <li key={id} className="payments__badge" title={label}>
                <Mark />
                <span className="sr-only">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {copyrightYear} Luxora Jewellery. All Rights Reserved.</p>
          <p className="footer__credit">
            Made by <span className="footer__credit-name">wolvoinfotech</span>
          </p>
          <ul className="footer__legal">
            {legalLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
