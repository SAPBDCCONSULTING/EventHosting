# The Meridian — Private Corporate Event Venues

A premium, dark-luxe marketing site + reservation pipeline for a corporate
event venue brand (CXO summits, global delegations, brand launches, gala
dinners, board meetings, executive offsites).

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 ·
Framer Motion · Prisma · zod · lucide-react**.

## Getting started

```bash
cp .env.example .env   # defaults work out of the box (SQLite)
npm install            # runs `prisma generate` via postinstall
npm run db:push        # creates the local SQLite database
npm run dev            # http://localhost:3000
```

## Database

Reservations submitted through the booking form are validated with **zod** in
`POST /api/reservations` and stored via Prisma in the `Reservation` table
(name, contact, city, experience type, guests, preferred date, notes, status,
timestamps). A honeypot field silently drops basic spam bots.

| Command             | Purpose                              |
| ------------------- | ------------------------------------ |
| `npm run db:push`   | Sync schema to the database          |
| `npm run db:studio` | Open Prisma Studio to browse records |

### Switching to Postgres for production

1. In `prisma/schema.prisma`, change `provider = "sqlite"` → `"postgresql"`.
2. Set `DATABASE_URL` to your hosted Postgres URL (Neon, Supabase, Vercel
   Postgres, RDS…).
3. Run `npx prisma db push` (or wire up `prisma migrate` for versioned
   migrations).

## Deployment (Vercel)

1. Push the repo to GitHub/GitLab and import it into Vercel.
2. Add environment variables:
   - `DATABASE_URL` — your production Postgres URL
   - `NEXT_PUBLIC_SITE_URL` — e.g. `https://yourdomain.com`
3. Deploy — the build script runs `prisma generate` automatically.

> SQLite is fine for local development and demos. Use a hosted Postgres for
> any real production traffic (serverless filesystems are ephemeral).

## Customising the brand

Almost all content lives in **`src/lib/data.ts`** — brand name, phone, email,
addresses, cities, amenities, experiences, locations, differentiators,
testimonials, FAQs and gallery labels. Theme tokens (colors, fonts,
animations) live in **`src/app/globals.css`**.

## Project structure

```
prisma/schema.prisma          Reservation model
src/app/api/reservations/     POST endpoint (zod-validated, Prisma-backed)
src/app/                      layout, page, robots, sitemap, icon, globals
src/components/               Navbar, Hero, Marquee, BookingForm, Experiences,
                              Amenities, Locations, WhyUs, Gallery,
                              Testimonials, FAQ, CTABanner, Footer, Reveal
src/lib/                      data.ts (content), prisma.ts (client singleton)
```

## Recommended next steps

- Add rate limiting on `/api/reservations` (e.g. Upstash Ratelimit)
- Send notification emails on new reservations (Resend / SES)
- Replace CSS gradient gallery tiles with real photography in `/public`
- Add an admin view for the reservation pipeline (status: NEW → CONTACTED →
  CONFIRMED → COMPLETED)
