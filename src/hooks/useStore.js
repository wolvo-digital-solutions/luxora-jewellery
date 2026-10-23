import { useContext } from 'react'
import { CartContext, UIContext, WishlistContext } from '../context/contexts'

const useRequiredContext = (context, name) => {
  const value = useContext(context)
  if (!value) throw new Error(`${name} must be used inside <StoreProvider>`)
  return value
}

export const useCart = () => useRequiredContext(CartContext, 'useCart')
export const useWishlist = () => useRequiredContext(WishlistContext, 'useWishlist')
export const useUI = () => useRequiredContext(UIContext, 'useUI')
