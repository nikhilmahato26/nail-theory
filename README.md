# Nail Theory by Soumya 💅✨

> _Pretty Nails, Pretty Mood ✨_

A high-end, feminine, Pinterest-inspired marketing website for **Nail Theory by Soumya** — a luxury home-based nail studio and freelance nail artist. Built to feel like scrolling through a premium beauty brand: large photography, soft animations and editorial typography.

## ✦ Tech Stack

- **React 18** + **Vite** — fast, modern SPA
- **Tailwind CSS v3** — utility-first styling (no Bootstrap / MUI / SCSS)
- **Framer Motion** — scroll reveals, floating images, mouse parallax, page transitions
- **Swiper** — auto-playing testimonial slider
- **React Hook Form** — booking & contact forms with validation
- **React Router DOM** — multi-page routing
- **Lucide React** — elegant line icons

## ✦ Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## ✦ Brand

| Token        | Value                          |
| ------------ | ------------------------------ |
| Blush Pink   | `#FADADD`                      |
| Rose Pink    | `#F8C8DC`                      |
| Rose Gold    | `#B76E79`                      |
| Warm White   | `#FFFDFB`                      |
| Charcoal     | `#2D2D2D`                      |
| Headings     | Playfair Display / Cormorant Garamond |
| Body         | Poppins / Inter                |

Phone **7982691008** · Email **Arorasoumya242006@gmail.com**

## ✦ Project Structure

```
src/
├── assets/logo/          # brand logo (NT monogram)
├── components/
│   ├── hero/             # Hero + floating Pinterest collage
│   ├── about/            # About editorial + Why Choose cards
│   ├── services/         # Luxury service cards
│   ├── gallery/          # Pinterest masonry + lightbox + Instagram grid
│   ├── testimonials/     # Glassmorphism Swiper slider
│   ├── booking/          # Appointment booking card (form + WhatsApp)
│   ├── contact/          # Contact info, map & message form
│   └── common/           # Navbar, Footer, FloatingActions, headings, decorations
├── data/                 # site config, services, gallery, testimonials, features
├── hooks/                # mouse parallax, scroll-to-top
├── utils/                # shared Framer Motion variants
├── pages/                # Home · About · Services · Gallery · Contact · NotFound
├── App.jsx               # routes + page transitions
└── main.jsx              # entry
```

## ✦ Sections

Hero · About · Services · Pinterest Gallery · Why Choose · Testimonials · Booking · Instagram · Contact — plus sticky WhatsApp / Instagram / Book / Scroll-to-top floating actions.

## ✦ Notes for Production

- **Images** are royalty-free Unsplash CDN URLs in `src/data/`. Swap them for Soumya's real nail photography before launch.
- **Forms** currently log submissions to the console. Wire `BookingForm.jsx` and `ContactForm.jsx` to a backend or service like EmailJS / Formspree. The WhatsApp booking button already works (prefilled message).
- **Map** uses an OpenStreetMap embed placeholder — replace with the studio's exact location or a Google Maps embed.
- Update social links in `src/data/site.js` (`instagram`, `instagramHandle`).
