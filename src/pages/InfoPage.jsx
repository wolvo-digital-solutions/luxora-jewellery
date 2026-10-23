import { useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { contact } from '../data/site'
import NotFound from './NotFound'

// Demonstration copy for the secondary pages. Policies, addresses and contact
// details must be replaced with verified business information before launch.
const pages = {
  about: {
    eyebrow: 'Our Story',
    title: 'About Luxora',
    body: [
      'Luxora Jewellery brings together India’s heirloom craft traditions — kundan, polki, temple work and fine diamond setting — with a modern sensibility.',
      'Every piece is designed in-house and finished by hand, then certified BIS Hallmarked so you can wear it with confidence for generations.',
    ],
  },
  blog: {
    eyebrow: 'The Journal',
    title: 'Blog',
    posts: [
      { title: 'How to choose bridal jewellery for your lehenga', date: 'Coming soon' },
      { title: 'Kundan vs polki: understanding the difference', date: 'Coming soon' },
      { title: 'Caring for your gold and diamond jewellery', date: 'Coming soon' },
    ],
  },
  contact: { eyebrow: 'We’re Here to Help', title: 'Contact Us', widget: 'contact' },
  'track-order': { eyebrow: 'Customer Service', title: 'Track Order', widget: 'track' },
  'store-locator': {
    eyebrow: 'Visit Us',
    title: 'Store Locator',
    body: ['Our boutique directory is being prepared. Until then, our team can arrange a private video consultation — call or email us to book.'],
    widget: 'details',
  },
  shipping: {
    eyebrow: 'Customer Service',
    title: 'Shipping & Delivery',
    body: [
      'Free insured shipping on all orders across India.',
      'Ready-to-ship pieces are typically dispatched within 2–3 business days; made-to-order pieces are confirmed at the time of purchase.',
    ],
  },
  returns: {
    eyebrow: 'Customer Service',
    title: 'Returns & Exchange',
    body: [
      '15-day returns on eligible, unworn pieces in their original packaging.',
      'Lifetime exchange or upgrade on gold jewellery at the prevailing gold rate, subject to inspection.',
    ],
  },
  faq: {
    eyebrow: 'Customer Service',
    title: "FAQ's",
    faqs: [
      ['Is all Luxora jewellery hallmarked?', 'Yes. Every gold piece carries BIS hallmarking.'],
      ['Do you ship internationally?', 'We currently ship within India only.'],
      ['Can I resize a ring?', 'Most rings can be resized once free of charge within 30 days of delivery.'],
    ],
  },
  'size-guide': {
    eyebrow: 'Customer Service',
    title: 'Size Guide',
    sizes: [
      ['8', '15.6 mm', '49 mm'],
      ['10', '16.2 mm', '51 mm'],
      ['12', '16.9 mm', '53 mm'],
      ['14', '17.5 mm', '55 mm'],
      ['16', '18.2 mm', '57 mm'],
    ],
  },
  privacy: {
    eyebrow: 'Information',
    title: 'Privacy Policy',
    body: ['This demonstration site stores your bag and wishlist only in your own browser. No personal data is sent to a server.'],
  },
  terms: {
    eyebrow: 'Information',
    title: 'Terms & Conditions',
    body: ['Prices, products and policies shown on this demonstration site are illustrative and do not constitute an offer for sale.'],
  },
}

function ContactDetails() {
  return (
    <ul className="contact-list">
      <li>
        <Phone size={18} strokeWidth={1.3} aria-hidden="true" /> <a href={contact.phoneHref}>{contact.phone}</a>
      </li>
      <li>
        <Mail size={18} strokeWidth={1.3} aria-hidden="true" /> <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </li>
      <li>
        <Clock size={18} strokeWidth={1.3} aria-hidden="true" /> {contact.hours}
      </li>
      <li>
        <MapPin size={18} strokeWidth={1.3} aria-hidden="true" /> Boutique addresses coming soon
      </li>
    </ul>
  )
}

function DemoForm({ fields, submitLabel, notice }) {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const onSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const missing = fields.find((f) => f.required && !String(data.get(f.name) ?? '').trim())
    if (missing) {
      setError(`Please fill in ${missing.label.toLowerCase()}.`)
      setSent(false)
      return
    }
    setError('')
    setSent(true)
  }
  return (
    <form className="demo-form" noValidate onSubmit={onSubmit}>
      {fields.map((f) => (
        <div key={f.name} className="field">
          <label htmlFor={`f-${f.name}`}>{f.label}</label>
          {f.type === 'textarea' ? (
            <textarea id={`f-${f.name}`} name={f.name} rows={4} />
          ) : (
            <input id={`f-${f.name}`} name={f.name} type={f.type ?? 'text'} autoComplete={f.autoComplete} />
          )}
        </div>
      ))}
      <button type="submit" className="btn btn--primary">
        {submitLabel}
      </button>
      <p className={`form-note ${error ? 'form-note--error' : 'form-note--info'}`} role="status">
        {error || (sent ? notice : '')}
      </p>
    </form>
  )
}

export default function InfoPage() {
  const slug = useLocation().pathname.replace(/^\//, '')
  const page = pages[slug]
  if (!page) return <NotFound />

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} crumbs={[{ label: page.title }]} />
      <div className="container page-body prose">
        {page.body?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {page.posts && (
          <ul className="post-list">
            {page.posts.map((post) => (
              <li key={post.title}>
                <span className="eyebrow">{post.date}</span>
                <h2>{post.title}</h2>
              </li>
            ))}
          </ul>
        )}

        {page.faqs?.map(([q, a]) => (
          <details key={q} className="faq">
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}

        {page.sizes && (
          <table className="size-table">
            <caption>Ring sizes (Indian standard)</caption>
            <thead>
              <tr>
                <th scope="col">Size</th>
                <th scope="col">Diameter</th>
                <th scope="col">Circumference</th>
              </tr>
            </thead>
            <tbody>
              {page.sizes.map(([size, diameter, circumference]) => (
                <tr key={size}>
                  <td>{size}</td>
                  <td>{diameter}</td>
                  <td>{circumference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {page.widget === 'details' && <ContactDetails />}

        {page.widget === 'contact' && (
          <div className="split">
            <ContactDetails />
            <DemoForm
              submitLabel="Send Message"
              notice="Thanks! Messaging isn’t connected in this demo, so nothing was sent — please call or email us instead."
              fields={[
                { name: 'name', label: 'Your name', required: true, autoComplete: 'name' },
                { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
                { name: 'message', label: 'Message', type: 'textarea', required: true },
              ]}
            />
          </div>
        )}

        {page.widget === 'track' && (
          <DemoForm
            submitLabel="Track Order"
            notice="Order tracking isn’t connected in this demo, so we can’t look up live order status yet."
            fields={[
              { name: 'order', label: 'Order number', required: true },
              { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
            ]}
          />
        )}

        <p className="prose__back">
          <Link to="/collections" className="link-arrow">
            Continue shopping
          </Link>
        </p>
      </div>
    </>
  )
}
