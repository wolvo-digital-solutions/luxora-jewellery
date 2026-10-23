# Luxora Jewellery

A React + Vite storefront for Luxora Jewellery, with GSAP and ScrollTrigger animations.

```bash
npm install --legacy-peer-deps   # plain `npm install` currently trips an npm peer-resolution bug
npm run dev
npm run build
npm run lint
```

## Structure

- `src/components/`: header (announcement bar, navbar, mobile menu), homepage sections, product card, overlays (cart drawer, search, quick view, toast), footer
- `src/pages/`: Home, Collections (filter and sort through URL params), Product detail, Wishlist, Account, information pages
- `src/data/`: products, categories and collections, navigation and footer links, contact details
- `src/context/StoreProvider.jsx` and `src/hooks/useStore.js`: cart, wishlist and UI state, with the cart and wishlist saved to `localStorage`
- `src/lib/gsap.js`: GSAP/ScrollTrigger registration and the shared `revealOnScroll` helper. Every animation runs inside `useGSAP` and `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`.

## Demo limitations

These parts are deliberately not connected to a backend. Each one tells the user so instead of pretending to work:

- **Checkout** places no order and collects no payment details.
- **Accounts, order tracking and contact forms** validate input and then explain that the service isn't connected.
- **Newsletter**: set `VITE_NEWSLETTER_ENDPOINT` to a URL that accepts `POST { email }` to turn on real sign-ups.
- **Testimonials** on the homepage are demonstration quotes, labelled as samples and shown without star ratings. Replace them with genuine reviews in `src/data/home.js`.
- **Sample content**: ratings, prices, policies, phone number, email and social links are placeholders. Replace them with verified business details in `src/data/` before launch.

## Image credits

The hero portrait (`hero-model.webp`) was supplied by the project owner; confirm its usage rights before launch. All other photographs come from [Unsplash](https://unsplash.com) under the Unsplash License, which allows free commercial use without attribution. Each file in `src/assets/images/` is named after its role.
