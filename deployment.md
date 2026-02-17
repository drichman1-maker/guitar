# Deployment Guide (Vercel)

## Prerequisites
- GitHub Account
- Vercel Account
- Neon (PostgreSQL) Account (or other Postgres provider)

## Steps

1. **Database Setup**
   - Create a new Project in Neon.
   - Get the `DATABASE_URL`.
   - Run `npx prisma db push` from `packages/db` to push the schema.

2. **Vercel Setup**
   - Import the monorepo from GitHub.
   - Framework Preset: `Next.js`.
   - Root Directory: `apps/web`.
   - Build Command: `turbo run build` (or customize for just web).
   - Install Command: `pnpm install`.

3. **Environment Variables**
   - `DATABASE_URL`: Your Postgres connection string.
   - `NEXT_PUBLIC_SITE_URL`: The production URL.

4. **Monorepo Handling**
   - Vercel handles TurboRepo automatically.
   - Ensure `turbo.json` and `pnpm-workspace.yaml` are at the root.

## Post-Deployment
- Configure a cron job for `packages/video-harvester` (e.g., via GitHub Actions or Vercel Cron) to run nightly video indexing.
