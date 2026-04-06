import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, email, phone } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Name, email, and phone are required." },
        { status: 400 }
      );
    }
    if (type === "inventory" && !body.category) {
      return NextResponse.json(
        { success: false, message: "Equipment category is required." },
        { status: 400 }
      );
    }
    if (type === "service" && !body.serviceType) {
      return NextResponse.json(
        { success: false, message: "Service type is required." },
        { status: 400 }
      );
    }

    const subject =
      type === "inventory"
        ? `New Inventory Inquiry from ${name}`
        : `New Service Request from ${name}`;

    // Try Web3Forms if key is set
    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (web3Key) {
      const payload = {
        access_key: web3Key,
        subject,
        from_name: name,
        replyto: email,
        email,
        ...body,
      };

      const w3res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (w3res.ok) {
        return NextResponse.json({
          success: true,
          message: "Your inquiry has been submitted successfully.",
        });
      }
      // Fall through to local save if Web3Forms fails
    }

    // Fallback: save to local JSON file
    const filePath = path.join(process.cwd(), "submissions.json");
    let submissions: unknown[] = [];
    try {
      const existing = await fs.readFile(filePath, "utf-8");
      submissions = JSON.parse(existing);
    } catch {
      // File doesn't exist yet
    }

    submissions.push({
      ...body,
      submittedAt: new Date().toISOString(),
    });

    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
