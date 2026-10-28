# React + Webpack + Babel Starter

A small React and TypeScript starter with an explicit Webpack configuration. Includes CSS and image imports, a local development server, and a working Jest + Testing Library setup.

## Run locally

Requirements: Node.js 24 LTS (24.11 or newer) and npm.

```sh
nvm use
npm ci
npm run dev
```

Open [localhost:9000](http://localhost:9000). Edit `src/App/index.tsx` to start building.

## Commands

```sh
npm run check      # TypeScript, tests, and production build
npm test           # render tests in jsdom
npm run test:watch # watch tests while developing
npm run build     # optimized assets in dist/
```

## How it fits together

- `src/index.tsx` mounts React; `src/App/index.tsx` contains the starter screen.
- TypeScript files compile through `ts-loader`; JavaScript/JSX files use Babel.
- Webpack handles CSS and image assets, splits shared chunks, and generates HTML.
- Development uses fast source maps; production emits separate source maps and content-hashed filenames.
- Jest runs TypeScript component tests in jsdom with Testing Library.

This is a minimal client-side starter. Routing, data fetching, deployment, and application-specific conventions are left to the consuming project.
