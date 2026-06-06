import { siteConfig } from "@/config/site";
import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mesh-bg grid-pattern flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-bold text-gradient">
            {siteConfig.name}
          </Link>
          <p className="mt-2 text-sm text-slate-500">{siteConfig.tagline}</p>
        </div>
        <div className="glass-card rounded-2xl p-8">{children}</div>
      </div>
    </div>
  );
}
