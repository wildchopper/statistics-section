# Statistics Section

A responsive statistics section built with React, TypeScript, semantic HTML, and CSS.

## Live Demo

https://wildchopper.github.io/statistics-section/

## Features

- Responsive statistics section with header copy, abstract imagery, and metric cards
- Statistics loaded from the GreatFrontEnd metrics API
- API metrics mapped to display labels through typed shared data
- Loading, empty, and error states for the statistics list
- Component-based structure with colocated styles
- Data-driven rendering through typed props
- Design tokens for spacing, typography, colors, radii, shadows, and fixed image sizes
- Accessible section labeling, status messaging, and image alt text
- Image dimensions, `decoding`, and loading attributes set to reduce layout shift and improve perceived load
- Unit and integration tests with React Testing Library and Vitest
- GitHub Pages deployment workflow with lint, test, and build gates

## Implementation Details

- Section content data is stored in `src/components/statisticsSectionData.ts`
- Statistics section types live in `src/components/StatisticsSection/types.ts`
- Statistics content and card types live in `src/components/Statistics/types.ts`
- API response types live in `src/services/types.ts`
- Application state types live in `src/application/types.ts`
- API fetching is handled by `src/services/fetch-statistics.ts`
- Statistics loading, mapping, and state handling live in `src/application/get-statistics.ts`
- Component styles are colocated with their components
- Global CSS contains design tokens, base font setup, reset rules, and list normalization
- Mobile and tablet layouts stack the image and statistics vertically
- Desktop layout uses CSS Grid for two equal content columns
- Non-filled states render as semantic status or alert messages instead of text inside a list
- External links use `rel="noreferrer"` when opened in a new tab
- Cross-browser compatibility should be checked in major browsers including Chrome, Firefox, and Safari

## Edge Cases

- API failures should render the error state without leaving stale statistics visible
- Empty API responses should render the empty state
- Unknown metric keys should be caught by TypeScript when updating the typed metric labels
- Long headings and descriptions should wrap instead of overflowing the layout
- Statistics cards should keep their internal spacing when values grow in length
- Image sizing should remain stable across responsive breakpoints
- Tests should fail when required component props, state names, or API response fields are renamed

## Stretch Goals

- Keep CSS and JavaScript lean for fast load times
- Improve accessibility with semantic HTML, meaningful labels, image alt text, status messaging, and ARIA only where it improves the experience
- Expand tests to cover visual edge cases and additional API response shapes
- Consider serving smaller responsive image variants for mobile and tablet viewports

## Tech Stack

- React
- TypeScript
- Vite
- CSS3
- Vitest
- React Testing Library
- ESLint
- GitHub Actions
- GitHub Pages

## Getting Started

Clone and run the project:

```bash
git clone https://github.com/wildchopper/statistics-section.git
cd statistics-section
npm install
npm run dev
```

Run tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```
