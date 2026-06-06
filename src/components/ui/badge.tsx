import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  active: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  pending: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  inactive: "bg-slate-500/15 text-slate-400 border-slate-500/30",
  expired: "bg-red-500/15 text-red-400 border-red-500/30",
  draft: "bg-slate-500/15 text-slate-400 border-slate-500/30",
  live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  approved: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  rejected: "bg-red-500/15 text-red-400 border-red-500/30",
  paid: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  new: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  available: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  taken: "bg-red-500/15 text-red-400 border-red-500/30",
  premium: "bg-violet-500/15 text-violet-400 border-violet-500/30",
};

export function Badge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize",
        styles[status] ?? "bg-slate-500/15 text-slate-400 border-slate-500/30",
        className
      )}
    >
      {status}
    </span>
  );
}
