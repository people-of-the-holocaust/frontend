# Frontend TypeScript Migration TODO

Use this checklist to track the frontend migration from JavaScript/JSX to TypeScript/TSX.

## Config And Dependencies

- [x] Update `package.json` with TypeScript build script and type dependencies
- [x] Run `npm install` to update `package-lock.json`
- [x] Add `tsconfig.json`
- [x] Add `tsconfig.node.json`
- [x] Rename `vite.config.js` to `vite.config.ts`
- [x] Update `eslint.config.js` to include TypeScript file extensions

## Source Entry Files

- [x] Rename and convert `src/main.jsx` to `src/main.tsx`
- [x] Rename and convert `src/App.jsx` to `src/App.tsx`

## Data Files

- [x] Add `src/data/types.ts`
- [x] Rename and convert `src/data/loaders.js` to `src/data/loaders.ts`
- [x] Rename and convert `src/data/indexes.js` to `src/data/indexes.ts`

## Pages

- [x] Rename and convert `src/pages/Home.jsx` to `src/pages/Home.tsx`
- [x] Rename and convert `src/pages/People.jsx` to `src/pages/People.tsx`
- [x] Rename and convert `src/pages/Places.jsx` to `src/pages/Places.tsx`

## Components

- [x] Rename and convert `src/components/Navbar.jsx` to `src/components/Navbar.tsx`
- [x] Rename and convert `src/components/MapView.jsx` to `src/components/MapView.tsx`
- [x] Rename and convert `src/components/PeopleList.jsx` to `src/components/PeopleList.tsx`
- [x] Rename and convert `src/components/PersonDetails.jsx` to `src/components/PersonDetails.tsx`
- [x] Rename and convert `src/components/PlaceList.jsx` to `src/components/PlaceList.tsx`
- [x] Rename and convert `src/components/PlaceDetails.jsx` to `src/components/PlaceDetails.tsx`

## Verification

- [x] Run `npm run build`
- [x] Run `npm run dev`
- [x] Check the Home page loads
- [x] Check the map loads markers/clusters
- [x] Check navigation works
- [x] Check People records load from CSV
- [x] Check People search works
- [x] Check clicking a person shows activities
- [x] Check Places records load from CSV
- [x] Check Places search works
- [x] Check clicking a place shows activities
