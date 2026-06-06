import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Fetch hosting plans from database
  return NextResponse.json({ plans: [] });
}

export async function POST(request: Request) {
  const body = await request.json();
  // TODO: Provision hosting on AWS
  return NextResponse.json({ message: "Hosting provision placeholder", ...body });
}
