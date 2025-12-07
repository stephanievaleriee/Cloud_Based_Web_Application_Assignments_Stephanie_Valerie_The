import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const progress = await prisma.sessionProgress.upsert({
      where: { sessionId: body.sessionId },
      update: {
        timeRemaining: body.timeRemaining,
        stage: body.stage,
      },
      create: {
        sessionId: body.sessionId,
        timeRemaining: body.timeRemaining,
        stage: body.stage,
      },
    });

    return NextResponse.json(progress);
  } catch (error) {
    console.error("SAVE PROGRESS ERROR:", error);
    return NextResponse.json(
      { error: "Failed to save progress" },
      { status: 500 }
    );
  }
}

// ✅ LOAD PROGRESS (FOR RESUME)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId) {
    return NextResponse.json(
      { error: "Missing sessionId" },
      { status: 400 }
    );
  }

  const progress = await prisma.sessionProgress.findUnique({
    where: { sessionId },
  });

  return NextResponse.json(progress);
}
