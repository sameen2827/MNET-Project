import { siteConfig } from "@/config/site";
import Link from "next/link";

const FOOTER_LINKS = {
  Platform: [
    { href: "/dashboard", label: "User Dashboard" },
    { href: "/agent", label: "Agent Portal" },
    { href: "/pricing", label: "Pricing" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/agent-apply", label: "Become an Agent" },
    { href: "#", label: "Contact" },
  ],
  Legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "GDPR" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-gradient">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-slate-500">{siteConfig.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["OpenSRS", "Vercel", "NeonDB", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-slate-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-slate-300">{title}</h4>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
