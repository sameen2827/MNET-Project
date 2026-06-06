import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  inactive: "bg-slate-100 text-slate-600",
  expired: "bg-red-100 text-red-700",
  draft: "bg-slate-100 text-slate-600",
  live: "bg-emerald-100 text-emerald-700",
  approved: "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700",
  paid: "bg-emerald-100 text-emerald-700",
  new: "bg-blue-100 text-blue-700",
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
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
        styles[status] ?? "bg-slate-100 text-slate-600",
        className
      )}
    >
      {status}
    </span>
  );
}
