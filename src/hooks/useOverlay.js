import { useEffect, useRef } from 'react'

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea, [tabindex]:not([tabindex="-1"])'

let lockCount = 0

/**
 * Shared behaviour for drawers and modals: locks page scroll, closes on Escape,
 * keeps Tab focus inside the panel and restores focus to the opener on close.
 */
export default function useOverlay(open, onClose) {
  const panelRef = useRef(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  })

  useEffect(() => {
    if (!open) return undefined
    const opener = document.activeElement

    lockCount += 1
    document.documentElement.classList.add('scroll-locked')

    const focusFirst = window.requestAnimationFrame(() => {
      const panel = panelRef.current
      const target = panel?.querySelector('[data-autofocus]') ?? panel?.querySelector(FOCUSABLE)
      target?.focus({ preventScroll: true })
    })

    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onCloseRef.current()
        return
      }
      const panel = panelRef.current
      if (event.key !== 'Tab' || !panel) return
      const items = [...panel.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null)
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)

    return () => {
      window.cancelAnimationFrame(focusFirst)
      document.removeEventListener('keydown', onKey)
      lockCount -= 1
      if (lockCount === 0) document.documentElement.classList.remove('scroll-locked')
      if (opener instanceof HTMLElement && document.contains(opener)) opener.focus({ preventScroll: true })
    }
  }, [open])

  return panelRef
}
