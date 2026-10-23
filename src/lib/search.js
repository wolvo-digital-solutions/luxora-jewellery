const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const matchesQuery = (product, query) => {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  const haystack = `${product.name} ${product.category} ${product.metal} ${product.stones} ${product.collections.join(' ')}`.toLowerCase()
  // Match at the start of a word ("ring" finds rings, not earrings); trailing "s" is optional.
  return terms.every((term) => new RegExp(`\\b${escapeRegExp(term.replace(/s$/, ''))}`).test(haystack))
}
