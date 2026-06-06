import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    visitors: 0,
    conversions: 0,
    revenue: 0,
    growth: 0,
  });
}
