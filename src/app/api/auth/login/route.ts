import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  // TODO: Validate credentials and create session
  return NextResponse.json({
    message: "Auth placeholder — implement session/JWT",
    email: body.email,
  });
}
