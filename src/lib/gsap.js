import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const MOTION_OK = '(prefers-reduced-motion: no-preference)'
export const EASE = 'power3.out'

/**
 * Scroll-triggered fade/rise for the elements matching `selector` inside `root`.
 * Call it inside a useGSAP scope so the tweens and ScrollTriggers are reverted on unmount.
 */
export function revealOnScroll(root, selector, { trigger, y = 28, stagger = 0.1, duration = 0.9, start = 'top 82%', ...rest } = {}) {
  if (!root) return null
  const elements = [...root.querySelectorAll(selector)]
  if (!elements.length) return null
  const triggerEl = typeof trigger === 'string' ? root.querySelector(trigger) : trigger
  return gsap.from(elements, {
    autoAlpha: 0,
    y,
    duration,
    stagger,
    ease: EASE,
    clearProps: 'transform',
    scrollTrigger: { trigger: triggerEl ?? elements[0], start, once: true },
    ...rest,
  })
}

// Image loads can shift trigger positions slightly; refresh once everything is in.
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })
  // Handy for inspecting timelines from the console during development.
  if (import.meta.env.DEV) window.gsap = gsap
}

export { gsap, ScrollTrigger, useGSAP }
