"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const EXTENSIONS = [".com", ".net", ".io", ".co", ".ai", ".dev"];

interface DomainResult {
  domain: string;
  available: boolean;
  price: number;
  aiScore?: number;
  premium?: boolean;
}

function mockSearch(query: string): DomainResult[] {
  const base = query.toLowerCase().replace(/[^a-z0-9-]/g, "") || "mybrand";
  return EXTENSIONS.map((ext, i) => ({
    domain: `${base}${ext}`,
    available: i !== 2 && i !== 4,
    price: ext === ".ai" ? 59.99 : ext === ".io" ? 39.99 : 12.99,
    aiScore: Math.floor(70 + Math.random() * 30),
    premium: ext === ".ai" || ext === ".io",
  }));
}

export function DomainSearchHero() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[] | null>(null);
  const [searched, setSearched] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    await new Promise((r) => setTimeout(r, 900));
    setResults(mockSearch(query.trim()));
    setLoading(false);
  }

  return (
    <div className="glass-card glow-border rounded-2xl p-6 sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">Domain Search</h3>
          <p className="mt-0.5 text-xs text-slate-500">OpenSRS · Reseller ID 8849320</p>
        </div>
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium text-cyan-400">
          AI Ranked
        </span>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your business name..."
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
        <Button type="submit" variant="glow" size="lg" disabled={loading} className="shrink-0">
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Searching
            </span>
          ) : (
            "Search"
          )}
        </Button>
      </form>

      <div className="mt-3 flex flex-wrap gap-2">
        {["techstartup", "digitalagency", "consultpro"].map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => setQuery(suggestion)}
            className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-400 transition-colors hover:border-cyan-500/30 hover:text-cyan-400"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {loading && (
        <div className="mt-6 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 shimmer rounded-xl bg-slate-800/50" />
          ))}
        </div>
      )}

      {results && !loading && (
        <div className="mt-6 space-y-2">
          {results.map((r) => (
            <div
              key={r.domain}
              className={cn(
                "flex items-center justify-between rounded-xl border px-4 py-3 transition-colors",
                r.available
                  ? "border-slate-700 bg-slate-800/40 hover:border-cyan-500/30"
                  : "border-slate-800 bg-slate-900/30 opacity-50"
              )}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="truncate font-mono text-sm text-slate-200">{r.domain}</span>
                <Badge status={r.available ? "available" : "taken"} />
              </div>
              <div className="flex shrink-0 items-center gap-3 ml-2">
                {r.available && (
                  <>
                    <span className="hidden text-xs text-violet-400 sm:inline">{r.aiScore}%</span>
                    <span className="text-sm font-semibold text-cyan-400">${r.price}</span>
                    <Button size="sm" variant="primary">Buy</Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {!searched && !loading && (
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { label: "Register", desc: "Instant setup" },
            { label: "Transfer", desc: "Easy migration" },
            { label: "DNS", desc: "Full control" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-3 text-center"
            >
              <p className="text-xs font-medium text-slate-300">{item.label}</p>
              <p className="text-[10px] text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
