import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log("📊 GET /api/session-logs - Fetching backlog from database");

  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId) {
    return NextResponse.json(
      { error: "Missing sessionId" },
      { status: 400 }
    );
  }

  const start = performance.now();

  const logs = await prisma.sessionLog.findMany({
    where: { sessionId },
    orderBy: { createdAt: "desc" },
  });

  const end = performance.now();
  console.log(`⏱ Backlog fetch time: ${(end - start).toFixed(2)} ms`);

  return NextResponse.json({ logs });
}

export async function POST(req: Request) {
  console.log("💾 POST /api/session-logs - New session saved to database");

  const body = await req.json();

  const log = await prisma.sessionLog.create({
    data: body,
  });

  return NextResponse.json(log);
}
