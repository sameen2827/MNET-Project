/**
 * NeonDB placeholder — connect with @neondatabase/serverless when ready.
 * DATABASE_URL should be set in Vercel environment variables.
 */
export function getDatabaseUrl() {
  const url = process.env.DATABASE_URL;
  if (!url && process.env.NODE_ENV === "production") {
    console.warn("DATABASE_URL is not configured");
  }
  return url;
}

// TODO: Add Drizzle ORM or Prisma schema for multi-tenant data model
