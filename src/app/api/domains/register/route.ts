import { registerDomain } from "@/lib/opensrs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { domain, years } = body;

  if (!domain) {
    return NextResponse.json({ error: "Domain required" }, { status: 400 });
  }

  const result = await registerDomain(domain, years);
  return NextResponse.json(result);
}
