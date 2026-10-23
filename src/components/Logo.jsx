import { useId } from 'react'
import { Link } from 'react-router-dom'

// Floral emblem: eight petals around a faceted centre stone, drawn as fine gold line work.
export function LogoEmblem({ size = 44, className = '' }) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45)
  const gradientId = `lux-gold-${useId().replace(/[^\w-]/g, '')}`
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E3C58E" />
          <stop offset="0.5" stopColor="#C9A46A" />
          <stop offset="1" stopColor="#A7814A" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradientId})`} strokeWidth="1.15" strokeLinejoin="round">
        {petals.map((angle) => (
          <path key={angle} d="M24 24 C20.6 18.5 21 12.2 24 7.5 C27 12.2 27.4 18.5 24 24Z" transform={`rotate(${angle} 24 24)`} />
        ))}
        {petals.map((angle) => (
          <circle key={`d${angle}`} cx="24" cy="4.6" r="0.9" fill="#C9A46A" stroke="none" transform={`rotate(${angle + 22.5} 24 24)`} />
        ))}
        <circle cx="24" cy="24" r="5.2" fill="#fff" />
        <path d="M24 19.6 27.8 24 24 28.4 20.2 24Z" fill="#F4E7CF" />
        <path d="M20.2 24h7.6M24 19.6v8.8" strokeWidth="0.6" />
      </g>
    </svg>
  )
}

export default function Logo({ variant = 'dark', onClick }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label="Luxora Jewellery — home" onClick={onClick}>
      <LogoEmblem className="logo__emblem" />
      <span className="logo__text">
        <span className="logo__word">LUXORA</span>
        <span className="logo__sub">JEWELLERY</span>
      </span>
    </Link>
  )
}
