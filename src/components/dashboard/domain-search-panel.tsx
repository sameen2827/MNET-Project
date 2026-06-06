"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

const EXTENSIONS = [".com", ".net", ".io", ".co", ".ai"];

interface DomainResult {
  domain: string;
  available: boolean;
  price: number;
  aiScore: number;
}

function mockSearch(query: string): DomainResult[] {
  const base = query.toLowerCase().replace(/[^a-z0-9-]/g, "") || "mybrand";
  return EXTENSIONS.map((ext, i) => ({
    domain: `${base}${ext}`,
    available: i !== 1,
    price: ext === ".ai" ? 59.99 : ext === ".io" ? 39.99 : 12.99,
    aiScore: Math.floor(75 + Math.random() * 25),
  }));
}

export function DomainSearchPanel() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[] | null>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setResults(mockSearch(query.trim()));
    setLoading(false);
  }

  return (
    <Card glow className="mb-6">
      <CardHeader
        title="AI Domain Search"
        description="Powered by OpenSRS (Reseller ID: 8849320) · AI brand scoring"
      />
      <form onSubmit={handleSearch} className="flex gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search domains..."
          className="flex-1 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
        <Button type="submit" variant="glow" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </form>

      {results && (
        <div className="mt-4 space-y-2">
          {results.map((r) => (
            <div
              key={r.domain}
              className={cn(
                "flex items-center justify-between rounded-lg border px-4 py-3",
                r.available ? "border-slate-700 bg-slate-800/40" : "border-slate-800 opacity-50"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-slate-200">{r.domain}</span>
                <Badge status={r.available ? "available" : "taken"} />
              </div>
              <div className="flex items-center gap-3">
                {r.available && (
                  <>
                    <span className="text-xs text-violet-400">AI {r.aiScore}%</span>
                    <span className="text-sm font-medium text-cyan-400">${r.price}/yr</span>
                    <Button size="sm">Register</Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
