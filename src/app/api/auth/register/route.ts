import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  // TODO: Create user in NeonDB with role "user"
  return NextResponse.json({
    message: "Registration placeholder — connect database",
    user: { name: body.name, email: body.email, role: "user" },
  });
}
