import { Star } from 'lucide-react'

// Ratings in this build are sample values, so the label says so for screen readers.
export default function StarRating({ value, size = 13 }) {
  return (
    <span className="stars" role="img" aria-label={`Sample rating: ${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} strokeWidth={1.4} className={i < value ? 'is-filled' : ''} aria-hidden="true" />
      ))}
    </span>
  )
}
