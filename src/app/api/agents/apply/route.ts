import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  // TODO: Save agent application and notify admin
  return NextResponse.json({
    message: "Application received — pending admin approval",
    application: {
      name: body.name,
      email: body.email,
      company: body.company,
      status: "pending",
    },
  });
}
