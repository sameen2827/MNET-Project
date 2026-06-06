"use client";

import { AI_AGENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const AGENT_META: Record<string, { icon: string; color: string }> = {
  "domain-growth": { icon: "🌐", color: "from-cyan-500/20 to-cyan-500/5" },
  "website-health": { icon: "💚", color: "from-emerald-500/20 to-emerald-500/5" },
  marketing: { icon: "📣", color: "from-violet-500/20 to-violet-500/5" },
  "lead-gen": { icon: "🎯", color: "from-amber-500/20 to-amber-500/5" },
  whatsapp: { icon: "💬", color: "from-green-500/20 to-green-500/5" },
  facebook: { icon: "📘", color: "from-blue-500/20 to-blue-500/5" },
};

const WORKFLOW = [
  { step: "01", label: "Register Domain", sub: "OpenSRS", done: true },
  { step: "02", label: "Deploy Website", sub: "Vercel", done: true },
  { step: "03", label: "Run Marketing", sub: "AI Agents", active: true },
  { step: "04", label: "Capture Leads", sub: "WhatsApp & FB", done: false },
];

export function AIAgentHub() {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeCount = AI_AGENTS.filter((a) => a.status === "active").length;

  return (
    <div className="glass-card glow-border flex h-full flex-col rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-700/50 px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-100">AI Agent Suite</h3>
            <p className="mt-0.5 text-xs text-slate-500">Automate your entire business stack</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] font-medium text-emerald-400">{activeCount} Active</span>
          </div>
        </div>

        {/* Mini stats */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: "Domains", value: "12", color: "text-cyan-400" },
            { label: "Sites Live", value: "8", color: "text-violet-400" },
            { label: "Leads", value: "47", color: "text-amber-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-slate-700/50 bg-slate-900/50 px-3 py-2 text-center"
            >
              <p className={cn("text-lg font-bold", stat.color)}>{stat.value}</p>
              <p className="text-[10px] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Agent grid */}
      <div className="flex-1 p-4">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">
          Your Agents
        </p>
        <div className="grid grid-cols-2 gap-2">
          {AI_AGENTS.map((agent) => {
            const meta = AGENT_META[agent.id] ?? { icon: "🤖", color: "from-slate-500/20 to-slate-500/5" };
            const isActive = agent.status === "active";
            const isHovered = hovered === agent.id;

            return (
              <div
                key={agent.id}
                onMouseEnter={() => setHovered(agent.id)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "relative overflow-hidden rounded-xl border p-3 transition-all duration-200",
                  isActive
                    ? "border-slate-600 bg-slate-800/60"
                    : "border-slate-800 bg-slate-900/40 opacity-70",
                  isHovered && isActive && "border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                )}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60", meta.color)} />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{meta.icon}</span>
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    ) : (
                      <span className="text-[9px] text-slate-600">Soon</span>
                    )}
                  </div>
                  <p className="mt-2 text-[11px] font-medium leading-tight text-slate-200">
                    {agent.name.replace(" Agent", "")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow pipeline */}
        <p className="mb-3 mt-5 text-[10px] font-medium uppercase tracking-wider text-slate-500">
          Launch Pipeline
        </p>
        <div className="space-y-1.5">
          {WORKFLOW.map((item, i) => (
            <div key={item.step} className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold",
                  item.done
                    ? "bg-cyan-500/20 text-cyan-400"
                    : item.active
                      ? "bg-violet-500/20 text-violet-400 ring-1 ring-violet-500/30"
                      : "bg-slate-800 text-slate-600"
                )}
              >
                {item.done ? "✓" : item.step}
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "text-xs font-medium truncate",
                  item.active ? "text-violet-300" : item.done ? "text-slate-300" : "text-slate-600"
                )}>
                  {item.label}
                </p>
                <p className="text-[10px] text-slate-600">{item.sub}</p>
              </div>
              {i < WORKFLOW.length - 1 && (
                <div className="absolute left-[22px] hidden" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-slate-700/50 p-4">
        <Link
          href="/dashboard/ai-assistant"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 py-2.5 text-xs font-medium text-cyan-400 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10"
        >
          Open Agent Dashboard
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
