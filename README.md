# U.K Aesthetics Lounge

Modern rebuild of the U.K Aesthetics Lounge site with a booking system, staff diaries, and admin panel.

## Stack

- **client** — Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **server** — Express + Mongoose (MongoDB) + JWT auth

## Dev

```bash
# client
cd client && npm install && npm run dev   # http://localhost:3000

# server
cd server && npm install && npm run dev   # http://localhost:5000
```

## Layout

```
client/
  src/
    app/              # Next.js App Router pages
    components/       # Shared UI
    data/             # Seed data (treatments.json)
    lib/              # API client, helpers
  public/images/      # Logo + photos
server/
  index.js            # Express entry
  models/             # Mongoose schemas
  routes/             # REST routes
  middleware/         # JWT auth
```

## Roles

- **client** — books appointments, views own bookings
- **staff** — manages own diary + availability, sees own bookings
- **admin** — manages everything (staff, treatments, bookings, settings)

## Features

- Multi-treatment bookings (same practitioner, back-to-back)
- Per-treatment payment mode: `pay_full` / `deposit` / `pay_on_arrival`
- Staff availability editor with recurring weekly + one-off blackouts
- WhatsApp click-to-chat (number configured in admin settings)
- Frontend wireframed; backend is scaffolded stubs
