import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ReactNode } from "react";

interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
}

export function PlaceholderTable<T extends object>({
  columns,
  data,
  emptyMessage = "No data yet. Connect your backend to populate this table.",
}: {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}) {
  if (data.length === 0) {
    return (
      <Card>
        <p className="text-center text-sm text-slate-500 py-8">{emptyMessage}</p>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className="px-6 py-3 text-left font-medium text-slate-500"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0">
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-6 py-4 text-slate-700">
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export function StatusBadge({ status }: { status: string }) {
  return <Badge status={status} />;
}
