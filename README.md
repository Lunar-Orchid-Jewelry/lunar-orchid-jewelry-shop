# Lunar Orchid Jewelry Shop

Prerequisites:

- Install node.js

Main files to look at:

- `app/page.tsx`: Home page
- `app/products/data.ts`: Data to populate product pages
- `app/products/[slug]/page.tsx`: Product page generation
- `app/ui/product-page.tsx`: Product page component <- actual page structure/style
- `app/ui/`: Various reusable visual components, e.g. navbar, footer, and carousel

First time setup:

```
npm install
```

To run the dev server, run

```
npm run dev
```

To build for production, run

```
npm run build
npx serve out
```
