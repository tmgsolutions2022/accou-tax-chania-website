# AccouTaxChania - Next.js App

A professional accounting services website built with Next.js 15, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ (as specified in .nvmrc)
- npm or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with Header/Footer
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
└── components/
    ├── Header.tsx       # Navigation header
    ├── Footer.tsx       # Footer component
    ├── HeroSection.tsx  # Hero section
    ├── ServicesSection.tsx     # Services grid
    ├── TeamSection.tsx         # Team members
    ├── TestimonialsSection.tsx # Client testimonials
    └── ContactSection.tsx      # Contact form & info
```

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Responsive design
- ✅ Dark mode support (via class-based toggle)
- ✅ Material Symbols icons
- ✅ Optimized images with Next.js Image component
- ✅ SEO-friendly with proper metadata
- ✅ Accessible form components

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Material Symbols Outlined
- **Form Styling:** @tailwindcss/forms

## Customization

### Colors

The custom color palette is defined in `tailwind.config.ts`:
- Primary: #e69138
- Background (light): #FDFBF8
- Background (dark): #1C1B1A

### Content

All content can be updated in the respective component files:
- Team members: `src/components/TeamSection.tsx`
- Services: `src/components/ServicesSection.tsx`
- Testimonials: `src/components/TestimonialsSection.tsx`
- Contact info: `src/components/ContactSection.tsx`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## License

Private - All Rights Reserved © 2024 AccouTaxChania
