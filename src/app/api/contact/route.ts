import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const rateLimit = checkRateLimit(`contact_${ip}`, 5, 60 * 1000);

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few moments before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();

    if (body.website_hp && body.website_hp.length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data.", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting HopeCare Hospital. We will be in touch shortly.",
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
