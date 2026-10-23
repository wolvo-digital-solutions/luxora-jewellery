import { useMemo, useRef, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import { categories, collections, getCategory, getCollection, getMetal, metals } from '../data/categories'
import { getMetalType, priceRanges, products, sortOptions } from '../data/products'
import { MOTION_OK, gsap, useGSAP } from '../lib/gsap'
import { matchesQuery } from '../lib/search'

const sorters = {
  featured: (a, b) => Number(Boolean(b.bestseller)) - Number(Boolean(a.bestseller)),
  newest: (a, b) => b.added - a.added,
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
}

export default function Collections() {
  const [params, setParams] = useSearchParams()
  const gridRef = useRef(null)
  const [filtersOpen] = useState(() => window.matchMedia('(min-width: 1024px)').matches)
  const category = params.get('category') ?? 'all'
  const collection = params.get('collection') ?? 'all'
  const price = params.get('price') ?? 'all'
  const metal = params.get('metal') ?? 'all'
  const sort = sorters[params.get('sort')] ? params.get('sort') : 'featured'
  const query = params.get('q') ?? ''

  const setParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'all' || (key === 'sort' && value === 'featured')) next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const results = useMemo(() => {
    const range = priceRanges.find((r) => r.value === price) ?? priceRanges[0]
    return products
      .filter((p) => category === 'all' || p.category === category)
      .filter((p) => collection === 'all' || p.collections.includes(collection))
      .filter((p) => metal === 'all' || getMetalType(p) === metal)
      .filter((p) => p.price >= range.min && p.price < range.max)
      .filter((p) => !query || matchesQuery(p, query))
      .sort(sorters[sort])
  }, [category, collection, metal, price, sort, query])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.from(gridRef.current.children, { autoAlpha: 0, y: 24, duration: 0.6, stagger: 0.05, ease: 'power3.out', clearProps: 'transform' })
      })
    },
    { dependencies: [results], scope: gridRef },
  )

  const activeCategory = getCategory(category)
  const activeCollection = getCollection(collection)
  const activeMetal = getMetal(metal)
  const title = query ? `Results for “${query}”` : activeCategory?.name ?? activeCollection?.name ?? (activeMetal ? `${activeMetal.name} Jewellery` : 'All Jewellery')
  const hasFilters = category !== 'all' || collection !== 'all' || metal !== 'all' || price !== 'all' || query

  return (
    <>
      <PageHeader eyebrow={activeCollection && activeCategory ? activeCollection.name : 'Luxora Collections'} title={title} crumbs={[{ label: 'Collections', to: '/collections' }]} />
      <div className="container collection">
        <aside className="filters" aria-label="Filters">
          <details className="filters__panel" open={filtersOpen}>
            <summary>
              <SlidersHorizontal size={16} strokeWidth={1.5} aria-hidden="true" /> Filters
            </summary>
            <fieldset>
              <legend>Category</legend>
              {[{ id: 'all', name: 'All Jewellery' }, ...categories].map((c) => (
                <label key={c.id} className="choice">
                  <input type="radio" name="category" checked={category === c.id} onChange={() => setParam('category', c.id)} />
                  <span>{c.name}</span>
                </label>
              ))}
            </fieldset>
            <fieldset>
              <legend>Collection</legend>
              {[{ id: 'all', name: 'All Collections' }, ...collections].map((c) => (
                <label key={c.id} className="choice">
                  <input type="radio" name="collection" checked={collection === c.id} onChange={() => setParam('collection', c.id)} />
                  <span>{c.name}</span>
                </label>
              ))}
            </fieldset>
            <fieldset>
              <legend>Metal</legend>
              {[{ id: 'all', name: 'All Metals' }, ...metals].map((m) => (
                <label key={m.id} className="choice">
                  <input type="radio" name="metal" checked={metal === m.id} onChange={() => setParam('metal', m.id)} />
                  <span>{m.name}</span>
                </label>
              ))}
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              {priceRanges.map((r) => (
                <label key={r.value} className="choice">
                  <input type="radio" name="price" checked={price === r.value} onChange={() => setParam('price', r.value)} />
                  <span>{r.label}</span>
                </label>
              ))}
            </fieldset>
          </details>
        </aside>

        <div className="collection__main">
          <div className="toolbar">
            <p className="toolbar__count" aria-live="polite">
              {results.length} {results.length === 1 ? 'piece' : 'pieces'}
            </p>
            {hasFilters && (
              <Link to="/collections" className="chip">
                Clear filters <X size={13} aria-hidden="true" />
              </Link>
            )}
            <label className="toolbar__sort">
              <span>Sort by</span>
              <select value={sort} onChange={(event) => setParam('sort', event.target.value)}>
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {results.length ? (
            <div ref={gridRef} className="product-grid product-grid--collection">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div ref={gridRef} className="empty-state empty-state--page">
              <p className="empty-state__title">No pieces match these filters</p>
              <p>Try a different category or price range.</p>
              <Link to="/collections" className="btn btn--primary">
                View All Jewellery
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
