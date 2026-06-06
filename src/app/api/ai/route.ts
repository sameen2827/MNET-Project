import { AI_AGENTS } from "@/lib/constants";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ agents: AI_AGENTS });
}

export async function POST(request: Request) {
  const body = await request.json();
  // TODO: Invoke AI agent (OpenAI, etc.)
  return NextResponse.json({
    message: "AI agent invocation placeholder",
    agentId: body.agentId,
    response: "Agent response will appear here.",
  });
}
