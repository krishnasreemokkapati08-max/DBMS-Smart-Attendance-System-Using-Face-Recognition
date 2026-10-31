# AquaWatch Frontend

A polished, responsive React dashboard for the AquaWatch water monitoring MVP.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open the extracted `aquawatch-frontend` folder in VS Code.
3. Open the VS Code terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Included pages
- Overview dashboard with consumption charts and alerts
- Buildings list, search, and add-building modal
- Water monitoring with simulated meter readings
- Alert acknowledgement and resolution workflow
- Analytics and building usage ranking
- Settings and alert threshold controls

## Demo notes
- This is a frontend-only demo. It uses sample data and browser `localStorage`.
- Changes to buildings and alert statuses persist in the same browser.
- Meter readings are simulated and are not sent to a real sensor or backend.
- Authentication is represented by a demo admin interface only.
- The frontend is not yet connected to Java Spring Boot or MySQL. API integration can be added once the backend endpoints are ready.

## Suggested next integration
Create Spring Boot REST endpoints for buildings, readings, alerts, and analytics, then replace the local demo state in `src/App.jsx` with API calls using `fetch` or Axios.
