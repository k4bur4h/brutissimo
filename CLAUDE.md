# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is the Brutissimo vending machine showcase website built with Next.js (App Router), Sanity CMS, and deployed on Vercel. The project follows a mobile-first, SEO-optimized approach with a Vendomat-inspired design system.

## Tech Stack
- **Frontend**: Next.js 15+ with App Router, TypeScript, Tailwind CSS
- **CMS**: Sanity v3 (headless CMS)
- **Deployment**: Vercel
- **Email**: Resend for contact forms
- **Analytics**: Vercel Analytics + optional GA4

## Common Development Commands

### Initial Setup
```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
npm install @sanity/client @sanity/image-url next-sanity
npm install -D @sanity/vision
npx sanity@latest init --env
```

### Development
```bash
npm run dev         # Start Next.js dev server (port 3000)
npm run sanity:dev  # Start Sanity Studio (port 3333)
```

### Build & Deploy
```bash
npm run build       # Build production bundle
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript compiler check
```

### Testing
```bash
npm run test        # Run tests (when implemented)
npm run lighthouse  # Check PageSpeed scores
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (site)/            # Public site routes
│   │   ├── page.tsx       # Homepage
│   │   ├── modellek/      # Models listing & details
│   │   ├── szolgaltatasok/# Services page
│   │   ├── rolunk/        # About page
│   │   └── kapcsolat/     # Contact page
│   ├── studio/[[...tool]]/# Sanity Studio route
│   └── api/               # API routes (contact form, revalidation)
├── components/            # React components
│   ├── ui/               # Design system components
│   └── blocks/           # Content blocks (Hero, FeatureCard, etc.)
├── lib/                  # Utilities
│   ├── sanity/          # Sanity client & queries
│   └── email/           # Resend integration
└── styles/              # Global styles
```

```
sanity/
├── schemaTypes/         # Content schemas
│   ├── siteSettings.ts  # Global settings
│   ├── model.ts         # Vending machine model
│   ├── page.ts          # Dynamic pages
│   └── service.ts       # Service content
├── sanity.config.ts     # Studio configuration
└── sanity.cli.ts        # CLI configuration
```

## Key Architecture Decisions

### Data Fetching Strategy
- Use ISR (Incremental Static Regeneration) with 60s-10min revalidation
- Implement draft mode for content preview
- Cache Sanity queries with Next.js cache

### Performance Optimization
- Image optimization via Next/Image + Sanity CDN
- Lazy loading for below-fold content
- Font subsetting and display swap
- Target: Mobile PSI score ≥ 90, LCP < 2.5s

### SEO Implementation
- Dynamic meta tags from Sanity
- Structured data (BreadcrumbList, Product schema)
- OG image generation via Next.js API route
- Automatic sitemap.xml generation

### Content Management
- Modular block-based content system
- Portable Text for rich text content
- Image gallery with responsive sizing
- Specification tables with grouped data

## Environment Variables
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=           # For preview mode
RESEND_API_KEY=             # Email service
NEXT_PUBLIC_GA_ID=          # Optional analytics
```

## Key Components to Implement

1. **Hero Block**: Full-width hero with image/video background, H1, subcopy, CTAs
2. **ModelCard**: Product card with image, short specs, CTA
3. **SpecTable**: Grouped specification table (dimensions, capacity, energy, extras)
4. **ContactForm**: Form with validation, rate limiting, honeypot/Turnstile
5. **FeatureCard**: Icon + title + description for USPs
6. **LogoWall**: Partner/client logo grid

## Security Considerations
- Rate limiting on contact form endpoints
- Honeypot or Cloudflare Turnstile for spam protection
- Environment variable validation
- CORS configuration for Sanity preview

## Deployment Notes
- Main branch deploys to production
- Pull requests create preview deployments
- Set up Sanity webhook for ISR revalidation
- Configure SPF/DKIM for email delivery