import { siteConfig } from "@/config/site";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
            M
          </span>
          <span className="text-xl font-bold text-slate-900">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/login" variant="ghost" size="sm">
            Sign In
          </ButtonLink>
          <ButtonLink href="/register" size="sm">
            Get Started
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
