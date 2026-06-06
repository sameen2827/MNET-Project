import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ campaigns: [] });
}

export async function POST(request: Request) {
  const body = await request.json();
  // TODO: Create email/social/landing page campaign
  return NextResponse.json({ message: "Campaign created placeholder", ...body });
}
