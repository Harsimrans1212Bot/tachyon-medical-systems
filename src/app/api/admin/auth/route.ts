import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const adminPassword = process.env.ADMIN_PASSWORD || "tachyon2026";

  if (password === adminPassword) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json(
    { success: false, message: "Invalid password" },
    { status: 401 }
  );
}
