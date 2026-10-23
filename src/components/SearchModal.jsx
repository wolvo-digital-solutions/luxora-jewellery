import { useMemo, useState } from 'react'
import { ArrowRight, Search, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { categories } from '../data/categories'
import { formatPrice, products } from '../data/products'
import useOverlay from '../hooks/useOverlay'
import { useUI } from '../hooks/useStore'
import { matchesQuery } from '../lib/search'

export default function SearchModal() {
  const { searchOpen, closeSearch } = useUI()
  const panelRef = useOverlay(searchOpen, closeSearch)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const results = useMemo(() => (query.trim() ? products.filter((p) => matchesQuery(p, query)).slice(0, 6) : []), [query])

  const close = () => {
    closeSearch()
    setQuery('')
  }

  const submit = (event) => {
    event.preventDefault()
    if (!query.trim()) return
    navigate(`/collections?q=${encodeURIComponent(query.trim())}`)
    close()
  }

  return (
    <div className={`overlay overlay--top${searchOpen ? ' is-open' : ''}`} aria-hidden={!searchOpen} inert={!searchOpen}>
      <div className="overlay__scrim" onClick={close} />
      <div ref={panelRef} className="search-panel" role="dialog" aria-modal="true" aria-label="Search">
        <form className="search-panel__form" role="search" onSubmit={submit}>
          <Search size={20} strokeWidth={1.5} aria-hidden="true" />
          <label htmlFor="site-search" className="sr-only">
            Search jewellery
          </label>
          <input
            id="site-search"
            data-autofocus
            type="search"
            autoComplete="off"
            placeholder="Search necklaces, jhumkas, solitaires…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="button" className="icon-btn" aria-label="Close search" onClick={close}>
            <X size={22} strokeWidth={1.5} />
          </button>
        </form>

        <div className="search-panel__body" aria-live="polite">
          {!query.trim() && (
            <div className="search-suggest">
              <p className="eyebrow">Popular Categories</p>
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link to={`/collections?category=${category.id}`} onClick={close}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <p className="search-empty">No pieces match &ldquo;{query}&rdquo;. Try &ldquo;ring&rdquo; or &ldquo;gold&rdquo;.</p>
          )}

          {results.length > 0 && (
            <>
              <ul className="search-results">
                {results.map((product) => (
                  <li key={product.id}>
                    <Link to={`/product/${product.id}`} onClick={close}>
                      <img src={product.image} alt="" style={{ objectPosition: product.imagePosition }} />
                      <span className="search-results__name">{product.name}</span>
                      <span className="search-results__price">{formatPrice(product.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button type="submit" className="btn btn--link" onClick={submit}>
                See all results <ArrowRight size={15} aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
