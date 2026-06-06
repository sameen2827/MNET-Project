# MNETINC Platform

AI-Powered Digital Business Franchise Platform — domains, hosting, websites, AI agents, marketing automation, and reseller ecosystem.

**Tagline:** Launch. Automate. Resell. Grow.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel
- **Database:** NeonDB (placeholder)
- **Domains:** OpenSRS API (Reseller ID: 8849320)

## Project Structure

```
src/
├── app/
│   ├── (auth)/              # Login, register, agent application
│   ├── dashboard/           # User platform
│   ├── agent/               # Agent/reseller portal
│   ├── admin/               # Admin dashboard
│   ├── api/                 # API route handlers
│   ├── about/               # Corporate pages
│   └── pricing/
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── layout/              # Header, footer, sidebar
│   ├── landing/             # Marketing sections
│   └── dashboard/           # Dashboard components
├── config/                  # Site config, RBAC roles
├── lib/                     # Auth, OpenSRS, DB utilities
└── types/                   # TypeScript interfaces
```

## Getting Started

```bash
cd mnetinc
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Corporate website |
| `/login` | User authentication |
| `/register` | User registration |
| `/agent-apply` | Agent application form |
| `/dashboard` | User dashboard |
| `/agent` | Agent/reseller portal |
| `/admin` | Admin dashboard |

## Deploy to Vercel

1. Push this repo to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Set root directory to `mnetinc` if repo root is parent folder
4. Add environment variables from `.env.example`
5. Deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
cd mnetinc
vercel
```

## Next Steps

- [ ] Implement authentication (NextAuth / Clerk)
- [ ] Connect NeonDB with Prisma or Drizzle
- [ ] Integrate OpenSRS domain API
- [ ] Add AI agent backends (OpenAI)
- [ ] WhatsApp & Facebook Messenger integrations
- [ ] Stripe subscription billing
- [ ] Analytics tracking SDK

## Business Model

```
MNETINC → Agents → Businesses → End Customers
```

Recurring revenue from subscriptions, domains, hosting, AI services, and reseller commissions.
