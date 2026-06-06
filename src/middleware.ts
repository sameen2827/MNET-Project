import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Route protection placeholder.
 * TODO: Enable when auth is implemented — redirect unauthenticated users from protected routes.
 */
const PROTECTED_PREFIXES = ["/dashboard", "/agent", "/admin"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (isProtected) {
    // const session = request.cookies.get("session");
    // if (!session) return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/agent/:path*", "/admin/:path*"],
};
