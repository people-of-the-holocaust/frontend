# Frontend TypeScript Migration TODO

Use this checklist to track the frontend migration from JavaScript/JSX to TypeScript/TSX.

## Config And Dependencies

- [ ] Update `package.json` with TypeScript build script and type dependencies
- [ ] Run `npm install` to update `package-lock.json`
- [ ] Add `tsconfig.json`
- [ ] Add `tsconfig.node.json`
- [ ] Rename `vite.config.js` to `vite.config.ts`
- [ ] Update `eslint.config.js` to include TypeScript file extensions

## Source Entry Files

- [ ] Rename and convert `src/main.jsx` to `src/main.tsx`
- [ ] Rename and convert `src/App.jsx` to `src/App.tsx`

## Data Files

- [ ] Add `src/data/types.ts`
- [ ] Rename and convert `src/data/loaders.js` to `src/data/loaders.ts`
- [ ] Rename and convert `src/data/indexes.js` to `src/data/indexes.ts`

## Pages

- [ ] Rename and convert `src/pages/Home.jsx` to `src/pages/Home.tsx`
- [ ] Rename and convert `src/pages/People.jsx` to `src/pages/People.tsx`
- [ ] Rename and convert `src/pages/Places.jsx` to `src/pages/Places.tsx`

## Components

- [ ] Rename and convert `src/components/Navbar.jsx` to `src/components/Navbar.tsx`
- [ ] Rename and convert `src/components/MapView.jsx` to `src/components/MapView.tsx`
- [ ] Rename and convert `src/components/PeopleList.jsx` to `src/components/PeopleList.tsx`
- [ ] Rename and convert `src/components/PersonDetails.jsx` to `src/components/PersonDetails.tsx`
- [ ] Rename and convert `src/components/PlaceList.jsx` to `src/components/PlaceList.tsx`
- [ ] Rename and convert `src/components/PlaceDetails.jsx` to `src/components/PlaceDetails.tsx`

## Verification

- [ ] Run `npm run build`
- [ ] Run `npm run dev`
- [ ] Check the Home page loads
- [ ] Check the map loads markers/clusters
- [ ] Check navigation works
- [ ] Check People records load from CSV
- [ ] Check People search works
- [ ] Check clicking a person shows activities
- [ ] Check Places records load from CSV
- [ ] Check Places search works
- [ ] Check clicking a place shows activities
