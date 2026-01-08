# Chat Application Interface

This React + Vite + Tailwind layout tests viewport constraints: fixed header, fixed footer input, and a scrollable message area.

## Setup
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview build: `npm run preview`

## Notes
- The message list is intentionally `overflow-y-auto` to confine scroll to the middle pane; removing it will let content spill.
- Tailwind is configured via `tailwind.config.js`, and base styles live in `src/index.css`.
