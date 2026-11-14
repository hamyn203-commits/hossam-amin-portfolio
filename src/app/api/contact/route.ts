import { NextResponse } from "next/server";
import { InquiryFormData } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<InquiryFormData>;

    if (!body.name || !body.email || !body.details) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const referenceId = `HA-${Date.now().toString(36).toUpperCase().slice(-6)}`;

    // Structured server log for inquiries
    console.info("[PORTFOLIO_INQUIRY]", {
      referenceId,
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      companyOrWebsite: body.companyOrWebsite || null,
      projectType: body.projectType || "Custom Project",
      budgetRange: body.budgetRange || "Unspecified",
      timeline: body.timeline || "Unspecified",
      details: body.details,
    });

    return NextResponse.json(
      {
        ok: true,
        referenceId,
        message: "Project inquiry received successfully.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
