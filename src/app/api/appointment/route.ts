import { NextRequest, NextResponse } from "next/server";
import { appointmentFormSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { doctorsData } from "@/data/doctors";
import { departmentsData } from "@/data/departments";

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting (5 requests per minute)
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const rateLimit = checkRateLimit(`appointment_${ip}`, 5, 60 * 1000);

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Too many appointment requests from this connection. Please wait a minute or call our 24x7 desk at 1800-102-CARE.",
        },
        { status: 429 }
      );
    }

    // 2. Body Parsing
    const body = await req.json();

    // 3. Honeypot Bot Detection
    if (body.website_hp && body.website_hp.length > 0) {
      // Silently accept to avoid alerting bot, but return mock
      return NextResponse.json(
        { success: true, message: "Appointment received." },
        { status: 200 }
      );
    }

    // 4. Zod Validation
    const parsed = appointmentFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed. Please verify your details.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Lookup Doctor and Department names
    const doctor = doctorsData.find((d) => d.id === data.doctorId);
    const department = departmentsData.find((d) => d.id === data.departmentId);

    // 5. Generate secure booking reference
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `HC-2026-${randomSuffix}`;

    const confirmation = {
      referenceId,
      patientName: data.patientName,
      patientEmail: data.patientEmail,
      patientPhone: data.patientPhone,
      doctorName: doctor?.name || "Consultant Specialist",
      departmentName: department?.name || "Outpatient Department",
      consultationFee: doctor?.consultationFee || "₹1,200",
      date: data.date,
      timeSlot: data.timeSlot,
      visitType: data.visitType,
      createdAt: new Date().toISOString(),
    };

    // In a live system, trigger confirmation email and SMS gateway here
    return NextResponse.json(
      {
        success: true,
        message: "Your appointment has been successfully scheduled.",
        data: confirmation,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Appointment API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please call 1800-102-CARE for urgent assistance." },
      { status: 500 }
    );
  }
}
