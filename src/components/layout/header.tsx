import { siteConfig } from "@/config/site";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-800/50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">
            M
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
          </span>
          <span className="text-xl font-bold text-slate-100">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/login" variant="ghost" size="sm">
            Sign In
          </ButtonLink>
          <ButtonLink href="/register" variant="glow" size="sm">
            Get Started
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
