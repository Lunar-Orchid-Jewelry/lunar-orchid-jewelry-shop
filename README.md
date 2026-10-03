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

Set up NVM

```
cat << EOF > ~/.zshrc
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
EOF
```

Then to check

```
cat ~/.zshrc
```
